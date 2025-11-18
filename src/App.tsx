import { useState } from "react";
import { useTranslation } from "react-i18next";

import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { FormCard } from "./components/FormCard";
import { StatsGrid } from "./components/StatsGrid/StatsGrid";
import { OperationStepCard } from "./components/OperationStepCard";
import { StacksGrid } from "./components/StacksGrid";
import { Controls } from "./components/Controls";
import { OperationTimeline } from "./components/OperationTimeline";

import type { OperationState, StackItem } from "./types/operations";

function App() {
  const { t: translate } = useTranslation();

  const operations = ["sa", "pb", "ra", "pa"];
  const [currentOp, setCurrentOp] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);

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
    stackA: translate("stats.stackA"),
    stackB: translate("stats.stackB"),
    items: translate("stats.items"),
    reset: translate("controls.reset"),
    previous: translate("controls.previous"),
    next: translate("controls.next"),
    play: translate("controls.play"),
    pause: translate("controls.pause"),
    speed: translate("controls.speed"),
    operationTimeline: translate("controls.operationTimeline"),
  };

  const isSorted = (arr: StackItem[]) =>
    arr.every((item, i) => i === 0 || arr[i - 1].value <= item.value);

  const reset = () => setCurrentOp(0);
  const prevStep = () => {
    if (currentOp > 0) setCurrentOp(prev => prev - 1);
  };
  const nextStepHandler = () => {
    if (currentOp < operations.length) setCurrentOp(prev => prev + 1);
  };

  return (
    <AppWrapper>
      <Header />

      <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-6">
        <FormCard
          onSubmit={(numbers, ops) => {
            console.log("Números:", numbers);
            console.log("Operações:", ops);
          }}
        />

        <StatsGrid
          operations={operations}
          currentOp={currentOp}
          stackA={currentState.a.length}
          stackB={currentState.b.length}
        />

        {currentOp > 0 && currentOp <= operations.length && (
          <OperationStepCard
            currentOp={currentOp}
            operations={operations}
            currentState={currentState}
            isSorted={isSorted}
          />
        )}

        <StacksGrid
          currentState={currentState}
          animatingItem={animatingItem}
          currentOp={currentOp}
          t={t}
        />

        <Controls
          currentOp={currentOp}
          operationsLength={operations.length}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          speed={speed}
          setSpeed={setSpeed}
          reset={reset}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          t={t}
        />

        <OperationTimeline
          operations={operations}
          currentOp={currentOp}
          setCurrentOp={setCurrentOp}
          t={t}
        />
      </main>
    </AppWrapper>
  );
}

export default App;
