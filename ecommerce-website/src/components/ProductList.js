import React from 'react';
import products from '../data/products';
import ProductItem from './ProductItem';

const ProductList = () => (
  <div>
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
