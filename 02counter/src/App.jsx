import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;
  const addValue = () => {
    // counter++
    if (counter <= 19) {
      setCounter(counter + 1)
    }
    // console.log(`value: ${counter}`);
  };

  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Vite+React Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button> <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

// problem in UI updation... (UI updation ko react control krta h by hooks)
// react will decide when to update the UI (variables updation)
// 1 jagah variable change krne pr multiple jagah (jaha same variable defined h) change krne ka jimma react ka.

export default App;
