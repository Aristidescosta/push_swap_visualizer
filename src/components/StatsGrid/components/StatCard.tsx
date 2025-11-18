interface StatCardProps {
  label: string;
  value?: number | string;
  valueColor?: string; // opcional: ex: "text-blue-500"
  children?: React.ReactNode; // conteúdo customizado
}

export const StatCard = ({ label, value, valueColor, children }: StatCardProps) => {
  return (
    <div className="rounded-xl p-4 shadow-sm transition-colors bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="text-sm font-medium mb-1 text-slate-800 dark:text-slate-200">
        {label}
      </div>
      <div className={`text-3xl font-bold ${valueColor ? valueColor : 'text-slate-800 dark:text-slate-200'}`}>
        {children ?? value}
      </div>
    </div>
  );
};
