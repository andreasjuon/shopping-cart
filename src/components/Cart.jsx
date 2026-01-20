

import { useOutletContext } from "react-router";
import CartCard from "./CartCard";
import { useMemo } from "react";



function Cart() {

  const { shopItems, cartItems, setCartItems, addToCart, countItemInCart } =
    useOutletContext();

  const shopItemsInCart = shopItems.filter((item) => cartItems[item.id] > 0);

  const totalPayable = useMemo(() => {
    return shopItemsInCart.reduce((sum, item) => {
      return sum + item.price * cartItems[item.id];
    }, 0);
  }, [shopItemsInCart, cartItems]);

  return (
    <>
      <h1>The shopping cart!</h1>

      <p>Here you can find all things you chose.</p>

      <div className="itemsListCart">
        {shopItemsInCart.map((item) => (
          <CartCard
            key={item.id}
            {...item}
            onClickAdd={() => addToCart(item, 1)}
            onClickMinus={() => addToCart(item, -1)}
            times ={countItemInCart(item.id)}
          />
        ))}
      </div>
      <h2>Total Payable to Andreas: ${totalPayable.toFixed(2)}</h2>
    </>
  );
}

export default Cart;
