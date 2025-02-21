const Tabledata = (props) => {
    const {data} = props;
  return ( <div style={{display: "flex"}}><
    {data.map((v) => (
        <dt>{v}</dt>
    ))}
    </div>
  );
};

export default Tabledata;
