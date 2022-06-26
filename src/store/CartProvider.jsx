import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        action.totalAmount + action.item.price * action.item.amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE": {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        action.totalAmount + action.item.price * action.item.amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    default:
      return defaultCartState;
  }
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) =>
    dispatchCartAction({ type: "ADD", item: item });

  const removeItemFromCartHandler = (id) =>
    dispatchCartAction({ type: "REMOVE", id: id });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
