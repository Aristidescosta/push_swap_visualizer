/* eslint-disable @typescript-eslint/no-explicit-any */
import { StackColumn } from "./StackColumn";
import { type OperationState } from "../types/operations";

interface StacksGridProps {
  currentState: OperationState;
  animatingItem?: { from: 'a' | 'b'; to: 'a' | 'b' };
  currentOp: number;
  t: any;
}

export const StacksGrid = ({ currentState, animatingItem, currentOp, t }: StacksGridProps) => {
  return (
    <div className="rounded-xl shadow-sm p-8 mb-6 transition-colors bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <StackColumn
          title={t.stackA}
          items={currentState.a}
          stackName="a"
          totalItemsLabel={t.items}
          animatingItem={animatingItem}
          currentOp={currentOp}
        />
        <StackColumn
          title={t.stackB}
          items={currentState.b}
          stackName="b"
          totalItemsLabel={t.items}
          animatingItem={animatingItem}
          currentOp={currentOp}
        />
      </div>
    </div>
  );
};
