import Text from "../Base/Text";

const DayText = (props) => {
  const { day } = props;

  const dayObj = {
    일: "#dd6045",
  };

  const style = {
    fontSize: "13px",
    lineHeight: "14px",
    fontWeight: "400",
    letterSpacing: "-0.04em",
    color: dayObj[day] || "black",
  };

  return <Text text={"(" + day + ")"} css={style} />;
};

export default DayText;
