export interface OperationState {
    a: StackItem[];
    b: StackItem[];
}

export interface StackItem {
    value: number;
    color: string;
}

export type Operation = string;
