import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="Nav">
      <div className="menu__cont">
        <AiOutlineMenu className="menu" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="dropdown__content">
            
            <a href="#">Profile</a>
            <a href="#">About Us</a>
            <a href="#">Log Out</a>
          </div>
        )}
      </div>

      <div className="logo__cont">
        <img
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          alt="YouTube Logo"
          className="logo"
        />
      </div>
      <div className="search__cont">
        <input type="text" placeholder="Search" className="search" />
        <button type="submit" className="search__btn">
          <AiOutlineSearch className="search__icon" />
        </button>
      </div>
      <BsFillBellFill className="bell" />
    </nav>
  );
}

export default Nav;
