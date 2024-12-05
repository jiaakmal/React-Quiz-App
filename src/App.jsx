import Header from "./COMPONENTS/Header";
import Quiz from "./COMPONENTS/Quiz";
import { useRef } from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
