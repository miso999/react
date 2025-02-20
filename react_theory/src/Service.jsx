import { AiFillAccountBook } from "react-icons/ai";
import { ImAirplane } from "react-icons/im";
import { LiaAccusoft } from "react-icons/lia";
import { LiaAngellist } from "react-icons/lia";

const Service = (props) => {
  return (
    <>
      <article style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            borderRadius: "9999px",
            backgroundColor: "grey",
            width: "50px",
            height: "50px",
          }}
        >
          {/* {" "} */}
          <AiFillAccountBook />
          호텔
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            borderRadius: "9999px",
            backgroundColor: "grey",
            width: "50px",
            height: "50px",
          }}
        >
          <ImAirplane />
          렌터카
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            borderRadius: "9999px",
            backgroundColor: "grey",
            width: "50px",
            height: "50px",
            fontSize: "8px",
          }}
        >
          <LiaAccusoft />
          공항 편의
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            borderRadius: "9999px",
            backgroundColor: "grey",
            width: "50px",
            height: "50px",
            fontSize: "8px",
          }}
        >
          <LiaAngellist />
        </div>
      </article>
    </>
  );
};

export default Service;
