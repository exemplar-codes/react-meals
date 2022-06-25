import React from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton({ count = 3 }) {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
}

export default HeaderCartButton;
