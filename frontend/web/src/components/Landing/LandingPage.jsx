import React, {useEffect, useState} from 'react';
import MainContent from './MainContent/MainContent'
import FooterContent from './FooterContent/FooterContent';

import './LandingPage.css'

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     // Hide the initial loader
    //     const initialLoader = document.getElementById('initial-loader');
    //     if (initialLoader) {
    //         initialLoader.classList.add('hidden');
    //     }

    //     // Simulate data loading
    //     const loadData = async () => {
    //         // Replace this with your actual data fetching logic
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //         setIsLoading(false);
    //     };

    //     loadData();
    // }, []);

    // if (isLoading) {
    //     return (
    //         <div className="loading-spinner">
    //             <p>Loading content...</p>
    //         </div>
    //     );
    // }
    return (
        <>
            <MainContent />
            <FooterContent />
        </>
    );
};

export default LandingPage;