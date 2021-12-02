import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The Lean Startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>☀</p>
        </div>
      </div>
      <img
        src='https://m.media-amazon.com/images/I/71Kwo5V9QOL._AC_SY200_.jpg'
        alt='product'
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
