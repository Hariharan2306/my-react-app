import { useEffect, useState } from "react";
import { fetchApprovalRequesterData } from "../store/landing-page/thunk";
import { useDispatch } from "react-redux";
import { postUserLogin } from "../store/userLogin/thunk";
import "../styles/landingPage.css";
import logo from "../assets/map-location_14250066.png";

const LandigPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApprovalRequesterData(1, 10, 1));
    console.log("LandigPage");
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
              <a href="/landing-page">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="dropdown" onClick={toggleDropdown}>
              <a href="#" className="dropbtn">
                Services
              </a>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
              )}
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
