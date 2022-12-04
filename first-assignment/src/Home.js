import Item from "./Item";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home(Items) {
  const [itemCount, setItemCount] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const itemsArr = Items.props.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const nav = useNavigate();
  const navToItem = (name) => {
    nav("/item=" + name);
  };
  const handleAdd = (item) => {
    setItemCount(itemCount + 1);

    setShoppingCart((prev) => {
      return [item, ...prev];
    });
  };

  const handleRemove = (item) => {
    setItemCount(Math.max(itemCount - 1, 0));
    console.log(shoppingCart.indexOf(item), "item: ", item);
    let arr = shoppingCart.splice(shoppingCart.indexOf(item), 1);
    console.log("arr: ", arr);
    console.log(arr);
    setShoppingCart(arr);
    // for (let i = 0; i < shoppingCart.length; i++) {
    //   // console.log(shoppingCart[i]);
    //   // console.log("i", i);
    //   if (shoppingCart[i].name === item.name) {
    //     console.log("i", i);
    //     let arr = shoppingCart.splice(i, 1);
    //     setShoppingCart(arr);
    //   }
    // }

    // shoppingCart.forEach((i) => {
    //   if (i === item) {
    //     console.log(shoppingCart.indexOf(item))
    //     let arr = shoppingCart.splice(shoppingCart.indexOf(item), 1);
    //     setShoppingCart(arr);
    //   }
    // });
  };

  return (
    <div
      style={{
        padding: "2vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Welcome to our SuperMarket</h1>
      <Button
        onClick={() => {
          console.log(shoppingCart);
        }}
      >
        Press
      </Button>
      <Badge color="secondary" badgeContent={itemCount}>
        <ShoppingCartIcon />{" "}
      </Badge>
      {itemsArr.map((item) => {
        return (
          <Item
            key={JSON.stringify(item)}
            props={item}
            onClick={navToItem}
            // setCount={setItemCount}
            // itemCount={itemCount}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          ></Item>
        );
      })}
    </div>
  );
}
export default Home;
