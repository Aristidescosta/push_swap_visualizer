import { type StackItem } from "../types/operations";

interface StackColumnProps {
  title: string;
  items: StackItem[];
  stackName: 'a' | 'b';
  totalItemsLabel: string;
  animatingItem?: { from: 'a' | 'b'; to: 'a' | 'b' } | null;
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

  const isSending = animatingItem?.from === stackName && currentOp > 0;
  const isReceiving = animatingItem?.to === stackName && currentOp > 0;

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
          {title}
          {isSending && (
            <span className="text-xs font-normal text-red-500 dark:text-red-400 animate-pulse">
              → Enviando
            </span>
          )}
          {isReceiving && (
            <span className="text-xs font-normal text-green-500 dark:text-green-400 animate-pulse">
              ← Recebendo
            </span>
          )}
        </h2>
        <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 transition-all">
          {items.length} {totalItemsLabel}
        </div>
      </div>

      <div className={`
        rounded-lg p-6 border-2 min-h-[400px] 
        bg-slate-50 border-slate-200 
        dark:bg-slate-900/50 dark:border-slate-700 
        transition-all duration-300
        ${isSending ? 'ring-2 ring-red-400 dark:ring-red-500' : ''}
        ${isReceiving ? 'ring-2 ring-green-400 dark:ring-green-500' : ''}
      `}>
        <div className="flex flex-col-reverse gap-2 min-h-[400px] justify-end">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 text-sm">
              Pilha vazia
            </div>
          ) : (
            items.map((item, idx) => {
              const widthPercent = (item.value / maxValue) * 100;
              const isTop = idx === 0;
              const isAnimating = isTop && (isSending || isReceiving);

              return (
                <div
                  key={`${stackName}-${idx}-${item.value}`}
                  className={`
                    relative
                    transition-all duration-500 ease-out
                    ${isAnimating ? 'animate-bounce-subtle' : ''}
                  `}
                  style={{
                    transform: isAnimating
                      ? isSending
                        ? 'translateX(20px) scale(1.05)'
                        : 'translateX(-20px) scale(1.05)'
                      : 'translateX(0) scale(1)',
                    opacity: isAnimating ? 0.7 : 1,
                  }}
                >
                  <div
                    className={`
                      h-14 rounded-md 
                      flex items-center justify-center 
                      font-semibold text-white shadow-lg 
                      relative overflow-hidden group
                      transition-all duration-300
                      ${isTop ? 'ring-2 ring-blue-400/50 dark:ring-blue-500/50' : ''}
                    `}
                    style={{
                      backgroundColor: item.color,
                      width: `${Math.max(widthPercent, 20)}%`,
                      minWidth: '60px',
                      boxShadow: isTop
                        ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                        : '0 4px 10px -2px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 -skew-x-12"></div>

                    <span className="relative z-10 text-lg drop-shadow-md font-bold">
                      {item.value}
                    </span>

                    {isTop && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 rounded-full">
                        TOP
                      </div>
                    )}

                    {isAnimating && (
                      <div className="absolute inset-0 rounded-md animate-ping opacity-20"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    )}
                  </div>

                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-slate-400 dark:text-slate-600 font-mono">
                    {idx}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};