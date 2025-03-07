import { useState } from "react";
import Output from "./Output";
import { FaRegTrashAlt } from "react-icons/fa";

const Todolist2 = (props) => {
  const { text } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "15px",
        padding: "5px 5px",
      }}
    >
      <p style={{ flex: "1" }}>
        <Output></Output>
      </p>
      <div
        style={{
          flex: "6",
          display: "flex",
          alignItems: "center",
        }}
      >
        {text}
      </div>
      <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
        <FaRegTrashAlt />
      </div>
    </div>
  );
};

export default Todolist2;
