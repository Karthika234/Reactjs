import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>My E-Commerce Store</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
