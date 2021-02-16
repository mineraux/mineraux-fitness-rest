import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
