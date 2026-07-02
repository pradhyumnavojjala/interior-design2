interface TimelineCardProps {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function TimelineCard({
  icon,
  title,
  description,
  selected,
  onClick,
}: TimelineCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "border-amber-400 bg-amber-400/10"
          : "border-white/10 bg-zinc-900/40 hover:border-amber-400/40"
      }`}
    >
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-lg text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </button>
  );
}