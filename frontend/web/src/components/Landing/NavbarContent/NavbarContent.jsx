import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import Container from 'react-bootstrap/Container';
import './NavbarContent.css';
import CocollabLogo from '../../Logo/logo';


function NavbarContent () {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    let navigate = useNavigate(); 
    const routeChange = (path) =>{ 
        navigate(path);
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
        <nav className="navbar navbar-expand-lg sticky-top landing-navbar">
            <Container fluid>
                <CocollabLogo width={2.1} paddingBottom={0.4} fontSize={2.6} textColor={'fafafa'}></CocollabLogo>
                    <button
                    className="navbar-toggler shadow-none border-0"
                    type="button"
                    onClick={toggleOffcanvas}
                    aria-label="Toggle navigation"
                    >
                        <MenuRoundedIcon className='fafafa-color' style={{width: "2.2rem", height: "2.2rem"}}/>
                    </button>

                <div
                    className={`landing-sidebar w-100 offcanvas offcanvas-end ${
                    isOffcanvasOpen ? 'show offCanvasOpen' : ''
                    }`}
                    tabIndex="-1"
                >
                    <div className="offcanvas-content" >
                        <div className="offcanvas-header border-bottom">
                            <div className='d-flex justify-content-center'>
                                <CocollabLogo width={2.1} paddingBottom={0.4} fontSize={2.6} href={'/'} textColor={'fafafa'}></CocollabLogo>
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
                                    <a className='landing-nav-top-link' href={() => false}>
                                        Features
                                    </a>
                                </li>
                                <li className="nav-header-item mx-3 my-4 my-lg-0">
                                    <a className='landing-nav-top-link' href={() => false}>
                                        Teams
                                    </a>
                                </li>
                                <li className="nav-header-item mx-3 my-4 my-lg-0" >
                                    <a className='landing-nav-top-link' href={() => false}>
                                        Resources
                                    </a>
                                </li>
                                <li className="nav-header-item mx-3 my-4 my-lg-0">
                                    <a className='landing-nav-top-link' href={() => false}>
                                        Enterprise
                                    </a>
                                </li>
                                <li className="nav-header-item ms-lg-3 my-4 my-lg-0">
                                    <a className='landing-nav-top-link' href={() => false}>
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex flex-column flex-lg-row mt-4 my-lg-0 justify-content-center align-items-center gap-2">
                                <a onClick={() => routeChange('/login')} className='lato-font landing-login-link pe-3 px-1 py-1' style={{cursor: "pointer"}}>
                                    Sign In
                                </a>
                                <a onClick={() => routeChange('/signup')}>
                                    <Button className="landing-register-link fafafa-color px-3 py-1 lato-font">
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
}

export default NavbarContent;