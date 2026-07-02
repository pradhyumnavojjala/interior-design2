interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  selected,
  onClick,
}: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "border-amber-400 bg-amber-400/10"
          : "border-white/10 bg-zinc-900/40 hover:border-amber-400/40"
      }`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-lg text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </button>
  );
}