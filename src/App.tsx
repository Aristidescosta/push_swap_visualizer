
import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { FormCard } from "./components/FormCard";
import { StatsGrid } from "./components/StatsGrid/StatsGrid";
import { useState } from "react";
import type { OperationState, StackItem } from "./types/operations";
import { OperationStepCard } from "./components/OperationStepCard";
import { StacksGrid } from "./components/StacksGrid";

function App() {
  const operations = ["sa", "pb", "ra", "pa"];
  const [currentOp, setCurrentOp] = useState(1);

  const currentState: OperationState = {
    a: [
      { value: 5, color: "#3b82f6" },
      { value: 2, color: "#10b981" },
      { value: 4, color: "#f59e0b" },
    ],
    b: [
      { value: 1, color: "#ef4444" },
      { value: 3, color: "#8b5cf6" },
    ],
  };

  const animatingItem = { from: "a" as const, to: "b" as const };

  const t = {
    stackA: "Pilha A",
    stackB: "Pilha B",
    items: "Itens",
  };

  const isSorted = (arr: StackItem[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].value > arr[i + 1].value) return false;
    }
    return true;
  };

  const nextStep = () => {
    if (currentOp < operations.length) {
      setCurrentOp((prev) => prev + 1);
    }
  };
  return (
    <AppWrapper>
      <Header />
      <main>
        <FormCard onSubmit={(numbers, operations) => {
          console.log("Números:", numbers);
          console.log("Operações:", operations);
        }} />
        <StatsGrid
          operations={["op1", "op2", "op3", "op4", "op5"]}
          currentOp={2}
          stackA={9}
          stackB={9}
        />
        {
          currentOp > 0 && currentOp <= operations.length ? (
            <OperationStepCard
              currentOp={currentOp}
              operations={operations}
              currentState={currentState}
              isSorted={isSorted}
            />
          ) : null
        }
        <StacksGrid
          currentState={currentState}
          animatingItem={animatingItem}
          currentOp={currentOp}
          t={t}
        />
      </main>
    </AppWrapper>
  );
}

export default App
