import Card from "./Card";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        console.log(v.products[0].title);
        console.log(v.products[1].title);
        console.log(v.products[2].title);
        console.log(v.products[3].title);
        console.log(v.products[4].title);
        console.log(v.products[5].title);
        console.log(v.products[6].title);
        console.log(v.products[7].title);
      });
  });
  return (
    <>
      <Card />
    </>
  );
}

export default App;
