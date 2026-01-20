import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css';
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import ItemDetail from "./components/ItemDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: ":itemId",
            element: <ItemDetail />,
          },
        ],
      },
      { path: "cart", element: <Cart /> },
    ],
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
