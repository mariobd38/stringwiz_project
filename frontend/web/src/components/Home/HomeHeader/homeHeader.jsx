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
            <div className='pt-4'>
                <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
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

                    {/* <div className='pt-5 pt-sm-0'>
                        <button className='header-task-time-filter'>
                            Last 30 days
                            <span className="model-dropdown-arrow-icon" style={{color: "#1e1f21"}}> <KeyboardArrowDownRoundedIcon /> </span>

                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default HomeHeader;