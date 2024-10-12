import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.matchMedia("(min-width: 643px)").matches;
      if (isDesktop) {
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`off__screenMenu ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-[#007bff] cursor-pointer transition ease-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/cars" onClick={closeMenu}>
              Cars
            </Link>
          </li>
          <li
            onClick={closeMenu}
            className="hover:text-[#007bff] cursor-pointer transition ease-out"
          >
            Contact
          </li>
          <li>
            <a
              href="#"
              className="btn rounded-lg hover:bg-blue-700 transition-all duration-200"
              onClick={closeMenu}
            >
              Download
            </a>
          </li>
        </ul>
      </div>

      <nav>
        <div className="logo-m items-center justify-start w-32 hidden">
          <h2 className="font-bold text-2xl">Rentals</h2>
        </div>
        <ul className="nav__link">
          <li>
            <Link
              to="/home"
              onClick={closeMenu}
              className="hover:text-[#007bff] cursor-pointer transition ease-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-[#007bff] cursor-pointer transition ease-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cars"
              onClick={closeMenu}
              className="hover:text-[#007bff] cursor-pointer transition ease-out"
            >
              Cars
            </Link>
          </li>
          <li
            className="hover:text-[#007bff] cursor-pointer transition ease-out"
            onClick={closeMenu}
          >
            Contact
          </li>
          <li>
            <a
              href="#"
              className="btn rounded-lg hover:bg-blue-700 transition-all duration-200"
              onClick={closeMenu}
            >
              Download
            </a>
          </li>
        </ul>

        <div
          className={`ham__menu ${isActive ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
