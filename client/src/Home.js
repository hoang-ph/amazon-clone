import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='	https://m.media-amazon.com/images/I/71rw0INKXPL._SX3000_.jpg'
          alt='home'
        />
        <div className='home__row'>
          <Product
            title='Spiderman'
            price={18.99}
            image='https://m.media-amazon.com/images/I/71Kwo5V9QOL._AC_SY200_.jpg'
            rating={5}
          />
          <Product />
        </div>

        <div className='home__row'>
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className='home__row'>{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
