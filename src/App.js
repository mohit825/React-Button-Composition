import { DangerButton, SuccessButton } from "./Button";
import "./styles.css";

export default function App() {
  const mohitFunction = () => {
    console.log("mohit function");
  };
  const pandeyFunction = () => {
    console.log("Pandey function");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DangerButton name="some name" btnClick={mohitFunction}>
        Mohit
      </DangerButton>
      <SuccessButton btnClick={pandeyFunction}>Pandey</SuccessButton>
    </div>
  );
}
