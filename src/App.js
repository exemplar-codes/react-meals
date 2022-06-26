import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import GlobalContext from "./store/GlobalContext";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCart = () => setCartOpen(true);
  const hideCart = () => setCartOpen(false);

  return (
    <GlobalContext.Provider value={{ showCart, hideCart }}>
      {cartOpen && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </GlobalContext.Provider>
  );
}

export default App;
