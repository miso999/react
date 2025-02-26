const HelloButton = (props) => {
  const { num, click } = props;

  const number = (num) => {
    return console.log(`${num} 번`);
  };

  return (
    <button
      onClick={() => {
        number(num);
      }}
    >
      {num}
    </button>
  );
};

export default HelloButton;
