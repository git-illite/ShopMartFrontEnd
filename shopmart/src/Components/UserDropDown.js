import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import "../Assets/css/icons.css";

const UserDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdownClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleDropdownClick}>
        <FaRegUser className="user-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default UserDropDown;
