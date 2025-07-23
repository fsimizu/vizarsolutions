import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { scrollTo } from "../../utils/functions";
import './navbar.css';

export function Navbar() {

  const handleScroll = (id) => {
    setTimeout(() => { scrollTo(id) }, 200);
    handleCloseClick();
  };

  const handleCloseClick = () => {
    document.getElementById("myNav").style.height = "0%";
    setIsOverlayActive(false);
  };

  const handleOpenClick = () => {
    document.getElementById("myNav").style.height = "100%";
    setIsOverlayActive(true);
  };

  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    if (isOverlayActive) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounting
    };
  }, [isOverlayActive]);


  return (
    <div className="navbar__container">

      {/* Overlay */}
      <div id="myNav" className="overlay" >
        <a className="closebtn" onClick={handleCloseClick}>&times;</a>
        <div className="overlay-content">
          <Link to="/">
            <div onClick={() => { handleCloseClick; handleScroll('heroHome') }}>Home</div>
          </Link>
          <Link to="/">
            <div onClick={() => { handleCloseClick; handleScroll('aboutUs') }}>About us</div>
          </Link>
          <Link to="/">
            <div onClick={() => { handleCloseClick; handleScroll('heroHome') }}>Our Services</div>
          </Link>
        </div>
      </div>


      {/* Navbar */}
      <div className="navbar-background"></div>

      <nav>

        <div className="container-fluid align-items-end max-width">

          {/* Navbar Logo */}
          <div className="navbar-brand" onClick={() => { handleScroll('heroHome') }}>
            <Link to="/">
              vizar solutions.
            </Link>
          </div>

          {/* Navbar burger button */}
          <button onClick={handleOpenClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" /*data-bs-target="#navbarNavDropdown"*/ aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>

          {/* Navbar web */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" id="nav_about" onClick={() => { handleScroll('aboutUs') }}>About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" id="nav_about" onClick={() => { handleScroll('aboutUs') }}>Our Services</div>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/">
                  <div className="nav-link" id="nav_about" onClick={() => { handleScroll('root') }}>Our Team</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" id="nav_about" onClick={() => { handleScroll('aboutUs') }}>Contact Us</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}