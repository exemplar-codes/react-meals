import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount = state.totalAmount + action.item.price * 1;

      // maybe the item exists already, find and add to it's entry
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems;
      if (existingCartItemIndex === -1) {
        updatedItems = state.items.concat(action.item);
      } else {
        state.items[existingCartItemIndex].amount += action.item.amount;
        updatedItems = state.items;
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE": {
      // if an item already exists, decrease it's amount by 1. If it's 1 already, remove it from the items
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const updatedTotalAmount =
        state.totalAmount - state.items[existingCartItemIndex].price;
      if (state.items[existingCartItemIndex].amount > 1) {
        state.items[existingCartItemIndex].amount--;
      } else {
        // there's only 1 item left
        state.items.splice(existingCartItemIndex, 1);
      }

      return { items: state.items, totalAmount: updatedTotalAmount };
    }
    case "CLEAR": {
      return defaultCartState;
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

  const clearCartHandler = () => dispatchCartAction({ type: "CLEAR" });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
