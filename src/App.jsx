import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './AboutUs';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const totalQuantity = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = (e) => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {(!showProductList && !showCart) && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {(showProductList || showCart) && (
        <div className="navbar">
          <div className="nav-logo" onClick={handleHomeClick}>
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
          </div>
          <div className="nav-links">
            <button onClick={() => { setShowProductList(true); setShowCart(false); }}>Plants</button>
            <button onClick={handleCartClick}>
              Cart <span className="cart-count">{totalQuantity}</span>
            </button>
          </div>
        </div>
      )}

      {showProductList && (
        <div className="product-list-container">
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      )}

      {showCart && (
        <div className="cart-container">
          <CartItem onContinueShopping={handleContinueShopping} />
        </div>
      )}
    </div>
  );
}

export default App;
