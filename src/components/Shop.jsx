
import { useOutletContext, Outlet, useParams } from "react-router";
import ProductCard from "./ProductCard";

function Shop() {
  const {
    error,
    loading,
    shopItems,
    cartItems,
    setCartItems,
    addToCart,
    countItemInCart,
    setItemInCart,
  } = useOutletContext();

  // If a child route is active (itemId param exists), render <Outlet /> and provide context
  const params = useParams();
  if (params.itemId) {
    return (
      <Outlet context={{
        shopItems,
        cartItems,
        setCartItems,
        addToCart,
        countItemInCart,
        setItemInCart,
      }} />
    );
  }

  if (loading) return (
    <>
    <h1>The shop!</h1>
      <p>Here you can find all things listed.</p>
    <p>Contents loading...</p>
    </>
  ) 

  if (error) return (
    <>
      <h1>The shop!</h1>
      <p>Here you can find all things listed.</p>
      <p>A network error was encountered</p>
    </>
  ) 

  return (
    <>
      <h1>The shop!</h1>
      <p>Here you can find all things listed.</p>
      
      <div className="itemsList">
        {shopItems.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
            onClickAdd={() => addToCart(item, 1)}
            onClickMinus={() => addToCart(item, -1)}
            times={countItemInCart(item.id)}
            setItemInCart={setItemInCart}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
