import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import GlobalContext from "../../store/GlobalContext";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart() {
  const ctx = useContext(GlobalContext);
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => cartCtx.removeItem(id);
  const cartItemAddHandler = (item) => cartCtx.addItem(item);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const [showCheckout, setShowCheckout] = useState(false);

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch(
      "https://react-http-88257-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
  };

  return (
    <Modal onClose={ctx.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout ? (
        <Checkout onCancel={ctx.hideCart} onConfirm={submitOrderHandler} />
      ) : (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={ctx.hideCart}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}

export default Cart;
