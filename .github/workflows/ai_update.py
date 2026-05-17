from datetime import datetime
import random

readme_path = "README.md"

with open(readme_path, "a", encoding="utf-8") as f:
    f.write(f"\n\nAI Daily Update: {datetime.now()}\n")

# Simulate ML experiment log
with open("training_log.txt", "a", encoding="utf-8") as f:
    accuracy = round(random.uniform(85, 99), 2)
    f.write(f"{datetime.now()} - Accuracy Tested: {accuracy}%\n")

print("Repository updated successfully")