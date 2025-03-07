import { FaLongArrowAltLeft, FaPlus } from "react-icons/fa";
import Todolist from "./Todolist";
import { useState } from "react";
import NavApp from "./NavApp";
import InputApp from "./InputApp";

function App() {
  const [num, setNum] = useState([
    "엽떡 시키기",
    "빠칭코 가기",
    "일본어 공부하기",
    "플룻 불기",
    "피아노 연습하기",
    "책 읽기",
  ]);

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
          border: "1px solid #8EC8F6",
          position: "relative",
        }}
      >
        <NavApp></NavApp>
        <button onClick={console.log(num)}></button>
        <section
          style={{
            color: "black",
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
          }}
          className="todoWholeBox"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            className="todoBox"
          >
            {num.map((text, i) => (
              <Todolist key={i} text={text} />
            ))}
            <InputApp></InputApp>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
