const Tableheader = (props) => {
  const { headerName, backgroundColor, color } = props;
  return (
    <th style={{ backgroundColor, color, fontWeight: "bold" }}>
      {headereName}이름
    </th>
  );
};

export default Tableheader;
