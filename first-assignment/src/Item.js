import "./Item.css";
import { ButtonGroup, Button } from "@mui/material";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

function Item(items) {
  const item = items.props;
  const handleClick = () => {
    items.onClick(item);
  };
  const handleCurrAdd = () => {
    items.handleAdd(item);
  };

  const handleCurrRemove = () => {
    items.handleRemove(item);
  };
  const buttonStyle = {
    color: "white",
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
      <Button sx={buttonStyle} onClick={handleClick}>
        See item
      </Button>
      <ButtonGroup sx={{ paddingLeft: "6vw" }}>
        <Button sx={buttonStyle} onClick={handleCurrRemove}>
          {" "}
          <RemoveShoppingCartOutlinedIcon />
        </Button>
        <Button sx={buttonStyle} onClick={handleCurrAdd}>
          {" "}
          <AddShoppingCartOutlinedIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Item;
