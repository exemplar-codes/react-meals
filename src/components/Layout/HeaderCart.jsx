import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import GlobalContext from "../../store/GlobalContext";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const ctx = useContext(GlobalContext);
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce(
    (finalVal, item) => finalVal + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={ctx.showCart}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
