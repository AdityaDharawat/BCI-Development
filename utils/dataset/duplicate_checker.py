import argparse
import hashlib
import json
import logging
import shutil
from dataclasses import dataclass, asdict
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional

DEFAULT_CONFIG = {
    "raw_data_root": "data/raw",
    "train_folder": "Training",
    "test_folder": "Testing",
    "allowed_extensions": [".jpg", ".jpeg", ".png"],
    "report_path": "utils/dataset/duplicate_report.json",
    "backup_root": "data/backups",
    "log_dir": "utils/dataset/cleanup_logs"
}


@dataclass
class DuplicateEntry:
    hash_value: str
    keep_path: str
    duplicates: List[str]
    folders: List[str]
    cross_folder: bool


def setup_logging(log_dir: Path) -> Path:
    log_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    log_path = log_dir / f'duplicate_cleanup_{timestamp}.log'
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)s] %(message)s',
        handlers=[
            logging.FileHandler(log_path, encoding='utf-8'),
            logging.StreamHandler()
        ]
    )
    return log_path


def load_config(config_path: Optional[Path] = None) -> Dict:
    if config_path is None:
        config_path = Path(__file__).resolve().parents[2] / 'configs' / 'dataset_config.json'

    if config_path.exists():
        try:
            with config_path.open('r', encoding='utf-8') as handle:
                config = json.load(handle)
                return {**DEFAULT_CONFIG, **config}
        except json.JSONDecodeError as exc:
            raise ValueError(f'Invalid JSON config at {config_path}: {exc}')
    return DEFAULT_CONFIG.copy()


def is_valid_image(path: Path, allowed_extensions: List[str]) -> bool:
    return path.is_file() and path.suffix.lower() in allowed_extensions


def compute_hash(path: Path, chunk_size: int = 8192) -> str:
    hasher = hashlib.md5()
    with path.open('rb') as handle:
        while chunk := handle.read(chunk_size):
            hasher.update(chunk)
    return hasher.hexdigest()


def scan_image_files(root: Path, allowed_extensions: List[str]) -> List[Path]:
    if not root.exists():
        raise FileNotFoundError(f'Dataset root path not found: {root}')

    files: List[Path] = []
    for path in root.rglob('*'):
        if is_valid_image(path, allowed_extensions):
            files.append(path)
    return sorted(files)


def collect_duplicates(paths: List[Path]) -> Dict[str, List[Path]]:
    hash_map: Dict[str, List[Path]] = {}
    for index, path in enumerate(paths, start=1):
        try:
            logging.info(f'Scanning ({index}/{len(paths)}): {path}')
            file_hash = compute_hash(path)
            hash_map.setdefault(file_hash, []).append(path)
        except Exception as exc:
            logging.warning(f'Unable to hash file {path}: {exc}')
    return hash_map


def build_duplicate_report(hash_map: Dict[str, List[Path]], train_root: Path, test_root: Path) -> List[DuplicateEntry]:
    duplicates: List[DuplicateEntry] = []

    for hash_value, paths in hash_map.items():
        if len(paths) < 2:
            continue

        train_paths = [p for p in paths if train_root in p.parents]
        test_paths = [p for p in paths if test_root in p.parents]
        keep_path = None

        if train_paths:
            keep_path = min(train_paths)
        else:
            keep_path = min(paths)

        duplicate_paths = [str(p) for p in paths if p != keep_path]
        folders = []
        if train_paths:
            folders.append('Training')
        if test_paths:
            folders.append('Testing')

        duplicates.append(
            DuplicateEntry(
                hash_value=hash_value,
                keep_path=str(keep_path),
                duplicates=duplicate_paths,
                folders=folders,
                cross_folder=len(folders) > 1
            )
        )

    return duplicates


def make_backup(duplicate_groups: List[DuplicateEntry], backup_root: Path, raw_root: Path) -> None:
    if not duplicate_groups:
        return

    backup_root.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    session_dir = backup_root / f'duplicate_backup_{timestamp}'
    session_dir.mkdir(parents=True, exist_ok=True)

    for entry in duplicate_groups:
        for duplicate_path in entry.duplicates:
            source = Path(duplicate_path)
            try:
                relative_path = source.relative_to(raw_root)
            except ValueError:
                relative_path = source.name

            target = session_dir / relative_path
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, target)
            logging.info(f'Backed up duplicate file: {source} -> {target}')


