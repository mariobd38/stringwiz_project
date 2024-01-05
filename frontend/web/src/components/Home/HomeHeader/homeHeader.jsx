import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";

import Button from 'react-bootstrap/Button';

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { styled } from '@mui/material/styles';

import './homeHeader.css';


const getStoredColorMode = () => {
    const storedMode = localStorage.getItem('colorMode');
    return storedMode !== null ? storedMode : 'light'; // Set a default mode if none is stored
};

const HomeHeader = () => {
    const dayjs = require('dayjs');

    const [userFullName] = useLocalState("", "userFullName");


    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});
    const todays_date = dayOfWeek + ", " + month + " " + date.getDate();

    let hour = now.hour();
    let minute = now.minute();
    let greeting = "Good ";
    const firstName = userFullName.split(' ')[0];

    let timeEmoji = "";
    switch(true) {
        case (hour < 6):
            greeting += "night";
            timeEmoji = "😴";
            break;
        case (hour >= 18 && (hour <= 23 && minute <= 59)):
            greeting += "evening";
            timeEmoji = "🌙";
            break;
        case (hour >= 12):
            greeting += "afternoon";
            timeEmoji = "☀️";
            break;  
        default:
            greeting += "morning";
            timeEmoji = "🌅";
            break;
    }

    const [backgroundColor, setBackgroundColor] = useLocalState("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useLocalState(null, "backgroundImage");

    const HandleBackgroundColor = (event, colorValue) => {
        console.log("hey hey");
        console.log(currentColorMode);
        setBackgroundColor(colorValue);
        if (currentColorMode === 'dark')
            setBackgroundImage(`linear-gradient(to right, #1e1f21, ${colorValue})`);
        else if (currentColorMode === 'light')
            setBackgroundImage(`linear-gradient(to right, ${colorValue}, ${colorValue})`);

        // setBackgroundImage(`linear-gradient(to right, #1e1f21, ${colorValue})`);
    }
    const theme = useTheme();
    const [currentColorMode, setCurrentColorMode] = useState(getStoredColorMode());//useState(theme.palette.mode);
    const handleSwitchChange = (event) => {
        const newColorMode = currentColorMode === 'light' ? 'dark' : 'light';
        setCurrentColorMode(newColorMode);
        localStorage.setItem('colorMode', newColorMode); // Store the new mode in localStorage
  
        // setCurrentColorMode(event.target.checked ? 'dark' : 'light');
    };

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            transition: "5s ease-in-out",

            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#081d3a',

                transition: "5s ease-in-out",
            },
          },
          transition: '5s ease-out',
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: currentColorMode === 'light' ? '#f1c045' : '#121212',
            width: 32,
            height: 32,
            
            '&::before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#e7e7e7',
            borderRadius: 10,

        },
    }));


    useEffect((colorValue) => {
        const storedMode = getStoredColorMode();
    setCurrentColorMode(storedMode);
        
        if (currentColorMode === 'dark')
            setBackgroundImage(`linear-gradient(to right, #1e1f21, ${backgroundColor})`);

        else if (currentColorMode === 'light')
            setBackgroundImage(`linear-gradient(to right, ${backgroundColor}, ${backgroundColor})`);

        console.log(backgroundColor);
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.backgroundImage = backgroundImage;
        
        const homeHeaderText = document.querySelectorAll('.home-header-text');
        const textColor = backgroundColor === '#e7e7e7' ? '#000000' : '#ffffff';

        homeHeaderText.forEach(element => {
            element.style.color = textColor;
        });
    }, [backgroundColor, backgroundImage, setBackgroundColor, setBackgroundImage, currentColorMode]);



    const [drawerState, setDrawerState] = useState(false);


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawerState({ ...drawerState, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
          sx={{ width: "25rem", height: '100%', backgroundColor: '#232323' }}
          role="presentation"
          className='pt-4'
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='ms-3'>
                <div className='d-flex'>
                    <div className='customize-customization-text me-5'>Customization</div>
                    <div className='m-auto fafafa-color '>
                        <Tooltip title={<span className='nunito-sans-font'>{[`Exit customization panel`]}</span>} arrow className='menu-tooltip'>
                            <ExitToAppIcon className='ms-5'onClick={toggleDrawer(anchor, false)} sx={{cursor: "pointer"}}/>                
                        </Tooltip>
                    </div>
                </div>
                <div className='customize-background-text mt-3'>Background</div>
                <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#566566")} className='me-2 theme-color-div mt-3' id="abestos-theme-btn"></div>
                    </div>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#086E5A")} className='mx-2 theme-color-div mt-3' id="turquoise-theme-btn"></div>
                    </div>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#14964a")} className='mx-2 theme-color-div mt-3' id="emerald-theme-btn"></div>
                    </div>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#1A3C7F")} className='mx-2 theme-color-div mt-3' id="peter-river-theme-btn"></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#74005D")} className='me-2 theme-color-div mt-3' id="amethyst-theme-btn"></div>
                    </div>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#b89413")} className='mx-2 theme-color-div mt-3' id="sunflower-theme-btn"></div>
                    </div>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#ad580c")} className='mx-2 theme-color-div mt-3' id="carrot-theme-btn"></div>
                    </div>
                    <div className='col-3'>
                        <div onClick={(e) =>HandleBackgroundColor(e, "#a3291c")} className='mx-2 theme-color-div mt-3' id="alizarin-theme-btn"></div>
                    </div>
                </div>
            </div>

                <FormGroup className='mt-4 '>
                    <FormControlLabel
                        control={
                            <MaterialUISwitch
                                defaultChecked={currentColorMode === 'dark'}
                                onChange={handleSwitchChange}
                            />
                        }
                        label={
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: 'Nunito Sans, sans-serif',
                                color: '#fafafa',
                              }}
                              className='ps-2'
                            >
                              {currentColorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                            </Typography>
                          }
                        className='customization-day-night-theme-switch'
                    />
                </FormGroup>


            </div>

            <List>
                <ListItem disablePadding sx={{color: "#fafafa"}}>
                    <ListItemButton>
                    <ListItemText  />
                    </ListItemButton>
                </ListItem>

                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{color: "#fafafa"}}>
                    <ListItemButton>
                    <ListItemIcon sx={{color: "#fafafa"}}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );


    return (
        <>
            <div className='pt-5 d-none d-sm-block parentt'>
                <div className='d-flex justify-content-between mb-4'>
                    <div className='home-header-text home-text'>
                        <HomeIcon className='me-1 mb-1' style={{width: "2rem",height: "2rem"}}/>
                        <div className='d-inline'>Home</div>
                    </div>          

                    <div>
                        <Button className='customize-bg' onClick={toggleDrawer('right', true)} /*onClick={(event) => handleCustomizePopoverClick(event, )}*/ >
                            <DashboardCustomizeIcon></DashboardCustomizeIcon><span className='ps-1 lato-font'>Customize</span>
                        </Button>
                        <React.Fragment>
                            <SwipeableDrawer
                                anchor={'right'}
                                open={drawerState['right']}
                                onClose={toggleDrawer('right', false)}
                                onOpen={toggleDrawer('right', true)}
                            >
                                {list('right')}
                            </SwipeableDrawer>
                        </React.Fragment>
                    </div>
                    
                </div>

                <div className='pt-3 pt-sm-3 home-header-text text-center'>
                    <h2 className=' today'>{todays_date}</h2>
                    <h2 className=' greeting pt-1'>{greeting}, <span>{firstName}</span> {timeEmoji}</h2> 
                </div>
                <hr className='home-header-text'/>
            </div> 
        </>
    )
}

export default HomeHeader;