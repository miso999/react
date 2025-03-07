import { FaLongArrowAltLeft } from "react-icons/fa";

const NavApp = () => {
  return (
    <nav>
      <div
        style={{
          color: "white",
          height: "10vh",
          backgroundColor: "#8EC8F6",
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: "30px" }}>
          <FaLongArrowAltLeft />
        </div>
        <div>Wed,March 5,2025</div>
        <div className="datelist"></div>
      </div>
    </nav>
  );
};

export default NavApp;
