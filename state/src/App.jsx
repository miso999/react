import { useState } from "react";

// function App() {
//   // 상태가 변화하면 useState 사용하기!
//   // 리액트에서 queryselect, getby 안씀 절대!
//   const [num, setNum] = useState(0);

//   const plus = () => {
//     setNum((prev) => prev + 5);
//   };
//   return;
//   <div onClick={plus}>{num}</div>;
// }

// function App() {
//   const [num, setNum] = useState(0);
//   const plus = () => {};
//   const minus = () => {
//     setNum((prev) => prev - 1);
//   };
// }
// return (
//   <div>
//     <button onClick={minus}>-</button>
//     <span>{num}</span>
//     <button onMouseEnter={}>+</button>
//   </div>
// );

// function App() {
//   const [num, setNum] = useState(0);
//   const plus = () => {
//     setNum((prev) => prev + 1);
//   };
//   const minus = () => {
//     setNum((prev) => (prev == 0 ? 0 : prev - 1));
//   };
//   return (
//     <div>
//       <button onClick={minus}>-</button>
//       <span style={{ color: 10 <= num ? "red" : "black" }}>{num}</span>
//     </div>
//   );
// }

// function App() {
//   const [num, setNum] = useState(0);
//   const plus = () => {
//     setNum((prev) => prev + 1);
//   };
//   const minus = () => {
//     setNum((prev) => (prev == 0 ? 0 : prev - 1));
//   };

//🥚🐣🐥🐔🍗
// function App() {
//   const steps = ["🥚", "🐣", "🐥", "🐔", "🍗"];
//   const [step, setStep] = useState(0);

//   const nextStep = () => {
//     setStep((prev) => (prev == 4 ? prev : prev + 1));
//   };

//   const prevStep = () => {
//     setStep((prev) => (prev == 0 ? prev : prev - 1));
//   };

//   return (
//     <>
//       <button onClick={prevStep}>이전스텝</button>
//       <span>{evolution[step]}</span>
//       <button onClick={nextStep}>다음스텝</button>
//     </>
//   );
// }

function App() {
  const [num, setNum] = useState(0);

  return (prev) => {
    prev;
  };
}
export default App;
