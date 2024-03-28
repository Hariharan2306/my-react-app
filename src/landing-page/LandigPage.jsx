// import { useEffect, useState } from "react";
// import { fetchApprovalRequesterData } from "../store/landing-page/thunk";
// import { useDispatch } from "react-redux";
// import { postUserLogin } from "../store/userLogin/thunk";
// import "../styles/landingPage.css";
// import logo from "../assets/map-location_14250066.png";

// const LandigPage = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchApprovalRequesterData(1, 10, 1));
//   }, []);
//   const RedNavbar = () => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     const toggleDropdown = () => {
//       setShowDropdown(!showDropdown);
//     };

//     return (
//       <nav className="navbar">
//         <div className="container">
//           <div className="logo">
//             <img
//               src={logo}
//               style={{ width: "50px", height: "50px" }}
//               alt="logo"
//             />
//           </div>
//           <ul className="nav-links">
//             <li>
//               <a href="/new-landing-page">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <DropDown options={servicesDropDown} />
//             </li>
//             <li>
//               <a href="/travel-forum">Forum</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   };
//   return (
//     <div>
//       <RedNavbar />
//     </div>
//   );
// };

// export default LandigPage;

import { useState } from "react";
import "./NavbarStyles.css";
// import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import DropDown from "../components/dropdown";
import { servicesDropDown } from "../config/constants";

export const MenuItems = [
  {
    title: "HOME",
    url: "/new-landing-page",
    cName: "nav-link",
  },
  {
    title: "ABOUT",
    url: "/about",
    cName: "nav-link",
  },
  {
    title: "SERVICES",
    url: "/services",
    cName: "nav-link",
  },
  {
    title: "FORUM",
    url: "/travel-forum",
    cName: "nav-link",
  },
  {
    title: "CONTACT",
    url: "#",
    cName: "nav-link",
  },
];

function LandigPage() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbarLogo">Bus Buddies </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "bx bx-x" : "bx bx-menu"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {item.title.includes("SERVICES") ? (
                <DropDown options={servicesDropDown} />
              ) : (
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default LandigPage;
