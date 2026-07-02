interface ContinueButtonProps {
  onClick: () => void;
}

export default function ContinueButton({
  onClick,
}: ContinueButtonProps) {
  return (
    <div className="mt-16 flex justify-end">

      <button
        onClick={onClick}
        className="rounded-full bg-amber-400 px-10 py-4 font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
      >
        Continue →
      </button>

    </div>
  );
}