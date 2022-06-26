import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import GlobalContext from "../../store/GlobalContext";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const ctx = useContext(GlobalContext);
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={ctx.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.hideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
