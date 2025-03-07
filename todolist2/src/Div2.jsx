import { useState } from "react";
import Todolist2 from "./Todolist2";

const Div2 = (props) => {
  const { b } = props;

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "20px",
        border: "5px solid #FEDCE7",
        margin: "0 auto",
        marginTop: "10px",
        padding: "5px 0px",
      }}
    >
      {b.map((v) => (
        <Todolist2 text={v} />
      ))}
    </div>
  );
};

export default Div2;
