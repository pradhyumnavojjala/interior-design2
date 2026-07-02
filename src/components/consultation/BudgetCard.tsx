interface BudgetCardProps {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function BudgetCard({
  title,
  description,
  selected,
  onClick,
}: BudgetCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "border-amber-400 bg-amber-400/10"
          : "border-white/10 bg-zinc-900/40 hover:border-amber-400/40"
      }`}
    >
      <h3 className="text-xl text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </button>
  );
}