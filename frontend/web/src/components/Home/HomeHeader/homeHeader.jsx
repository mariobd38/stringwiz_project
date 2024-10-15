import React, { useEffect } from 'react';

import { Button, Tooltip, Box,Flex,Text } from '@mantine/core';
import { useLocalState } from "../../../utils/useLocalStorage";
import {Icons} from '../../icons/icons';

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
        {"icon": Icons('IconCirclePlus',23,23,'#05c099'), "label": "Create"},
        {"icon": Icons('IconUserPlus',23,23,'#05c099'), "label": "Invite"},
        {"icon": Icons('IconSparkles',23,23,'#05c099'), "label": "AI Assistant"},
        {"icon": Icons('IconSettings',23,23,'#05c099'), "label": "Settings"},
    ]

    return (
        <>
            <div style={{position: "sticky", top: "1.8px", zIndex: "20"}}>
                <div className='d-flex align-items-center justify-content-between user-home-all-content-left-spacing' style={{position: "sticky",top: "5rem",background: "#1e1f21", borderBottom: "1px solid #323539", zIndex: "2",height: "59.4px", 
                }}>
                    <span className='lato-font d-flex'>
                        <div className='me-2 d-flex'>
                            {Icons('IconHome', 24,24,'#f2f4f7')}
                        </div>
                         {/* <IconHome className='me-2' color='#f2f4f7'/> */}
                        <Text c='#f2f4f7' ff='Lato' fw='600' fz='17'>Home</Text>
                    </span>
                    <div className='d-flex gap-3 align-items-center'>
                        {homeHeaderButtons.map((button, index) => (
                            <div key={index} >
                                <Tooltip label={button.label} className='user-home-tooltip' position="bottom" offset={8} openDelay={200} >
                                    <Button radius='8' fw='400' c='#fafafa' p='0px 7px' bg='transparent' bd='1px solid #898989' className='home-header-button'>
                                        {button.icon}
                                    </Button>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between' style={{margin: "24px 0"}}>
                <div className='user-home-all-content-left-spacing'>
                    <Box>
                        <Flex direction={{ base: 'column' }} gap={5}>
                            <Text ff='Inter' fw='700' fz='18.4' c='#f2f4f7'>Personal Workspace</Text>
                            <Text ff='Inter' fw='400' fz='13.2' c='#c4c0c6'>{dayOfWeek}, {month} {date.getDate()}, {date.getFullYear()}</Text>
                        </Flex>

                    </Box>
                </div>
                
                {/* <div className='fafafa-color lato-font-600 user-home-all-content-left-spacing' style={{fontSize: ".99rem"}}>
                    <span>{dayOfWeek}, {month} {date.getDate()}, {date.getFullYear()}</span>
                </div> */}
                <div>
                    <Button bd='1px solid #048369' radius={8} p='1px 13px' bg='transparent' c='#f2f4f7'>
                        <div className='d-flex align-items-center'>
                            <div style={{marginRight: "7px"}}>
                                {Icons('IconFidgetSpinner',18,18,'#fafafa')}
                            </div>
                            <span>Customize</span>
                        </div>
                    </Button>
                </div>
            </div>
                
        </>
    )
}

export default HomeHeader;