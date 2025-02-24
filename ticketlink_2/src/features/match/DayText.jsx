import Match from "./Match";

const DayText = (props) => {
  const { date } = props;
  const style = {
    fontSize: "20px",
    lineHeight: "40px",
    fontWeight: "400",
    letterSpacing: "-0.04em",
  };

  return <Match css={style} text={date} />;
};

export default DayText;
