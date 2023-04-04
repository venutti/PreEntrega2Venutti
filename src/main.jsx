import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import CartProvider from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);
