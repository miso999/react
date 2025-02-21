import Text from "../Base/Text";

const DateText = (props) => {
  const style = {
    fontSize: "40px",
    lineHeight: "40px",
    fontWeight: "300",
    letterSpacing: "-0.04em",
  };

  return <Text text={props.text} css={style} />;
};

export default DateText;
