
import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { FormCard } from "./components/FormCard";
import { StatsGrid } from "./components/StatsGrid/StatsGrid";

function App() {

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

      </main>
    </AppWrapper>
  );
}

export default App
