import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import CartItem from "./CartItem";

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
  const getRand = () => {
    return Math.floor(Math.random() * 10000);
  };
  const navToItem = (item) => {
    props.onClick(item);
    props.handleClose();
  };

  useEffect(() => {}, [props.cart]);
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
            <Button
              sx={{ paddingLeft: "10vw", color: "black", alignText: "center" }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default CartModal;
