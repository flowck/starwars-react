import { Errors } from "../Errors/Errors";
import { Routes } from "../Routes/Routes";

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
