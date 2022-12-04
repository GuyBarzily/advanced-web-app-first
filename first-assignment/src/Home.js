import Item from "./Item";
import { useNavigate } from "react-router-dom";

function Home(Items) {
  const itemsArr = Items.props.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const nav = useNavigate();
  const navToItem = (name) => {
    nav("/item=" + name);
  };
  return (
    <div
      style={{
        padding: "2vw",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Welcome to our SuperMarket</h1>
      {itemsArr.map((item) => {
        return (
          <Item
            key={JSON.stringify(item)}
            props={item}
            onClick={navToItem}
          ></Item>
        );
      })}
    </div>
  );
}
export default Home;
