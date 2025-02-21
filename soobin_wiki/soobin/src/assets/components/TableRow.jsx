import TableData from "../components/Tabledata";
import TableHeader from "../components/Tableheader";

const TableRow = (props) => {
  const { headerName, backgroundColor, color, data } = props;

  return (
    <tr>
      <TableHeader
        headerName={headerName}
        backgroundColor={backgroundColor}
      ></TableHeader>
      <TableData data={data} />
    </tr>
  );
};
