import { useState } from "react";

const ColorBox = () => {
  const [num, setNum] = useState(0);
  const colorBox = ["pink", "yellow", "black", "green", "red"];
  const changeColor = () => {
    setNum((prev) => {
      return (prev + 1) % colorBox.length;
    });
  };
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
          backgroundColor: colorBox[num],
        }}
      ></div>
      <button onClick={changeColor}>색깔변경</button>
    </>
  );
};

export default ColorBox;
