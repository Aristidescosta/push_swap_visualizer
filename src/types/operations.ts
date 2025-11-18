export interface OperationState {
    a: StackItem[];
    b: StackItem[];
}

export interface StackItem {
    value: number;
    color: string;
}

export interface OperationTimelineProps {
  operations: string[];
  currentOp: number;
  setCurrentOp: (step: number) => void;
  t: {
    operationTimeline: string;
  };
}


export type Operation = string;
