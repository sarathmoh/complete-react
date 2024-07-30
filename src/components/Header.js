import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [buttonState, setButtonState] = useState("Login");
  return (
    <div className="head-container">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
