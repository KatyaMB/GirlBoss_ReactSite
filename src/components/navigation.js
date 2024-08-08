import React from 'react';
// Imported button from react-button
import { Button } from '@trendmicro/react-buttons';

// Creating the navigation with react nav
function Navigation() {
    return (
      <nav>
        <div className="navigation">
        <p id="cart">Cart(0)</p>
        <p id="checkout">Checkout</p>
        <img id="nav-logo" src="https://girlboss.com/cdn/shop/files/Girlboss_Logo_Wordmark_Black_400x106.png?v=1637073425" alt="GirlBoss logo" />
        <p id="read" className="nav-text">READ</p>
        <p id="news" className="nav-text">NEWSLETTER</p>
        <p className="nav-text">PODCAST</p>
        <p className="nav-text">FIND A JOB</p>
        <p className="nav-text">RESOURCES</p>
        <p className="nav-text">COURSES</p>
        <input id="input-nav"type="text" placeholder="Search" />
        <Button id="button-nav" btnSize="sm" btnStyle="flat" btnColor="black">
            <img id="nav-button-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gv2j6mKgP45MCG8FaazUPoz8ljfgswjXVu6jdLszgQ&s" alt="Search" />
        </Button>
        </div>
      </nav>
    );
  }
  
  // Exporting navigation
  export default Navigation;