import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext.js';
export const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>ShopMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="  link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="  link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart :{cartList.length}</span>
      </Link>
    </header>
  );
};
