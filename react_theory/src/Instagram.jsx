const Instagram = (props) => {
  return (
    <>
      <dl style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <dd>{props.number}</dd>
        <dt>{props.signName}</dt>
      </dl>
    </>
  );
};

export default Instagram;
