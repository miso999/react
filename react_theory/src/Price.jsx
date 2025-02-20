const Price = (props) => {
  const { originalPrice, discountRate } = props;
  const discountPrice = (originalPrice * (100 - discountRate)) / 100;
  const krwPrice = discountPrice * 1400;

  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span style={{ textDecorationLine: "Line-through", fontSize: "12px" }}>
          {originalPrice}
        </span>
        <span style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}>
          {discountPrice}
        </span>
        <span style={{ color: "grey", fontSizeL: "15px" }}>({krwPrice})</span>
      </div>
    </>
  );
};

export default Price;
