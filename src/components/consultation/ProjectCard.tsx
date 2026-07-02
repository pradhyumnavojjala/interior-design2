import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function ProjectCard({
  icon: Icon,
  title,
  description,
  selected,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group rounded-3xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? "border-amber-400 bg-amber-400/10 shadow-[0_0_30px_rgba(251,191,36,0.15)]"
          : "border-white/10 bg-zinc-900/50 hover:border-amber-400/40"
      }`}
    >
      <Icon className="h-10 w-10 text-amber-400" />

      <h3 className="mt-5 text-xl font-medium text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </button>
  );
}