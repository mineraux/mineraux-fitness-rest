import React, { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.scss'

const Header: FunctionComponent = () => {
  const location = useLocation();

  return (
    <header className="container">
      <span className="logo">Mineraux Fitness</span>
      <nav>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;
