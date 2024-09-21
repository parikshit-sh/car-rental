import '../styles/navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      const isDesktop = window.matchMedia('(min-width: 643px)').matches;
      if (isDesktop) {
        setIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`off__screenMenu ${isActive ? 'active' : ''}`}>
        <ul>
          <Link to="/home" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={closeMenu}>
  <li className="hover:text-[#0069D2] cursor-pointer transition ease-out">About</li>
</Link>
          <Link to="/cars" onClick={closeMenu}>
            <li>Cars</li>
          </Link>
          <li onClick={closeMenu}>Help</li>
          <li onClick={closeMenu}>Download</li>
        </ul>
      </div>

      <nav>
        <div className="logo-m items-center justify-start w-32 hidden">
          <h2 className="font-bold text-2xl">Rentals</h2>
        </div>
        <ul className="nav__link">
          <Link to="/home" onClick={closeMenu}>
            <li className="hover:text-[#0069D2] cursor-pointer transition ease-out"><a href="#hero">Home</a></li>
          </Link>
          
          <Link to="/about" onClick={closeMenu}>
  <li className="hover:text-[#0069D2] cursor-pointer transition ease-out">About</li>
</Link>

          <Link to="/cars" onClick={closeMenu}>
            <li className="hover:text-[#0069D2] cursor-pointer transition ease-out">Cars</li>
          </Link>
          <li className="hover:text-[#0069D2] cursor-pointer transition ease-out" onClick={closeMenu}>Help</li>
          <li>
            <a href="#" className="btn hover:bg-blue-700 ransition-all duration-200" onClick={closeMenu}>Download</a>
          </li>
        </ul>
        <div className={`ham__menu ${isActive ? 'active' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
