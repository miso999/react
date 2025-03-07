import { bearStore } from "./bear";

const MyButton = () => {
  const { bears } = bearStore();

  return <button>버튼 {bears}</button>;
};

export default MyButton;
