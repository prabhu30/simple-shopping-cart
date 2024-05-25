import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import InventoryContextProvider from "./context/InventoryContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InventoryContextProvider>
      <RouterProvider router={router} />
    </InventoryContextProvider>
  </React.StrictMode>
);
