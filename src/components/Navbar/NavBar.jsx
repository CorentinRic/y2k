import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const data = [
  {
    id: "1N",
    name: "Shop",
    link: "/",
  },
  {
    id: "2N",
    name: "Panier",
    link: "/cart",
  },
];

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive__nav");
  };

  return (
    <nav className="nav">
      <span className="logo">
        <Link className="nav-menu-link nav-logo" to="/#">
          <p>Y2K</p>
        </Link>
      </span>
      <div className="nav-menuTheme">
        <div ref={navRef} className="nav-menu">
          {data.map((data) => {
            return (
              <Link
                className="nav-menu-link btn"
                key={data.id}
                onClick={showNavBar}
                to={data.link}
              >
                {data.name}
              </Link>
            );
          })}
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavBar}
            aria-label="Bouton fermeture menu hamburger"
          >
            <ImCross />
          </button>
        </div>
      </div>
      <button
        className="nav-btn"
        onClick={showNavBar}
        aria-label="Bouton ouverture menu hamburger"
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}

export default NavBar;
