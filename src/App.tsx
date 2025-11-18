
import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { FormCard } from "./components/FormCard";

function App() {

  return (
    <AppWrapper>
      <Header />
      <main>
        <FormCard onSubmit={(numbers, operations) => {
          console.log("Números:", numbers);
          console.log("Operações:", operations);
          // Aqui você pode disparar a lógica de visualização
        }} />
      </main>
    </AppWrapper>
  );
}

export default App
