import { GiSouthKorea } from "react-icons/gi";

const Soobin = (props) => {
  return (
    <>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          border: "1px solid black",
          paddingRight: "30px 10px",
          height: "100px",
        }}
      >
        <div>
          <span>본명</span>
          <span>최수빈(崔秀彬/Choi Soobin)</span>
        </div>
        <div>
          <span>출생</span>
          <span>2000년 12월 5일</span>
          <span>경기도 안산시 성포동</span>
        </div>
        <div>
          <span>국적</span>
          <span>
            <GiSouthKorea />
            대한민국
          </span>
        </div>
        <div>
          <span>본관</span>
          <span>강릉 최씨(江陵 崔氏)</span>
        </div>
      </article>
    </>
  );
};

export default Soobin;
