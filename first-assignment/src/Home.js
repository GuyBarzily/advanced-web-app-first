import Item from "./Item";
import React, { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useState } from "react";
import ItemModal from "./ItemModal";
import CartModal from "./CartModal";
import { getItems } from "./axios";

function Home() {
  const [Items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [openItem, setOpenItem] = useState(false);
  const [displayItem, setDisplayItem] = useState("");
  const handleOpenItem = () => setOpenItem(true);
  const handleCloseItem = () => setOpenItem(false);
  const navToItem = (item) => {
    setDisplayItem(item);
    setOpenItem(true);
  };
  const handleAdd = (item) => {
    const index = shoppingCart.indexOf(item);
    setItemCount(itemCount + 1);
    setCartSum(cartSum + item.price);
    setShoppingCart((prev) => {
      return [item, ...prev];
    });
  };

  const handleRemove = (item) => {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
      setItemCount(Math.max(itemCount - 1, 0));
      setCartSum(cartSum - item.price);
      let arr = [...shoppingCart];
      arr.splice(index, 1);
      setShoppingCart(arr);
    }
  };
  ///////////////////////////////////////////////////
  const [openCart, setOpenCart] = useState(false);
  // const [displayCart, setDisplayCart] = useState("");
  const [cartSum, setCartSum] = useState(0);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);
  const navToCart = (arr) => {
    // setDisplayCart(arr);
    setOpenCart(true);
  };
  ///////////////////////////////////////////////////
  useEffect(() => {
    // console.log(Items.props);
    const func = async () => {
      const res = await getItems();
      setItems(res.data);
      console.log(res.data);
    };
    func();
  }, []);
  return (
    <div
      style={{
        paddingLeft: "2vw",
        paddingRight: "2vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Welcome to our SuperMarket</h1>
      <ItemModal
        open={openItem}
        handleOpen={handleOpenItem}
        handleClose={handleCloseItem}
        item={displayItem}
      />
      <CartModal
        open={openCart}
        handleOpen={handleOpenCart}
        handleClose={handleCloseCart}
        cart={shoppingCart}
        sum={cartSum}
        onClick={navToItem}
        handleRemove={handleRemove}
      />
      <Badge color="secondary" badgeContent={itemCount}>
        <ShoppingCartIcon
          fontSize="large"
          sx={{ cursor: "pointer" }}
          onClick={navToCart}
        />{" "}
      </Badge>
      {Items.map((item) => {
        return (
          <Item
            key={JSON.stringify(item)}
            props={item}
            onClick={navToItem}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          ></Item>
        );
      })}
    </div>
  );
}
export default Home;
