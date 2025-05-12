import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="uk-header">
    <div className="uk-header-left">
      <img
        src="/uttarakhand-logo.png" // Place your logo in public/ as uttarakhand-logo.png
        alt="Uttarakhand Tourism Logo"
        className="uk-logo"
      />
      <div className="uk-header-texts">
        <div className="uk-tagline">
          Unveil the Secrets of the Himalayas –<br />
          <span>Explore Hidden Uttarakhand.</span>
        </div>
        <div className="uk-initiative">
          An initiative taken by<br />
          Uttarakhand Tourism Development Board
        </div>
      </div>
    </div>
    <nav className="uk-header-nav">
      <a href="/">Home</a>
      <a href="/faq">FAQ</a>
      <a href="/contact">Contact Us</a>
      <a href="/signin">Sign In / Sign Up</a>
    </nav>
  </div>
);

export default Header; 