import logopath from "./images/logo.jpg";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logopath} alt="#" />
      </div>

      <div className="tital">
        <h1 className="tital-name">RapidRepair</h1>
      </div>

      <ul className="nav-item">
        <li className="nav-item1">
          <a className="nav-home" href="./Home">
            Home
          </a>
        </li>
        {/* <li className="nav-item1">
        <a className="nav-item2" href="#">Login</a>
      </li> */}
        <Dropdown />
      </ul>
      <button className="login-btn" type="submit" href="./Login">
        Signup
      </button>
    </nav>
  );
}

export default Navbar;
