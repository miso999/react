import { useState } from "react";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import HelloButton from "./HelloButton";

//아래거 필요요
// function App() {
//   return (
//     <>
//       <ColorBox></ColorBox>
//       <Counter></Counter>
//       <Quiz></Quiz>
//     </>
//   );
// }
// export default App;

// function App() {
//   1.콘솔로 하이루
//   const hi = () => {
//     console.log("하이루~!");
// };
//2.콘솔로 매개변수 name 오면 name님 반가워요~!
// const hello = (name) => {
//   console.log(`${name}님 반가워~!`);
// };
function App() {
  return (
    <>
      {Array(100)
        .fill(0)
        .map((a, i) => {
          return <HelloButton num={i + 1} />;
        })}
    </>
  );
}

export default App;
