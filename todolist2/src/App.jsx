import Nav2 from "./Nav2";
import Input2 from "./Input2";
import { useState } from "react";
import Todolist2 from "./Todolist2";
import Div2 from "./Div2";
import Output from "./Output";

function App() {
  const [doyou, setDoyou] = useState("");
  const [item, setItem] = useState([]);

  const add = () => {
    setItem((prev) => {
      const newArr = [...prev];
      newArr.push(doyou);
      return newArr;
    });
  };

  return (
    <>
      <header
        style={{
          width: "25vw",
          height: "70vh",
          backgroundColor: "white",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #FEDCE7",
          position: "relative",
        }}
      >
        <Nav2></Nav2>
        <Input2 a={setDoyou} c={add}></Input2>
        <Div2 b={item}></Div2>
        <Output></Output>
      </header>
    </>
  );
}

export default App;
