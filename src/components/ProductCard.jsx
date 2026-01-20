


import { Link } from "react-router";

function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  times,
  onClickAdd,
  onClickMinus,
  setItemInCart,
}) {
  const description_short =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <>
      <div className="productCard" key={id}>
        <div>
          <h2 className="productTitle">{title}</h2>
          <Link to={`/shop/${id}`}>Details</Link>
        </div>
        <img src={image} alt={title} width="150" />
        <p className="productDescription">{description_short}</p>
        <div className="additionalInfo">
          <p className="productCategory">Category: {category}</p>
          <p className="productPrice">Price: ${price.toFixed(2)}</p>
          <button onClick={() => onClickMinus(id)}>-</button>
          <input
            type="number"
            value={times}
            onChange={(e) => setItemInCart({ id }, Number(e.target.value))}
          />
          <button onClick={() => onClickAdd(id)}>+</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
