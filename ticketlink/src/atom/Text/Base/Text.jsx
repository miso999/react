const Text = (props) => {
  const { text, css } = props;
  return <span style={css}>{text}</span>;
};

export default Text;
