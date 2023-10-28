import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15;
  const addValue = () => {
    // counter++
    if (counter <= 19) {
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // console.log(counter); 

      //useState variables and UI updation ko batches me bhejta h, or agar batches me same UI updation h toh usse ignore kr deta h
      // (here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once. So, the counter will increase by only 1 count.)
      // but hum callback fxn ko use krke differentiate kr sakte h.
      // To increase it by four counts one by one, use the callback which the setCounter accepts and increase it one by one. So, the first function will be called first, the callback will be executed and the next function call will be executed.

      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
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
