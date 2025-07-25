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
      <div id="myNav" className="overlay background_dark" >
        <div className="overlay-content">
            <h3 onClick={() => { handleCloseClick; handleScroll('aboutUs') }}>About us</h3>
            <h3 onClick={() => { handleCloseClick; handleScroll('ourServices') }}>Our Services</h3>
            <h3 onClick={() => { handleCloseClick; handleScroll('contact') }}>Contact</h3>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid align-items-center max-width">

          {/* Navbar Logo */}
          <div className="navbar-brand" onClick={() => { handleScroll('heroHome') }}>
            <Link to="/">
              <h4>vizar solutions.</h4>
            </Link>
          </div>

          {/* Navbar burger button */}
          <button onClick={isOverlayActive ? handleCloseClick : handleOpenClick}
          className="navbar-toggler" type="button" data-bs-toggle="collapse" /*data-bs-target="#navbarNavDropdown"*/ aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar__toggle-icon ${isOverlayActive ? 'navbar__toggle-icon--close' : 'navbar__toggle-icon--burger'}`}></span>
          </button>

          {/* Navbar web */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" onClick={() => { handleScroll('aboutUs') }}>About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" onClick={() => { handleScroll('ourServices') }}>Our Services</div>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/">
                  <div className="nav-link" onClick={() => { handleScroll('ourTeam') }}>Our Team</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <div className="nav-link" onClick={() => { handleScroll('contact') }}>Contact Us</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}