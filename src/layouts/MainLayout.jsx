import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";
import "../App.css";
import { useState, useEffect, useReducer } from "react";
import ShopContext from "../ShopContext";

function MainLayout() {
  // Load items in shop

  //const shopItems = testItems;
  const [shopItems, setShopItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Andreas Shop",
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setShopItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);


  // Reducer for cartItems
  function cartItemsReducer(state, action) {
    switch (action.type) {
      case "ADD": {
        const { item, times } = action.payload;
        const id = item.id;
        return {
          ...state,
          [id]: Math.max(0, state[id] ? state[id] + times : times),
        };
      }
      case "SET": {
        const { item, times } = action.payload;
        const id = item.id;
        return {
          ...state,
          [id]: Math.max(0, times),
        };
      }
      case "RESET":
        return {};
      default:
        return state;
    }
  }

  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {});


  // Function to add items (or remove)
  const addToCart = (item, times) => {
    dispatchCartItems({ type: "ADD", payload: { item, times } });
  };


  // Function to reset number of items
  const setItemInCart = (item, times) => {
    dispatchCartItems({ type: "SET", payload: { item, times } });
  };

  // Function to count number of each item in cart
  const countItemInCart = (id) => {
    return cartItems[id] ? cartItems[id] : 0;
  };

  return (
    <ShopContext.Provider value={{ shopItems, cartItems, addToCart, setItemInCart, countItemInCart }}>
    <div className="allPage">
      <NavBar cartItems={cartItems} countItemInCart={countItemInCart} />
      <Outlet
        context={{
          error,
          loading,
          shopItems,
          cartItems,
          addToCart,
          setItemInCart,
          countItemInCart,
        }}
      />
    </div>
    </ShopContext.Provider>
  );
}

export default MainLayout;
