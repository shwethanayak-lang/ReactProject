import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Nav = () => {
  const navStyle = {
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "#000",
    margin: "20px 0",
  };

  return (
    <nav>
      {/*Displaying the brand name for the app*/}
      <h3 className="navbrand">
        HelloShops ☘<ShoppingCartIcon></ShoppingCartIcon>
      </h3>
      <ul className="navlinks">
        <Link style={navStyle} to="/login">
          <li> Login</li>
        </Link>
        <Link style={navStyle} to="/products">
          <li> Shop And Buy</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
