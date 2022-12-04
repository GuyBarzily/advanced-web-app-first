import "./Item.css";
import { ButtonGroup, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Item(items) {
  const item = items.props;
  const handleClick = () => {
    items.onClick(item.name);
  };
  const handleCurrAdd = () => {
    items.handleAdd(item);
  };

  const handleCurrRemove = () => {
    items.handleRemove(item);
  };
  return (
    <div className="expense-item">
      <div>
        <h1>{item.name}</h1> <h1>{item.price + " ₪"}</h1>
      </div>
      <img src={item.img} height={100} width={100}></img>
      <Button onClick={handleClick}>Go to item</Button>
      <ButtonGroup>
        <Button onClick={handleCurrRemove}>
          {" "}
          <RemoveIcon fontSize="small" />
        </Button>
        <Button onClick={handleCurrAdd}>
          {" "}
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Item;
