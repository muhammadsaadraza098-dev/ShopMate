import { CartCard } from '../components';
import '../index.css';
import { UseTitle } from '../hooks/UseTitle';
import { useCart } from '../context/CartContext.js';
export const Cart = () => {
  const { total, cartList } = useCart();
  UseTitle('Cart');
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items : {cartList.length} / ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
