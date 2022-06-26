import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import GlobalContext from "../../store/GlobalContext";

function HeaderCartButton(props) {
  const ctx = useContext(GlobalContext);

  return (
    <button className={classes.button} onClick={ctx.showCart}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
