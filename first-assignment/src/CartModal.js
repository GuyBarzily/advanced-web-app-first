import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Item from "./Item";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "50vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

function CartModal(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box component="div" sx={style}>
          {props.cart.map((item) => {
            return <Item key={JSON.stringify(item)} props={item}></Item>;
          })}
          <h2 style={{ textAlign: "center" }}>
            Your Cart Items Total Sum: {props.sum + " ₪"}
          </h2>
        </Box>
      </Modal>
    </div>
  );
}
export default CartModal;
