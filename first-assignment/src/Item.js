import { useEffect } from "react";
import "./Item.css";

function Item(item) {
  //   const item = {
  //     name: "Milk",
  //     price: "100NIS",
  //     img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
  //   };
  return (
    <div className="expense-item">
      <div>
        <h1>{item.name}</h1>
        <h1>{item.price}</h1>
      </div>
      {/* <h1>{item.price}</h1> */}
      <img src={item.img} height={100} width={100}></img>
    </div>
  );
}

export default Item;
