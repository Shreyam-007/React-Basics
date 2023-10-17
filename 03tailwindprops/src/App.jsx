import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username : "Shreyam",
    age : 19
  } 

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username = "Shreyam Singh" btnText = "Click me" myObj = {myObj} myArr = {newArr}/>
      <Card username="Ravi" btnText = "Visit me"/>
    </>
  );
}

export default App;

// Card Component me jo bhi value pass in yaha krnge , wo props object ke andar properties ke form me save hoga