import { type StackItem } from "../types/operations";

interface StackColumnProps {
  title: string;
  items: StackItem[];
  stackName: 'a' | 'b';
  totalItemsLabel: string;
  animatingItem?: { from: 'a' | 'b'; to: 'a' | 'b' };
  currentOp: number;
}

export const StackColumn = ({
  title,
  items,
  stackName,
  totalItemsLabel,
  animatingItem,
  currentOp,
}: StackColumnProps) => {
  const maxValue = Math.max(...items.map(i => i.value), 1);
  const isAnimating = animatingItem &&
    ((animatingItem.from === stackName && currentOp > 0) ||
     (animatingItem.to === stackName && currentOp > 0));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{title}</h2>
        <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
          {items.length} {totalItemsLabel}
        </div>
      </div>

      <div className="rounded-lg p-6 border-2 min-h-[400px] bg-slate-50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-700 transition-colors">
        <div className="flex flex-col-reverse gap-2 min-h-[400px] justify-end">
          {items.map((item, idx) => {
            const widthPercent = (item.value / maxValue) * 100;
            const isTop = idx === 0;

            return (
              <div
                key={`${stackName}-${idx}-${item.value}`}
                className={`relative transition-all duration-300 ease-out ${isTop && isAnimating ? 'animate-pulse' : ''}`}
                style={{ transform: isTop && isAnimating ? 'scale(1.05)' : 'scale(1)' }}
              >
                <div
                  className="h-14 rounded-md flex items-center justify-center font-semibold text-white shadow-lg relative overflow-hidden group"
                  style={{
                    backgroundColor: item.color,
                    width: `${Math.max(widthPercent, 20)}%`,
                    minWidth: '60px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                  <span className="relative z-10 text-lg drop-shadow-md">{item.value}</span>
                  {isTop && (
                    <div className="absolute -top-8 left-0 text-xs font-medium text-slate-400 dark:text-slate-500">
                      TOP
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
