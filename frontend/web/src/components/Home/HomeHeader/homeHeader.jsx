import React, { useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import { useCookies } from "../../../utils/useCookies";

import './homeHeader.css';

import scheduling from '../../../images/scheduling.png';
import task_management from '../../../images/task_management.png';

const HomeHeader = () => {
    const dayjs = require('dayjs');
    const [userFullName] = useLocalState("", "userFullName");

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});
    const todays_date = dayOfWeek + ", " + month + " " + date.getDate() + ', ' + date.getFullYear();

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
            <div className='d-flex justify-content-center justify-content-xl-around align-items-center m-auto greeting-block mt-4 pt-2 pb-3'>
                <div className='ps-0 fafafa-color flex-column text-center'>
                    <div className='greeting py-3 '>
                        {greeting}, <span style={{textTransform: "capitalize"}}>{ firstName}</span>
                    </div>
                    <div className='today pb-3 m-0'>
                        {todays_date}
                    </div>
                </div>
                <div className='text-center d-none d-xl-inline'>
                        <img src={scheduling} className="illustration-home-page-header pt-5 me-0 me-lg-4" alt="" />
                        <img src={task_management} className="illustration-home-page-header pb-3" alt="" />
                </div>
            </div>
        </>
    )
}

export default HomeHeader;