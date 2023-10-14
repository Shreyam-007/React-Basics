import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp(){
  return(
    <>
      <h1>Custom App !!</h1>
    </>
  )
}

const reactElement = {
  type: "a",
  props: {
      href: "https://google.com",
      target: "_blank"
  },
  children : "Click here to go Google"
}

const anotherElement =(
  <a href="https://google.com" target="_blank">Google</a>
)

const anotherusername = "Ravi"

const actualReactElement = React.createElement(
  "a",
  {href: "https://google.com", target: "_blank"},
  "Click me to visit Google",
  anotherusername
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    // <App/>
    // App()
    // <MyApp/>
    // MyApp()
    // reactElement
    // anotherElement
    // actualReactElement
    <App/>
  // </React.StrictMode>
);
