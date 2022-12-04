import { fontFamily } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ItemPage(items) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [selling, setSelling] = useState("");
  const [desc, setDesc] = useState("");
  const location = useLocation();
  const item = location.pathname.split("=")[1];
  const display = () => {
    const arr = items.props;
    arr.forEach((element) => {
      if (element.name == item) {
        setName(element.name);
        setPrice(element.price);
        setImg(element.img);
        setImg1(element.img1);
        setSelling(element.selling);
        setDesc(element.desc);
      }
    });
  };
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "gray",
  };

  const imgStyle = {
    padding: "5px",
    borderRadius: "30px",
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  useEffect(() => {
    display();
  }, []);
  return (
    <div style={divStyle}>
      <h1 style={mystyle}>{name}</h1>
      <h1>{price}</h1>
      <span style={{ padding: "5px" }}>
        <img src={img} height={200} width={200} style={imgStyle} />
        <img src={img1} height={200} width={200} style={imgStyle} />
      </span>
      <div width={100}>
        <p style={{ textAlign: "center", fontFamily: "Ariel" }}>{desc}</p>
      </div>
      <a href={selling}>Go to store</a>
      <Link to="/">back</Link>
    </div>
  );
}

export default ItemPage;
