import { CiCircleCheck } from "react-icons/ci";

const Jinair = (props) => {
  return (
    <>
      <article
        style={{
          display: "flex",
          border: "1px solid grey",
          flexDirection: "column",
          width: "300px",
          height: "300px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            color: "white",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>플렉스</div>
            <div>KRW 294,200</div>
            <div>9석</div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <CiCircleCheck />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>변경 수수료</span>
          <span>환불 위약금</span>
          <span>무료 위탁 수하물</span>
          <span>무료 기내 수하물</span>
        </div>
      </article>
    </>
  );
};

export default Jinair;
