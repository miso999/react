//color 안준다면 디플트값으로 분홍색
//name을 안준다면 디폴트값으로 군필

const Sausage = (props) => {
    <>
  const list = ["곰곰", "천하장사", "키스틱"];
  return (
    <button style={{ color: props.color == undefined || "pink" }}>
      {props.name || "군필"}소세지
    </button>
    </>
  );
};

export default Sausage;
