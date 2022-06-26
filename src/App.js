import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";
import GlobalContext from "./store/GlobalContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCart = () => setCartOpen(true);
  const hideCart = () => setCartOpen(false);

  return (
    <GlobalContext.Provider value={{ showCart, hideCart }}>
      <CartProvider>
        {cartOpen && <Cart />}
        <Header />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </GlobalContext.Provider>
  );
}

export default App;
