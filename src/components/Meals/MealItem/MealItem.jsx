import React from "react";

import classes from "./MealItem.module.css";

function MealItem(props, defaultProps) {
  const price = `${props.price.toFixed(2)}`;
  console.log(defaultProps.key);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;
