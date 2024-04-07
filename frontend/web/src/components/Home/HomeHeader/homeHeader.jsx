import React, { useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import { useCookies } from "../../../utils/useCookies";

import './homeHeader.css';

const HomeHeader = () => {
    const dayjs = require('dayjs');
    const [userFullName] = useLocalState("", "userFullName");

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});

    const [backgroundColor, setBackgroundColor] = useCookies("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useCookies(null, "backgroundImage");

    let hour = now.hour();
    let minute = now.minute();
    let greeting = "Good";
    const firstName = userFullName.split(' ')[0];

    switch(true) {
        case (hour < 6):
            greeting += "night";
            break;
        case (hour >= 18 && (hour <= 23 && minute <= 59)):
            greeting += " evening";
            break;
        case (hour >= 12):
            greeting += " afternoon";
            break;  
        default:
            greeting += " morning";
            break;
    }


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
            <div className='pt-4'>
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-2 home-header-block'>
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
                </div>
            </div>
        </>
    )
}

export default HomeHeader;