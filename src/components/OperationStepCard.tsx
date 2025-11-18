import { ChevronRight } from "lucide-react";
import { type OperationState, type StackItem } from "../types/operations";
import { useTranslation } from "react-i18next";

interface OperationStepCardProps {
  currentOp: number;
  operations: string[];
  currentState: OperationState;
  isSorted: (arr: StackItem[]) => boolean;
}

export const OperationStepCard = ({
  currentOp,
  operations,
  currentState,
  isSorted,
}: OperationStepCardProps) => {
  const { t } = useTranslation();

  const operation = operations[currentOp - 1];

  const isLastStepSorted =
    currentOp === operations.length && currentState.b.length === 0 && isSorted(currentState.a);

  return (
    <div className="rounded-xl p-4 mb-6 transition-colors bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {t("step")} {currentOp}:
            </span>
          </div>
          <div className="text-2xl font-bold font-mono text-blue-700 dark:text-blue-400">
            {operation}
          </div>
        </div>

        {isLastStepSorted && (
          <div className="flex items-center gap-2 text-green-500 font-semibold">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {t("sorted")}
          </div>
        )}
      </div>

      <div className="text-sm mt-2 text-slate-600 dark:text-slate-400">
        {t(`opDescriptions.${operation}`) || "Unknown operation"}
      </div>
    </div>
  );
};
