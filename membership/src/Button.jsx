import { BiColor } from "react-icons/bi";

const Button = (props) => {
  const { text, isValid } = props;
  return (
    <>
      <button>
        <button
          style={{
            backgroundColor: isValid ? "black" : "grey",
            color: isValid ? "white" : "black",
          }}
        />
        {text}
      </button>
    </>
  );
};

export default Button;
