import { useState } from "react";
import Counter2 from "./Counter2";
function App() {
  const [num, setNum] = useState(0);
  const a = () => {
    setNum((prev) => prev + 1);
  };
  const [numArray, setNumArray] = useState([0, 0, 0]);
  const numPlus = (i) => {
    setNumArray((prev) => {
      //기본타입:number,string,boolean,null,undefined
      //참조타입:arr,obj,...
    });
  };
}

export default App;
