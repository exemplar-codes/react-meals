import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      // if an item already exists, increase it's amount by 1
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems;
      if (existingCartItemIndex === -1) {
        updatedItems = state.items.concat(action.item);
      } else {
        state.items[existingCartItemIndex].amount++;
        updatedItems = state.items;
      }

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
