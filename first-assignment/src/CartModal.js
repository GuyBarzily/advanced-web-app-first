import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { sendCart } from "./axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "65vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

function CartModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const getRand = () => {
    return Math.floor(Math.random() * 10000);
  };
  const navToItem = (item) => {
    props.onClick(item);
    props.handleClose();
  };

  const handleClick = async () => {
    const cart = {
      name: name,
      email: email,
      address: address,
      cart: props.cart,
    };
    const res = await sendCart(cart);
    console.log("cart:", res);

    // console.log(name, email, address);
    // console.log(props.cart);
    setAdress("");
    setEmail("");
    setName("");
  };

  useEffect(() => {
    // setAdress("");
    // setEmail("");
    // setName("");
  }, [props.cart]);
  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box component="div" sx={style}>
          <h2 style={{ textAlign: "center" }}>Your Shopping Cart</h2>
          {props.cart.map((item) => {
            return (
              <CartItem
                key={getRand()}
                props={item}
                onClick={navToItem}
                handleRemove={props.handleRemove}
              ></CartItem>
            );
          })}
          <div style={{ display: "flex" }}>
            <h2>Cart Items Total Sum: {props.sum + " ₪"}</h2>
          </div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={name}
              id="name"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={email}
              id="email"
              label="Mail"
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              value={address}
              id="address"
              label="Adress"
              variant="standard"
              onChange={(e) => setAdress(e.target.value)}
            />
          </Box>
          <Button
            onClick={handleClick}
            sx={{ paddingLeft: "10vw", color: "black", alignText: "center" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
export default CartModal;
