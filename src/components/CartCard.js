import './CartCard.css';
import { useCart } from '../context/CartContext.js';
export const CartCard = ({ product }) => {
  const { name, image, price } = product;
  const { removeFromCart } = useCart();
  return (
    <>
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button
          className="remove-from-cart"
          onClick={() => removeFromCart(product)}
        >
          Remove
        </button>
      </div>
    </>
  );
};
