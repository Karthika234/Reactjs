import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => (
  <div>
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <Link to={`/product/${product.id}`}>View Details</Link>
  </div>
);

export default ProductItem;
