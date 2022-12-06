import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItemPage from "./ItemPage";

function App() {
  const Items = [
    {
      name: "Milk",
      price: 10,
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
      img1: "https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1643983013/BW%20BLOG/Untitled-design---2022-02-04T192644.467_11zon.jpg",
      selling:
        "https://www.shufersal.co.il/online/he/search?text=%D7%97%D7%9C%D7%91",
      desc: "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.",
    },
    {
      name: "Bread",
      price: 3,
      img: "https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg",
      img1: "https://images.immediate.co.uk/production/volatile/sites/30/2008/01/EasyWhiteBread-7756545.jpg?resize=768,574",
      selling:
        "https://www.shufersal.co.il/online/he/search?text=%D7%9C%D7%97%D7%9D",
      desc: "Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking.",
    },
    {
      name: "Cheese",
      price: 5,
      img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
      img1: "https://media.gq.com/photos/581799e0a6fe84375dbe8d86/16:9/w_2560%2Cc_limit/Cheese%25201.jpg",
      selling:
        "https://www.shufersal.co.il/online/he/search?text=%D7%92%D7%91%D7%99%D7%A0%D7%94",
      desc: "Cheese is a dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein.",
    },
    {
      name: "Soap",
      price: 20,
      img: "https://media.istockphoto.com/id/505574760/vector/pink-bar-of-soap-3d-isometric-icon.jpg?s=612x612&w=0&k=20&c=1S2_3_WlTs5plf4y5-zY7Ss3Vcvq8ghxzgPLf7sUh7w=",
      img1: "https://www.littlesoapcompany.co.uk/wp-content/uploads/2021/02/Avo_Lifestyle.jpg",
      selling: "",
      desc: "Soap is a salt of a fatty acid used in a variety of cleansing and lubricating products.",
    },
    {
      name: "Pasta",
      price: 50,
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.616.493.suffix/1615916524567.jpeg",
      img1: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg",
      selling: "",
      desc: "Pasta (US: /ˈpɑːstə/, UK: /ˈpæstə/; Italian pronunciation: [ˈpasta]) is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. ",
    },
    {
      name: "Coca-Cola",
      price: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/250px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      img1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png",
      selling: "",
      desc: "Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company.",
    },
    {
      name: "Eggs",
      price: 3,
      img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
      img1: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/03/How-to-Boil-Eggs-main-1-2.jpg",
      selling: "",
      desc: "Humans have eaten animal eggs for thousands of years.[1] The most widely consumed eggs are those of fowl, especially chickens.",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home props={Items} />} />
      </Routes>
    </Router>
  );
}

export default App;
