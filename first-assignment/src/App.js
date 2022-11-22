import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItemPage from "./ItemPage";

function App() {
  const Items = [
    {
      name: "Milk",
      price: "100NIS",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
      selling:
        "https://www.shufersal.co.il/online/he/search?text=%D7%97%D7%9C%D7%91",
    },
    {
      name: "Bread",
      price: "300IS",
      img: "https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg",
      selling:
        "https://www.shufersal.co.il/online/he/search?text=%D7%9C%D7%97%D7%9D",
    },
    {
      name: "Cheese",
      price: "200IS",
      img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
      selling:
        "https://www.shufersal.co.il/online/he/search?text=%D7%92%D7%91%D7%99%D7%A0%D7%94",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home props={Items} />} />
        <Route path="/item:handle" element={<ItemPage props={Items} />} />
      </Routes>
    </Router>
  );
}

export default App;
