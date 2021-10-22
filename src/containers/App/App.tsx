import { Errors } from "@/containers/Errors/Errors";
import { Routes } from "@/containers/Routes/Routes";

export function App() {
  return (
    <main>
      <h1>Starwars</h1>
      <Errors>
        <Routes></Routes>
      </Errors>
    </main>
  );
}
