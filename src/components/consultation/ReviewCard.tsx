interface ReviewCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ReviewCard({
  title,
  children,
}: ReviewCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-xl">

      <h2 className="mb-6 text-2xl text-white">
        {title}
      </h2>

      <div className="space-y-4">
        {children}
      </div>

    </section>
  );
}