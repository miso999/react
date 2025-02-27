const Checker = (props) => {
  const { text, isValid } = props;
  return (
    <>
      <span style={{ color: isValid ? "black" : "grey" }}>{text}</span>
    </>
  );
};

export default Checker;
