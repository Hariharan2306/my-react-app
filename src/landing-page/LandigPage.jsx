import { useEffect, useState } from "react";
import { fetchApprovalRequesterData } from "../store/landing-page/thunk";
import { useDispatch } from "react-redux";
import { postUserLogin } from "../store/userLogin/thunk";
import "../styles/landingPage.css";
import logo from "../assets/map-location_14250066.png";
import DropDown from "../components/dropdown";
import { servicesDropDown } from "../config/constants";

const LandigPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApprovalRequesterData(1, 10, 1));
  }, []);
  const RedNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              style={{ width: "50px", height: "50px" }}
              alt="logo"
            />
          </div>
          <ul className="nav-links">
            <li>
              <a href="/new-landing-page">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <DropDown options={servicesDropDown} />
            </li>
            <li>
              <a href="/travel-forum">Forum</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  return (
    <div>
      <RedNavbar />
    </div>
  );
};

export default LandigPage;
