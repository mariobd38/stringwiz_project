import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import './Navbar.css';
import cocollabs_logo from '../../images/cocollabs_logo.png';


function Navbar () {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  const routeChangeToLogin = () =>{ 
    routeChange("/login");
  }

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvasIfLargeScreen = () => {
    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth > 992; // lg breakpoint is typically 992px in Bootstrap

    if (isLargeScreen && isOffcanvasOpen) {
      setIsOffcanvasOpen(false);
    }
  };

  // Listen to window resize events to check screen width
  useEffect(() => {
    window.addEventListener('resize', closeOffcanvasIfLargeScreen);
    return () => {
      window.removeEventListener('resize', closeOffcanvasIfLargeScreen);
    };
  }, [isOffcanvasOpen]);
  
    return (
        <nav className="navbar navbar-expand-lg sticky-top home-page-navbar" style={{ height: "6.2rem" }}>
            <Container fluid>

            <div className="img-fluid">
              <a className="navbar-brand m-auto fs-4" href="/">
                <img
                  src={cocollabs_logo}
                  className="img-fluid-custom"
                  alt="Cocollabs"
                />
              </a>
            </div>

            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              onClick={toggleOffcanvas}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`sidebar w-100 offcanvas offcanvas-end ${
                isOffcanvasOpen ? 'show offCanvasOpen' : ''
              }`}
              tabIndex="-1"
            >
              {/* Offcanvas content */}
              <div className="offcanvas-content" >
                <div className="offcanvas-header border-bottom">
                  <div className="img-fluid">
                    <a className="navbar-brand m-auto fs-4" href="/">
                      <img
                        src={cocollabs_logo}
                        className="img-fluid-custom"
                        alt="String"
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-close shadow-none"
                    onClick={toggleOffcanvas}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                  <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                    <li className="nav-header-item mx-3">
                      <a className='nav-top-link' href={() => false}>
                        Features
                      </a>
                    </li>
                    <li className="nav-header-item mx-3">
                      <a className='nav-top-link' href={() => false}>
                        Teams
                      </a>
                    </li>
                    <li className="nav-header-item mx-3" >
                      <a className='nav-top-link' href={() => false}>
                        Resources
                      </a>
                    </li>
                    <li className="nav-header-item mx-3">
                      <a className='nav-top-link' href={() => false}>
                        Enterprise
                      </a>
                    </li>
                    <li className="nav-header-item ms-lg-2">
                      <a className='nav-top-link' href={() => false}>
                        Pricing
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <a href="/login" onClick={routeChangeToLogin} className='lato-font login pe-3 px-1 py-1'>
                      Sign In
                    </a>
                    <a href="/signup" >
                      <button className="btn nav-button register fafafa-color px-3 py-1 rounded-4 lato-font">
                        Get Started
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </Container>
    </nav>
  );
};

export default Navbar;