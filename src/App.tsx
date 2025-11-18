import { useTranslation } from "react-i18next";

import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { FormCard } from "./components/FormCard";
import { StatsGrid } from "./components/StatsGrid/StatsGrid";
import { OperationStepCard } from "./components/OperationStepCard";
import { StacksGrid } from "./components/StacksGrid";
import { Controls } from "./components/Controls";
import { OperationTimeline } from "./components/OperationTimeline";

import { usePushSwap } from "./hooks/usePushSwap";

function App() {
  const { t: translate } = useTranslation();
  
  const {
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
  } = usePushSwap();

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

  return (
    <AppWrapper>
      <Header />

      <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-6">
        <FormCard
          onSubmit={(numbers, ops) => {
            initializeStacks(numbers, ops);
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
          nextStep={nextStep}
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