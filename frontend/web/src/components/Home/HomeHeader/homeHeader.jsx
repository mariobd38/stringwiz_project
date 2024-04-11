import React, { useEffect } from 'react';
import { useCookies } from "../../../utils/useCookies";

import './homeHeader.css';

const HomeHeader = () => {
    const dayjs = require('dayjs');

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});

    const [backgroundColor, setBackgroundColor] = useCookies("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useCookies(null, "backgroundImage");

    const [currentColorMode, setCurrentColorMode] = useCookies("dark", "colorMode");

    useEffect(() => {
        const storedMode = currentColorMode;
        setCurrentColorMode(storedMode);
        
        if (currentColorMode === 'dark')
            setBackgroundImage(`linear-gradient(to right, #1e1f21, ${backgroundColor})`);

        else if (currentColorMode === 'light')
            setBackgroundImage(`linear-gradient(to right, ${backgroundColor}, ${backgroundColor})`);

            document.body.style.backgroundColor = backgroundColor;
            document.body.style.backgroundImage = backgroundImage;
        
        
        const homeHeaderText = document.querySelectorAll('.home-header-text');
        const textColor = backgroundColor === '#fafafa' ? '#4B26CE' : '#ffffff';

        homeHeaderText.forEach(element => {
            element.style.color = textColor;
        });
    }, [backgroundColor, backgroundImage, setBackgroundColor, setBackgroundImage, currentColorMode, setCurrentColorMode]);

    return (
        <>
            <div className='pt-5'>
                {/* <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-2 home-header-block'>
                    <div className='fafafa-color greeting mb-3 mb-md-0'>
                        {greeting}, {firstName}
                    </div>
                    <div className='d-flex align-items-center gap-4'>
                        <div className='header-day-number'>
                            {date.getDate()}
                        </div>
                        <div className='header-day-block'>
                            <div>  
                                {dayOfWeek}
                            </div>
                            <div>  
                                {month},<span className='ms-1'>{date.getFullYear()}</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='fafafa-color lato-font-600' style={{fontSize: "1.2rem"}}>
                        {dayOfWeek}, {month} {date.getDate()}, {date.getFullYear()}
                    </div>

                    <div className=''>
                        <button className='home-header-invite-button d-flex align-items-center'>
                            <span className='mb-2'>
                                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="8" r="4" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3267 15.0759C12.8886 15.0255 12.4452 15 12 15C10.0805 15 8.19383 15.4738 6.63113 16.3732C5.06902 17.2721 3.88124 18.5702 3.33091 20.1106C3.1451 20.6307 3.41608 21.203 3.93617 21.3888C4.45626 21.5746 5.02851 21.3036 5.21432 20.7835C5.57558 19.7723 6.39653 18.8157 7.62872 18.1066C8.64272 17.523 9.86375 17.1503 11.158 17.0368C11.4889 16.0601 12.3091 15.3092 13.3267 15.0759Z" fill="#33363F"/>
                                    <path d="M18 14L18 22" stroke="#33363F" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M22 18L14 18" stroke="#33363F" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>

                            </span>
                            <span className='ps-2'>Invite</span>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HomeHeader;