import { useNavigate } from "react-router-dom";
import "./Item.css";

function Item(items) {
  const nav = useNavigate();
  const item = items.props;
  const handleClick = () => {
    console.log(item);
    nav("/item=" + item.name);
  };
  return (
    <div className="expense-item" onClick={handleClick}>
      <div>
        <h1>{item.name}</h1>
        <h1>{item.price}</h1>
      </div>
      <img src={item.img} height={100} width={100}></img>
    </div>
  );
}

export default Item;
