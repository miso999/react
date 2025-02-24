import Match from "./Match";
const DateText = (props) => {
  const { month, day } = props;
  const style = {
    color: "skyblue",
    fontSize: "40px",
    lineHeight: "40px",
    fontWeight: "300",
    letterSpacing: "-0.04em",
  };
  return <Match css={style} text={month + "." + day} />;
};

export default DateText;
