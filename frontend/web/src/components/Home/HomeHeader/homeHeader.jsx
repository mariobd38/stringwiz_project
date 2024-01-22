import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import { useCookies } from "../../../utils/useCookies";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Box from '@mui/material/Box';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

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
    
    //color background
    const abestosBg = "#384748";
    const turquoiseBg = "#005A46";
    const emeraldBg = "#00782C";
    const peterRiverBg = "#16244A";
    const amethystBg = "#4A174D";
    const sunflowerBg = "#B89413";
    const carrotBg = "#AD580C";
    const alizarinBg = "#59211A";

    const [backgroundColor, setBackgroundColor] = useCookies("#1e1f21", "backgroundColor");
    const [backgroundImage, setBackgroundImage] = useCookies(null, "backgroundImage");

    const HandleBackgroundColor = (event, colorValue) => {
        if (colorValue === backgroundColor) {
            if (currentColorMode === "dark")
                setBackgroundColor("#1e1f21");
            else 
                setBackgroundColor("#fafafa");
            return;
        } 
        setBackgroundColor(colorValue);
        if (currentColorMode === 'dark')
            setBackgroundImage(`linear-gradient(to right, #1e1f21, ${colorValue})`);
        else if (currentColorMode === 'light')
            setBackgroundImage(`linear-gradient(to right, ${colorValue}, ${colorValue})`);

    }
    const [currentColorMode, setCurrentColorMode] = useCookies("dark", "colorMode");
    const handleSwitchChange = (event) => {
        const newColorMode = currentColorMode === 'light' ? 'dark' : 'light';
        setCurrentColorMode(newColorMode);
        setCurrentColorMode(newColorMode);
       
        if (backgroundColor === "#fafafa" && newColorMode === "dark") {
            setBackgroundColor("#1e1f21");
        } else if (backgroundColor === "#1e1f21" && newColorMode === "light") {
            setBackgroundColor("#fafafa");

        }
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
        >
            <div className='ms-3'>
                <div className='d-flex'>
                    <div className='customize-customization-text me-5'>
                        Customization
                    </div>
                    <div className='m-auto fafafa-color '>
                        <Tooltip title={<span className='nunito-sans-font'>{[`Exit customization panel`]}</span>} arrow className='menu-tooltip'>
                            <ExitToAppIcon className='ms-5'onClick={toggleDrawer(anchor, false)} sx={{cursor: "pointer"}}/>                
                        </Tooltip>
                    </div>
                </div>
                <div className='customize-background-text mt-3'>
                    Background
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${abestosBg}`)} className='me-2 theme-color-div mt-3' id="abestos-theme-btn">
                                {backgroundColor === `${abestosBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${turquoiseBg}`)} className='mx-2 theme-color-div mt-3' id="turquoise-theme-btn">
                                {backgroundColor === `${turquoiseBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${emeraldBg}`)} className='mx-2 theme-color-div mt-3' id="emerald-theme-btn">
                                {backgroundColor === `${emeraldBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${peterRiverBg}`)} className='mx-2 theme-color-div mt-3' id="peter-river-theme-btn">
                                {backgroundColor === `${peterRiverBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${amethystBg}`)} className='me-2 theme-color-div mt-3' id="amethyst-theme-btn">
                                {backgroundColor === `${amethystBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${sunflowerBg}`)} className='mx-2 theme-color-div mt-3' id="sunflower-theme-btn">
                                {backgroundColor === `${sunflowerBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${carrotBg}`)} className='mx-2 theme-color-div mt-3' id="carrot-theme-btn">
                                {backgroundColor === `${carrotBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                        <div className='col-3'>
                            <div onClick={(e) =>HandleBackgroundColor(e, `${alizarinBg}`)} className='mx-2 theme-color-div mt-3' id="alizarin-theme-btn">
                                {backgroundColor === `${alizarinBg}` && <div className='theme-color-div-inner'>
                                    <CheckRoundedIcon />
                                </div> }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FormGroup className='mt-4'>
                        <div className='d-flex align-items-center'>
                            <MaterialUISwitch
                                className='customization-day-night-theme-switch'
                                defaultChecked={currentColorMode === 'dark'}
                                onChange={handleSwitchChange}
                            />
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
                        </div>
                    </FormGroup>
                </div> 
            </div>

            <List>
                <ListItem disablePadding sx={{color: "#fafafa"}}>
                    <ListItemButton>
                    <ListItemText  />
                    </ListItemButton>
                </ListItem>

                {['Inbox'].map((text, index) => (
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
            <div className='d-flex justify-content-center justify-content-xl-around align-items-center m-auto greeting-block mt-4 pt-2 pb-3'>
                <div className='ps-0 fafafa-color flex-column text-center'>
                    <div className='greeting py-3 '>
                        {greeting}, { firstName}
                    </div>
                    <div className='today pb-3 m-0'>
                        {todays_date}
                    </div>
                    {/* <div>
                        <Button className={`${backgroundColor === '#fafafa' ? 'dark-customize-btn-bg' : 'customize-btn-bg'}`} onClick={toggleDrawer('right', true)} >
                            
                            
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
                    </div> */}
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