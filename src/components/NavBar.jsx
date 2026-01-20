
import { Link } from "react-router";
import { useContext } from "react";
import ShopContext from "../ShopContext";

function NavBar( ) {

  const { cartItems } = useContext(ShopContext);

  let totalItems = 0;
  totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default NavBar;
