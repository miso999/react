import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((prev) => {
      return prev + 2;
    });
  };
  const minus = () => {
    setNum((prev) => {
      return prev - 2;
    });
  };

  return (
    <>
      <button onClick={plus}>+</button>
      <div>{num}</div>
      <button onClick={minus}>-</button>
    </>
  );
};

export default Counter;
