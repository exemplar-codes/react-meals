import React from "react";

const GlobalContext = React.createContext({
  showCart: () => {},
  hideCart: () => {},
});

export default GlobalContext;
