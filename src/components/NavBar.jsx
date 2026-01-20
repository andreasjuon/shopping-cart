
import { Link } from "react-router";

function NavBar({cartItems, countItemInCart}) {

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
