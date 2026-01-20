



function CartCard({id, title, price, image, times, onClickAdd, onClickMinus}) {

  return (
    <>
      <div className="cartCard" key={id}>
        <img src={image} alt={title} width="50" />
          <p className="productTitle">{title}</p>
            <p>Quantity: {times}</p>
            <p>Subtotal: ${(price * times).toFixed(2)}</p>
            <button onClick={() => onClickMinus(id)}>-</button>
            <button onClick={() => onClickAdd(id)}>+</button>
      </div>
    </>
  );
}

export default CartCard;