def remove_duplicates(duplicate_groups: List[DuplicateEntry], dry_run: bool = True) -> int:
    removed_count = 0
    for entry in duplicate_groups:
        for duplicate_path in entry.duplicates:
            path_obj = Path(duplicate_path)
            if not path_obj.exists():
                logging.warning(f'File no longer exists: {duplicate_path}')
                continue

            if dry_run:
                logging.info(f'[DRY RUN] Would remove: {duplicate_path}')
            else:
                logging.info(f'Removing duplicate: {duplicate_path}')
                path_obj.unlink()
                removed_count += 1
    return removed_count


def write_report(report_path: Path, duplicate_groups: List[DuplicateEntry], stats: Dict[str, int]) -> None:
    report_path.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        'generated_at': datetime.now().isoformat(),
        'summary': stats,
        'duplicates': [asdict(entry) for entry in duplicate_groups]
    }
    with report_path.open('w', encoding='utf-8') as handle:
        json.dump(payload, handle, indent=2)
    logging.info(f'Duplicate report written to {report_path}')


def total_stats(duplicate_groups: List[DuplicateEntry], hash_map: Dict[str, List[Path]]) -> Dict[str, int]:
    total_files = sum(len(paths) for paths in hash_map.values())
    total_duplicates = sum(len(entry.duplicates) for entry in duplicate_groups)
    cross_folder = sum(1 for entry in duplicate_groups if entry.cross_folder)
    return {
        'total_files_scanned': total_files,
        'duplicate_groups': len(duplicate_groups),
        'duplicate_files': total_duplicates,
        'cross_folder_duplicates': cross_folder
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description='Detect and clean duplicate MRI dataset files while preserving train/test integrity.'
    )
    parser.add_argument('--config', type=str, help='Path to dataset config JSON file')
    parser.add_argument('--dry-run', action='store_true', help='Scan and report duplicates without deleting files')
    parser.add_argument('--backup', action='store_true', help='Create a backup of duplicate files before deletion')
    parser.add_argument('--root', type=str, help='Override the raw dataset root path')
    parser.add_argument('--log-dir', type=str, help='Directory for cleanup logs')
    parser.add_argument('--report', type=str, help='Path to write duplicate report JSON')
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    config = load_config(Path(args.config) if args.config else None)

    if args.root:
        config['raw_data_root'] = args.root
    if args.log_dir:
        config['log_dir'] = args.log_dir
    if args.report:
        config['report_path'] = args.report

    raw_root = Path(config['raw_data_root']).resolve()
    train_root = raw_root / config['train_folder']
    test_root = raw_root / config['test_folder']
    report_path = Path(config['report_path']).resolve()
    backup_root = Path(config['backup_root']).resolve()
    log_dir = Path(config['log_dir']).resolve()

    setup_logging(log_dir)
    logging.info('Starting duplicate scan')
    logging.info(f'Raw dataset directory: {raw_root}')
    logging.info(f'Train directory: {train_root}')
    logging.info(f'Test directory: {test_root}')

    try:
        paths = scan_image_files(raw_root, config['allowed_extensions'])
        logging.info(f'Found {len(paths)} image files to scan')
        hash_map = collect_duplicates(paths)
        duplicate_groups = build_duplicate_report(hash_map, train_root, test_root)
        stats = total_stats(duplicate_groups, hash_map)

        logging.info('Duplicate scan complete')
        logging.info(json.dumps(stats, indent=2))

        if args.backup and duplicate_groups and not args.dry_run:
            make_backup(duplicate_groups, backup_root, raw_root)

        if not args.dry_run:
            removed_count = remove_duplicates(duplicate_groups, dry_run=False)
            logging.info(f'Removed {removed_count} duplicate files')
        else:
            logging.info('Dry run enabled, no files were removed')

        write_report(report_path, duplicate_groups, stats)
        logging.info('Duplicate cleanup completed successfully')
        return 0
    except Exception as exc:
        logging.exception('Duplicate cleanup failed')
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
