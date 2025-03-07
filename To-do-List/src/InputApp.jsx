const InputApp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input name="title" type="text" />
      <button style={{ color: "#8EC8F6" }}>입력</button>
    </div>
  );
};

export default InputApp;
