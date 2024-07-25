import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import products from '../data/products';

const ProductDetail = ({ match }) => {
  const product = products.find(p => p.id === parseInt(match.params.id));
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
