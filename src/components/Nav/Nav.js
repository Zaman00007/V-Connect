import { useState } from "react";
import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCog } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import UserDialog from "../UserDialog/UserDialog";
import Aside from "../Aside/Aside"; 

function Nav() {
  const [showDialog, setShowDialog] = useState(false);
  const [user, setUser] = useState(null);
  const [showAside, setShowAside] = useState(false);

  const handleSearch = async () => {
    console.log("Button Clicked");
    const search = document.getElementById('search').value;
    console.log('Search:', search);
    axios.get(`http://localhost:8800/users/${search}`)
      .then(response => {
        setUser(response.data.user);
        setShowDialog(true);
        console.log('User:', response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
    setUser(null);
  }

  const handleBell = () => {
    console.log('Bell clicked');
  }

  const handleToggleAside = () => {
    setShowAside(!showAside);
  }

  return (
    <nav className="Nav">
      <div className="menu__cont" onClick={handleToggleAside}>
        <AiOutlineMenu className="menu" />
      </div>

      <div className="logo__cont">
        <img
          src="vconnectlogo.png"
          alt=""
          className="logo"
        />
      </div>
      <div className="search__cont">
        <input type="text" placeholder="Search" id="search" className="search" />
        <button type="submit" className="search__btn" onClick={handleSearch}>
          <AiOutlineSearch className="search__icon" />
        </button>
      </div>
      <BsFillBellFill className="bell" onClick={handleBell} />
      <FontAwesomeIcon icon={faUserCircle} className="bell" />
      <FontAwesomeIcon icon={faCog} className="bell" />
      {showDialog && user && <UserDialog user={user} onClose={handleCloseDialog} />}
      {showAside && <Aside />}
    </nav>
  );
}

export default Nav;
