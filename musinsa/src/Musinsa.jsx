import { useState } from "react";

const Musinsa = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const plus = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  const plus1 = () => {
    setNum1((prev) => {
      return prev + 1;
    });
  };
  const plus2 = () => {
    setNum2((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <button onClick={plus}>+</button>
      <div>{num}</div>
      <button onClick={plus1}>+</button>
      <div>{num1}</div>
      <button onClick={plus2}>+</button>
      <div>{num2}</div>
    </>
  );
};

export default Musinsa;
