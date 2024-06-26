import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

import Container from 'react-bootstrap/Container';
import './NavbarContent.css';
import CocollabLogo from '../../Logo/logo';


function NavbarContent () {
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

    const closeOffcanvasIfLargeScreen = (() => {
        const screenWidth = window.innerWidth;
        const isLargeScreen = screenWidth > 992; // lg breakpoint is typically 992px in Bootstrap

        if (isLargeScreen && isOffcanvasOpen) {
            setIsOffcanvasOpen(false);
        }
    }, []);

    // Listen to window resize events to check screen width
    useCallback(() => {
        window.addEventListener('resize', closeOffcanvasIfLargeScreen);
        return () => {
        window.removeEventListener('resize', closeOffcanvasIfLargeScreen);
        };
    }, []);
  
    return (
        <nav className="navbar navbar-expand-lg sticky-top home-page-navbar" style={{ height: "6.2rem" }}>
            <Container fluid>
                <CocollabLogo width={2.1} paddingBottom={0.4} fontSize={2.6} href={'/'}></CocollabLogo>
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
                    <div className="offcanvas-content" >
                        <div className="offcanvas-header border-bottom">
                            <div className='d-flex justify-content-center'>
                                <CocollabLogo width={2.1} paddingBottom={0.4} fontSize={2.6} href={'/'}></CocollabLogo>
                            </div>
                            <Button
                                type="button"
                                className="btn-close shadow-none"
                                onClick={toggleOffcanvas}
                                aria-label="Close"
                                >
                            </Button>                  
                        </div>
                        
                        <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                                <li className="nav-header-item mx-3 my-4 my-lg-0">
                                    <a className='nav-top-link underline' href={() => false}>
                                        Features
                                    </a>
                                </li>
                                <li className="nav-header-item mx-3 my-4 my-lg-0">
                                    <a className='nav-top-link' href={() => false}>
                                        Teams
                                    </a>
                                </li>
                                <li className="nav-header-item mx-3 my-4 my-lg-0" >
                                    <a className='nav-top-link' href={() => false}>
                                        Resources
                                    </a>
                                </li>
                                <li className="nav-header-item mx-3 my-4 my-lg-0">
                                    <a className='nav-top-link' href={() => false}>
                                        Enterprise
                                    </a>
                                </li>
                                <li className="nav-header-item ms-lg-3 my-4 my-lg-0">
                                    <a className='nav-top-link' href={() => false}>
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex flex-column flex-lg-row mt-4 my-lg-0 justify-content-center align-items-center gap-3">
                                <a href="/login" onClick={routeChangeToLogin} className='lato-font login pe-3 px-1 py-1'>
                                    Sign In
                                </a>
                                <a href="/signup" >
                                    <Button className="nav-button register fafafa-color px-3 py-1 lato-font">
                                        Get Started
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavbarContent;