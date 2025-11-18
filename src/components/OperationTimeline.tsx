import { type FC } from "react";
import type { OperationTimelineProps } from "../types/operations";

export const OperationTimeline: FC<OperationTimelineProps> = ({ operations, currentOp, setCurrentOp, t }) => {
    return (
        <div className="rounded-xl shadow-sm p-6 transition-colors bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{t.operationTimeline}</h3>

            <div className="flex flex-wrap gap-2">
                {operations.map((op, idx) => {
                    const step = idx + 1;
                    const isCurrent = step === currentOp;
                    const isDone = step < currentOp;

                    return (
                        <button
                            key={idx}
                            onClick={() => setCurrentOp(step)}
                            className={`
                px-4 py-2 rounded-lg font-mono text-sm font-medium transition-all
                ${isCurrent ? "bg-blue-600 text-white shadow-md scale-105" : ""}
                ${!isCurrent && isDone ? "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/40 dark:text-green-400 dark:hover:bg-green-900/60" : ""}
                ${!isCurrent && !isDone ? "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600" : ""}
              `}
                        >
                            {op}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
