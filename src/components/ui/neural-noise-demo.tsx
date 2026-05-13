import { NeuralNoise } from "@/components/ui/neural-noise";

export default function NeuralNoiseDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <NeuralNoise color={[0.9, 0.2, 0.4]} opacity={0.5} speed={0.001} />
      <span className="pointer-events-none relative z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-rose-500">
        Neural Noise
      </span>
    </div>
  );
}
