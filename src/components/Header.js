// import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import online from "../utils/assets//icons8-connection-status-on-96.png";
import offline from "../utils/assets/icons8-offline-96.png";
import icon from "../utils/assets/hamburger.png";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [buttonState, setButtonState] = useState("Login");
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cartInfo.items);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div>
        <img className="w-24 p-4" src={icon} />
      </div>
      <div className=" flex items-center">
        <ul className="flex">
          <li className="mx-4">
            {status ? (
              <img src={online} className="w-5" />
            ) : (
              <img src={offline} className="w-5" />
            )}
          </li>

          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>

          <li className="mx-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 font-bold text-xl">
            <Link to="/cart">Cart({cart.length})</Link>
          </li>
          <li className="mx-4">{loggedInUser}</li>
          <li className="mx-4">
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
