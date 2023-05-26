import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { PAGES } from "../global/constants";
import { AuthContext } from "../context/Auth";

const Navbar = () => {
  const { token, updateToken } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={`/${PAGES.PRODUCT_LIST}`} className="navbar-link">
          Product List
        </Link>
        <Link to={`/${PAGES.ADD_NEW_PRODUCT}`} className="navbar-link">
          Add Product
        </Link>
        <button onClick={updateToken}>
          {token ? "Log Out as Admin" : "Log In as Admin"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
