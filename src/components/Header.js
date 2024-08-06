import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import online from "../utils/assets//icons8-connection-status-on-96.png";
import offline from "../utils/assets/icons8-offline-96.png";
const Header = () => {
  const [buttonState, setButtonState] = useState("Login");
  const status = useOnlineStatus();
  return (
    <div className="head-container">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            {status ? (
              <img src={online} className="online-pic" />
            ) : (
              <img src={offline} className="offline-pic" />
            )}
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>

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
