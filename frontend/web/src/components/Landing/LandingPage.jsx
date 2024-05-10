import React from 'react';
import NavbarContent from './NavbarContent/NavbarContent'
import MainContent from './MainContent/MainContent'
import FooterContent from './FooterContent/FooterContent';

import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
            {/* <NavbarContent /> */}
            <MainContent />
            <FooterContent />
        </>
    );
};

export default LandingPage;