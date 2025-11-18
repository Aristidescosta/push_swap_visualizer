import { useState } from "react";
import type { FormEvent } from "react";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { Upload } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FormCardProps {
  onSubmit: (numbers: string, operations: string) => void;
}

export const FormCard = ({ onSubmit }: FormCardProps) => {
  const [numbers, setNumbers] = useState("5 2 4 1 3");
  const [operations, setOperations] = useState("rra\nrra\npb\nra\nra\npb\nsa\npa\npa");
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(numbers, operations);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl shadow-sm p-6 transition-colors bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700"
    >
      <div className="grid grid-cols-1 gap-4 mb-4">
        <InputField
          id="numbers"
          label={t("numbers")}
          placeholder="5 2 4 1 3"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <TextareaField
          id="operations"
          label={t("operations")}
          placeholder={t("placeholderOperations")}
          value={operations}
          onChange={(e) => setOperations(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-all flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95"
      >
        <Upload className="w-4 h-4" />
        {t("loadAndVisualize") || "Carregar e visualizar"}
      </button>
    </form>
  );
};