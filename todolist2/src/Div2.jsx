import { useState } from "react";
import Todolist2 from "./Todolist2";

const Div2 = (props) => {
  const { b } = props;

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "20px",
        border: "5px solid #FEDCE7",
        padding: "100px",
        margin: "0 auto",
        marginTop: "10px",
      }}
    >
      {b.map((v) => (
        <Todolist2 text={v} />
      ))}
    </div>
  );
};

export default Div2;
