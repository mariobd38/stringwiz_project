import React, { useEffect } from 'react';

import { Button, Tooltip } from '@mantine/core';
import { IconUserPlus,IconHome,IconCirclePlus,IconFidgetSpinner,IconSettings } from '@tabler/icons-react';
import { useLocalState } from "../../../utils/useLocalStorage";

import './homeHeader.css';

const HomeHeader = () => {
    const dayjs = require('dayjs');

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});

    const [backgroundColor, setBackgroundColor] = useLocalState("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useLocalState(null, "backgroundImage");

    const [currentColorMode, setCurrentColorMode] = useLocalState("dark", "colorMode");
    document.body.style.overflowY = 'hidden';

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

    const homeHeaderButtons = [
        {"icon": <IconCirclePlus color='#05c099' width={23} className='add-icon-create-home-navbar'/>, "label": "Create"},
        {"icon": <IconUserPlus color='#05c099' width={23} className='add-icon-create-home-navbar'/>, "label": "Invite"},
        {"icon": <IconFidgetSpinner color='#05c099' width={23} className='add-icon-create-home-navbar'/>, "label": "Widgets"},
        {"icon": <IconSettings color='#05c099' width={23} className='add-icon-create-home-navbar'/>, "label": "Settings"},
    ]

    return (
        <>
            <div style={{position: "sticky", top: "0px", zIndex: "20"}}>
                <div className='d-flex align-items-center justify-content-between user-home-all-content-left-spacing' style={{position: "sticky",top: "5rem",background: "#1e1f21", borderBottom: "1px solid #323539", zIndex: "2",height: "61.4px", 
                }}>
                    <span className='fafafa-color lato-font d-flex ' style={{fontWeight: "600",fontSize: "17px"}}>
                        <IconHome className='me-2'/>
                        <span>Home</span>
                    </span>
                    <div className='d-flex gap-3 align-items-center'>
                        {homeHeaderButtons.map((button, index) => (
                            <div
                                key={index}
                                >
                                    <Tooltip label={button.label} bd='.1px solid #898989' p='5px 12px' position="bottom" offset={8} openDelay={200} fz='#fafafa' ff='Inter' radius='6' >
                                        <Button radius='8' fw='400' c='#fafafa' p='0px 7px' bg='transparent' bd='1px solid #898989' className='home-header-button'>
                                            {button.icon}
                                        </Button>
                                    </Tooltip>
                            </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between' style={{margin: "28px 0"}}>
                <div className='fafafa-color lato-font-600 user-home-all-content-left-spacing' style={{fontSize: "1.2rem"}}>
                    {/* <IconLayoutSidebar className='me-2' /> */}
                    <span>{dayOfWeek}, {month} {date.getDate()}, {date.getFullYear()}</span>
                </div>
            </div>
                
        </>
    )
}

export default HomeHeader;