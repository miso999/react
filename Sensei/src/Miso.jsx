import { useState } from "react";

const Miso = () => {
  const [product, setProduct] = useState(0);

  const happy = () => {
    setProduct((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <div>청포도: 1500</div>
      <button>-</button>
      <span>{product}</span>
      <button onClick={happy}>+</button>
      <div>총 금액: {1500 * product}</div>
    </>
  );
};

export default Miso;
