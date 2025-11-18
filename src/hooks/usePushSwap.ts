import { useState, useEffect, useCallback } from 'react';
import type { StackItem, OperationState } from '../types/operations';

export const usePushSwap = () => {
  const [stackA, setStackA] = useState<StackItem[]>([]);
  const [stackB, setStackB] = useState<StackItem[]>([]);
  const [operations, setOperations] = useState<string[]>([]);
  const [currentOp, setCurrentOp] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [history, setHistory] = useState<OperationState[]>([]);
  const [animatingItem, setAnimatingItem] = useState<{from: 'a' | 'b', to: 'a' | 'b'} | null>(null);

  const getColor = useCallback((index: number, total: number) => {
    const hue = (index / total) * 280;
    return `hsl(${hue}, 70%, 60%)`;
  }, []);

  const executeOperation = useCallback((op: string, a: StackItem[], b: StackItem[]): OperationState => {
    const newA = [...a];
    const newB = [...b];

    switch(op.trim()) {
      case 'sa':
        if (newA.length >= 2) [newA[0], newA[1]] = [newA[1], newA[0]];
        break;
      case 'sb':
        if (newB.length >= 2) [newB[0], newB[1]] = [newB[1], newB[0]];
        break;
      case 'ss':
        if (newA.length >= 2) [newA[0], newA[1]] = [newA[1], newA[0]];
        if (newB.length >= 2) [newB[0], newB[1]] = [newB[1], newB[0]];
        break;
      case 'pa':
        if (newB.length > 0) {
          newA.unshift(newB.shift()!);
        }
        break;
      case 'pb':
        if (newA.length > 0) {
          newB.unshift(newA.shift()!);
        }
        break;
      case 'ra':
        if (newA.length > 0) newA.push(newA.shift()!);
        break;
      case 'rb':
        if (newB.length > 0) newB.push(newB.shift()!);
        break;
      case 'rr':
        if (newA.length > 0) newA.push(newA.shift()!);
        if (newB.length > 0) newB.push(newB.shift()!);
        break;
      case 'rra':
        if (newA.length > 0) newA.unshift(newA.pop()!);
        break;
      case 'rrb':
        if (newB.length > 0) newB.unshift(newB.pop()!);
        break;
      case 'rrr':
        if (newA.length > 0) newA.unshift(newA.pop()!);
        if (newB.length > 0) newB.unshift(newB.pop()!);
        break;
    }

    return { a: newA, b: newB };
  }, []);

  const buildHistory = useCallback((initialA: StackItem[], initialB: StackItem[], ops: string[]) => {
    const newHistory: OperationState[] = [{ a: initialA, b: initialB }];
    let currentA = [...initialA];
    let currentB = [...initialB];

    for (const op of ops) {
      const result = executeOperation(op, currentA, currentB);
      currentA = result.a;
      currentB = result.b;
      newHistory.push({ a: [...currentA], b: [...currentB] });
    }

    return newHistory;
  }, [executeOperation]);

  const initializeStacks = useCallback((inputNumbers: string, inputOps: string) => {
    const numbers = inputNumbers.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) return;

    const sorted = [...numbers].sort((a, b) => a - b);
    const items: StackItem[] = numbers.map(value => ({
      value,
      color: getColor(sorted.indexOf(value), numbers.length)
    }));

    const ops = inputOps.trim().split('\n').filter(op => op.trim() !== '');
    const newHistory = buildHistory(items, [], ops);

    setStackA(items);
    setStackB([]);
    setOperations(ops);
    setHistory(newHistory);
    setCurrentOp(0);
    setIsPlaying(false);
    setAnimatingItem(null);
  }, [getColor, buildHistory]);

  const nextStep = useCallback(() => {
    if (currentOp < operations.length) {
      setCurrentOp(prev => prev + 1);
    
      const op = operations[currentOp]?.trim();
      if (op === 'pa') {
        setAnimatingItem({from: 'b', to: 'a'});
        setTimeout(() => setAnimatingItem(null), 300);
      } else if (op === 'pb') {
        setAnimatingItem({from: 'a', to: 'b'});
        setTimeout(() => setAnimatingItem(null), 300);
      }
    }
  }, [currentOp, operations]);

  const prevStep = useCallback(() => {
    if (currentOp > 0) {
      setCurrentOp(prev => prev - 1);
      setAnimatingItem(null);
    }
  }, [currentOp]);

  const reset = useCallback(() => {
    setCurrentOp(0);
    setIsPlaying(false);
    setAnimatingItem(null);
  }, []);

  useEffect(() => {
    if (isPlaying && currentOp < operations.length) {
      const timer = setTimeout(() => {
        nextStep();
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentOp >= operations.length && isPlaying) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentOp, speed, operations.length, nextStep]);

  const currentState = history[currentOp] || { a: stackA, b: stackB };

  const isSorted = useCallback((stack: StackItem[]) => {
    for (let i = 0; i < stack.length - 1; i++) {
      if (stack[i].value > stack[i + 1].value) return false;
    }
    return true;
  }, []);

  return {
    currentState,
    operations,
    currentOp,
    isPlaying,
    speed,
    animatingItem,
    setCurrentOp,
    setIsPlaying,
    setSpeed,
    initializeStacks,
    nextStep,
    prevStep,
    reset,
    isSorted
  };
};