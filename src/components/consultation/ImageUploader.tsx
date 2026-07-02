"use client";

interface ImageUploaderProps {
  title: string;
  onChange: (files: FileList | null) => void;
}

export default function ImageUploader({
  title,
  onChange,
}: ImageUploaderProps) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-zinc-900/40 p-8 text-center">

      <h3 className="text-lg text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        JPG, PNG or WEBP
      </p>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => onChange(e.target.files)}
        className="mt-6 block w-full text-sm text-zinc-400 file:mr-4 file:rounded-full file:border-0 file:bg-amber-400 file:px-6 file:py-3 file:font-semibold file:text-black hover:file:bg-amber-300"
      />

    </div>
  );
}