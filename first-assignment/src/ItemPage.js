import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ItemPage(items) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [selling, setSelling] = useState("");
  const location = useLocation();
  const item = location.pathname.split("=")[1];
  const display = () => {
    const arr = items.props;
    arr.forEach((element) => {
      if (element.name == item) {
        setName(element.name);
        setPrice(element.price);
        setImg(element.img);
        setSelling(element.selling);
      }
    });
  };
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  useEffect(() => {
    display();
  }, []);
  return (
    <div style={divStyle}>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={img} height={200} width={200} />
      <br></br>
      <a href={selling}>Go to store</a>
      <Link to="/">back</Link>
    </div>
  );
}

export default ItemPage;
