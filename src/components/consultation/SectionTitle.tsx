interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-8">

      <h2
        className="text-3xl text-white"
        style={{
          fontFamily:
            "var(--font-heading), var(--font-playfair), serif",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-zinc-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}