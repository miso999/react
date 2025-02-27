const Agreement = (props) => {
  const { contents, isNess, a } = props;
  return (
    <div style={{ display: "flex" }}>
      <input onChange={a} type="checkbox" />
      <span>{contents}</span>
      <span>{isNess ? "(필수)" : "(선택)"}</span>
    </div>
  );
};

export default Agreement;
