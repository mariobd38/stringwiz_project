import React, { useEffect } from 'react';

import { IconUserPlus,IconLayoutSidebar,IconHome } from '@tabler/icons-react';
import { useLocalState } from "../../../utils/useLocalStorage";

import {
    Text
  } from '@mantine/core';

import './homeHeader.css';

const HomeHeader = (props) => {
    const {openSidebarToggle, setOpenSidebarToggle} = props;
    const dayjs = require('dayjs');

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});

    const [backgroundColor, setBackgroundColor] = useLocalState("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useLocalState(null, "backgroundImage");

    const [currentColorMode, setCurrentColorMode] = useLocalState("dark", "colorMode");

    const handleOpenSidebarToggle = () => {
        setOpenSidebarToggle(!openSidebarToggle);
        if (openSidebarToggle) {
            document.body.classList.remove('active');
        } else {
            document.body.classList.add('active');
        }
    }

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
            <div>
                <div className='d-flex align-items-center'>
                    <IconLayoutSidebar className='me-3 home-header-sidebar-icon' onClick={handleOpenSidebarToggle}/>
                    <span className='fafafa-color lato-font d-flex ' style={{fontWeight: "600",fontSize: "17px"}}>
                        <IconHome className='me-2'/>
                        <span>Home</span>
                    </span>
                </div>
                <div className='d-flex align-items-center justify-content-between pt-3'>

                    <div className='fafafa-color lato-font-600' style={{fontSize: "1.2rem"}}>
                        {/* <IconLayoutSidebar className='me-2' /> */}
                        <span>{dayOfWeek}, {month} {date.getDate()}, {date.getFullYear()}</span>
                        
                    </div>

                    <div className=''>
                        <button className='home-header-invite-button d-flex align-items-center'>
                            <span className='mb-2'>
                                <IconUserPlus />
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