import React, { useState } from "react";
import { Badge, Button } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Item.css";

function CartItem(items) {
  const item = items.props;
  const [itemCount, setItemCount] = useState(4);

  const handleClick = () => {
    items.onClick(item);
  };

  const handleRemove = () => {
    items.handleRemove(item);
  };

  return (
    <div className="expense-item">
      <h2>{item.name}</h2> <h2>{item.price + " ₪"}</h2>
      <img
        style={{ paddingRight: "2vw" }}
        src={item.img}
        height={100}
        width={100}
      ></img>
      <Button
        sx={{ color: "white", paddingLeft: "3vw", paddingRight: "3vw" }}
        onClick={handleClick}
      >
        Go to item
      </Button>
      <RemoveCircleIcon sx={{ cursor: "pointer" }} onClick={handleRemove} />
      {/* <Badge color="secondary" badgeContent={itemCount}>
        <AddCircleIcon />
      </Badge> */}
    </div>
  );
}

export default CartItem;
