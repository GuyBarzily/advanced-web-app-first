import "./App.css";
import Item from "./Item";
function App() {
  const Items = [
    {
      name: "Milk",
      price: "100NIS",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
    },
    {
      name: "Bread",
      price: "100NIS",
      img: "https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg",
    },
    {
      name: "Cheese",
      price: "100NIS",
      img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
    },
  ];

  return (
    <div className="App">
      {/* <Item name={Items[0].name} price={Items[0].price} img={Items[0].img} /> */}
      {Items.map((item) => {
        return (
          <Item
            key={JSON.stringify(item)}
            name={item.name}
            price={item.price}
            img={item.img}
          ></Item>
        );
      })}
    </div>
  );
}

export default App;
