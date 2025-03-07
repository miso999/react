import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

const Todolist = (props) => {
  const { text } = props;
  const [isCheck, setIsCheck] = useState(false);

  const changeColor = () => {
    setIsCheck(!isCheck);
  };

  return (
    <div
      className="twinkle"
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "30px",
      }}
    >
      <div>{text}</div>
      <div onClick={changeColor} style={{ color: isCheck ? "blue" : "black" }}>
        {/* #8EC8F6 */}
        <CiCircleCheck />
      </div>
    </div>
  );
};
export default Todolist;
