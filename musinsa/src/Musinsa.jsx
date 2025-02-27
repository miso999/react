// import { useState } from "react";

// const Musinsa = () => {
//   const [num, setNum] = useState(0);
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const plus = () => {
//     setNum((prev) => {
//       return prev + 1;
//     });
//   };
//   const plus1 = () => {
//     setNum1((prev) => {
//       return prev + 1;
//     });
//   };
//   const plus2 = () => {
//     setNum2((prev) => {
//       return prev + 1;
//     });
//   };

//   return (
//     <>
//       <button onClick={plus}>+</button>
//       <div>{num}</div>
//       <button onClick={plus1}>+</button>
//       <div>{num1}</div>
//       <button onClick={plus2}>+</button>
//       <div>{num2}</div>
//     </>
//   );
// };

// export default Musinsa;

import { useState } from "react";
import Agreement from "./Agreement";

const Musinsa = () => {
  const [agreements, setAgreements] = useState([
    { contents: "제가 코드를 이해 못합니다.", isNess: true, isChecked: false },
    { contents: "어떤 어떤 어떤...", isNess: true, isChecked: false },
    {
      contents: "강사님이 알려주시면 좋겠지만",
      isNess: false,
      isChecked: false,
    },
    { contents: "번거로우시니까 제가 아무..", isNess: false, isChecked: false },
  ]);

  const abc = (i) => {
    setAgreements((prev) => {
      const newArr = [...prev];
      newArr[i].isChecked = newArr[i].isChecked;
      return newArr;
    });
  };

  return (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {agreements.map((v, i) => (
          <Agreement
            {...v}
            a={() => {
              abc(i);
            }}
          />
        ))}
      </section>
      <button
        style={{
          display: "flex",
          backgroundColor: agreements
            .filter((v) => v.isNess)
            .every((v) => v.isChecked)
            ? "black"
            : "lightgrey",
          width: "30vw",
          justifyContent: "center",
          border: "1px solid lightgrey",
        }}
      >
        할많하않
      </button>
      <button onClick={() => console.log(agreements)}>ㅊㅋ</button>
    </>
  );
};

export default Musinsa;
