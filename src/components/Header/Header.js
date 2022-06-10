import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className=" header">
      <div className="d-flex-space-between container">
        <a href="/" className="logo">
          <strong>CRYPTO-TRACKER</strong>
        </a>
        <button className="login btn-primary">Login</button>
      </div>
    </header>
  );
};

export default Header;
