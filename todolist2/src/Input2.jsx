import { useState } from "react";

const Input2 = (props) => {
  const { a, c } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        gap: "10px",
      }}
    >
      <input
        maxLength={20}
        onChange={(e) => {
          a(e.target.value);
        }}
        type="text"
      />
      <output></output>
      <button onClick={c} style={{ color: "black" }}>
        추가
      </button>
    </div>
  );
};

export default Input2;
