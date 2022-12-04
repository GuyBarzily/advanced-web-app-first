import "./Item.css";

function Item(items) {
  const item = items.props;
  const handleClick = () => {
    items.onClick(item.name);
  };
  return (
    <div className="expense-item" onClick={handleClick}>
      <div>
        <h1>{item.name}</h1> <h1>{item.price}</h1>
      </div>
      <img src={item.img} height={100} width={100}></img>
    </div>
  );
}

export default Item;
