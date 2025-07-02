import { NavLink } from "react-router-dom";
import "./NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { sliderClasses } from "@mui/material/Slider";

const NavBar = () => {

  let [menuIcon,SetMenuIcon] = useState(false);

  let click = () =>{
    SetMenuIcon(!menuIcon);
  }

  let style = (e) => {
    return e.isActive ? "nav-active" : "";
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">DevConnect</div>
      <div className="menu-icon" onClick={click}>{menuIcon ? <CloseIcon></CloseIcon>: <MenuIcon></MenuIcon>}</div>
      <ul className={`navbar-links ${menuIcon ? "menu-links":""}`}>
        <li>
          <NavLink onClick={menuIcon ? click : ""} to="/" className={style}>Home</NavLink>
        </li>
        <li>
          <NavLink onClick={menuIcon ? click : ""}  to="/explore" className={style}>Explore</NavLink>
        </li>
        <li>
          <NavLink onClick={menuIcon ? click : ""}  to="/upload" className={style}>Upload</NavLink>
        </li>
        <li>
          <NavLink onClick={menuIcon ? click : ""}  to="/profile" className={style}>Profile</NavLink>
        </li>
        <li>
          <NavLink onClick={menuIcon ? click : ""}  to="/login" className={style}>Login</NavLink>
        </li>
        <li>
          <NavLink onClick={menuIcon ? click : ""}  to="/register" className={style}>CreateAccount</NavLink>
        </li>
        <li>
          <NavLink onClick={menuIcon ? click : ""}  to="/reels" className={style}>Reels</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
