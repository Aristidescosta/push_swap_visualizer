import type { ChangeEvent } from "react";

interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextareaField = ({ id, label, placeholder, value, onChange }: TextareaFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 min-h-64 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 border-slate-300 text-slate-900 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
      />
    </div>
  );
};
