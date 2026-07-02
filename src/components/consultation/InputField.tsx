interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none transition-all focus:border-amber-400"
      />
    </div>
  );
}