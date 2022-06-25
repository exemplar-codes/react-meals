import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCart = () => setCartOpen(true);
  const hideCart = () => setCartOpen(false);

  return (
    <>
      {cartOpen && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
