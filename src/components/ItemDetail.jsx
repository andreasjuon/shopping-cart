import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import { Link } from "react-router";

function ItemDetail() {
  const { itemId } = useParams();
  const { shopItems } = useOutletContext();
  const item = shopItems.find((i) => String(i.id) === String(itemId));

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="productCard">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>
        Rating: {item.rating.rate} ({item.rating.count} reviews)
      </p>
      <Link to="/shop">Back to Shop</Link>
    </div>
  );
}

export default ItemDetail;
