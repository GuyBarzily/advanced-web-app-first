import axios from "axios";

const sendCart = async (cart) => {
  console.log(cart);
  const res = axios.post("http://localhost:8081/cart", cart);
  return res;
};

const getItems = async () => {
  const res = axios.get("http://localhost:8081/getItems");
  console.log(res);
  return res;
};

export { sendCart, getItems };
