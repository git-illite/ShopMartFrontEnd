import React from "react";
import { Link } from "react-router-dom";
import { HiSearchCircle } from "react-icons/hi";
import {FaGlobe} from 'react-icons/fa'
import '../Assets/css/icons.css'
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <div className="input-container">
                <HiSearchCircle className="icon" />
                <input className="SearchInput" style= {{ height: 30}}type="text" placeholder="Search..." />
              </div>
            </li>
            <li>
              <Link to="/resorts">Vacation Properties <FaGlobe className="GlobeIcon"/></Link>
            </li>
            <li>
              <UserDropDown/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
