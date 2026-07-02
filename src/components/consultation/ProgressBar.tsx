interface ProgressBarProps {
  step: number;
  totalSteps: number;
  title: string;
}

export default function ProgressBar({
  step,
  totalSteps,
  title,
}: ProgressBarProps) {

  const percentage = (step / totalSteps) * 100;

  return (
    <div className="mb-14">

      <div className="flex items-center justify-between">

        <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
          Step {step} of {totalSteps}
        </span>

        <span className="text-sm text-zinc-400">
          {Math.round(percentage)}%
        </span>

      </div>

      <div className="mt-5 h-2 rounded-full bg-zinc-800 overflow-hidden">

        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-4 text-zinc-500">
        {title}
      </p>

    </div>
  );
}