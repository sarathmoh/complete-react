import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [buttonState, setButtonState] = useState("Login");
  return (
    <div className="head-container">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul>
          
            <li><Link to="/">Home</Link></li>
         
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="btn"
              onClick={() => {
                buttonState === "Login"
                  ? setButtonState("Logout")
                  : setButtonState("Login");
              }}
            >
              {buttonState}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
