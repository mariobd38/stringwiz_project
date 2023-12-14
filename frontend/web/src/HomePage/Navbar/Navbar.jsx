import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import cocollabs_logo from '../../images/cocollabs_logo.png';
import Container from 'react-bootstrap/Container';
import './Navbar.css';


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
    return (
        <nav className="navbar navbar-expand-lg cocollabs-navy sticky-top">
            <Container fluid>

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
              className="navbar-toggler shadow-none border-0"
              type="button"
              onClick={toggleOffcanvas}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`sidebar w-100 offcanvas offcanvas-end ${
                isOffcanvasOpen ? 'show' : ''
              }`}
              tabIndex="-1"
            >
              {/* Offcanvas content */}
              <div className="offcanvas-content">
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
                    <li className="nav-header-item mx-2">
                      <a className="nav-link disabled text text-white" href="/">
                        Features
                      </a>
                    </li>
                    <li className="nav-header-item mx-2">
                      <a className="nav-link disabled text-white" href="/">
                        Teams
                      </a>
                    </li>
                    <li className="nav-header-item mx-2">
                      <a className="nav-link disabled text-white" href="/">
                        Resources
                      </a>
                    </li>
                    <li className="nav-header-item mx-2">
                      <a className="nav-link disabled text-white" href="/">
                        Enterprise
                      </a>
                    </li>
                    <li className="nav-header-item mx-2">
                      <a className="nav-link disabled text-white" href="/">
                        Pricing
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <button className="btn nav-button login px-1 py-1" onClick={routeChangeToLogin}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                        href="/login" 
                      >
                        <path
                          d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        ></path>
                      </svg>
                    </button>
                    <a href="/signup">
                      <button className="btn nav-button register text-white px-3 py-1 rounded-4">
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