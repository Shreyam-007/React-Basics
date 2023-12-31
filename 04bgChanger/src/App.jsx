import { useState } from "react";


function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("orangered")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "orangered" }}
          >
            Orange red
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("plum")}
            className="outline-none px-4 py-2 rounded-xl text-white shadow-lg "
            style={{ backgroundColor: "plum" }}
          >
            Plum
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
