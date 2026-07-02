interface RadioCardProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

export default function RadioCard({
  title,
  selected,
  onClick,
}: RadioCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition-all ${
        selected
          ? "border-amber-400 bg-amber-400/10"
          : "border-white/10 bg-zinc-900 hover:border-amber-400"
      }`}
    >
      <p className="text-white">{title}</p>
    </button>
  );
}