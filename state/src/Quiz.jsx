// import { useState } from "react";

// function Quiz() {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <input
//       onChange={(e) => {
//         setInputValue((prev) => e.target.value);
//       }}
//       value={inputValue}
//     />
//   );
// }

// export default Quiz;

function Quiz() {
  const [total, setTotal] = useState([0, 0, 0]);

  return (
    <>
      <Counter num={total} setNum={setTotal} />
      <Counter num={total} setNum={setTotal} />
      <Counter num={total} setNum={setTotal} />
      <span>{total.reduce((a, c) => a + c)}</span>
    </>
  );
}
