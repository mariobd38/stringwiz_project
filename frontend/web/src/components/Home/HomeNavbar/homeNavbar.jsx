import React, { useEffect, useState } from 'react';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import { Input, InputAdornment } from '@mui/material';
import { IconSearch,IconCommand,IconApps } from '@tabler/icons-react';

import {
    Tooltip,
    Button,
    Divider,
} from '@mantine/core';
import Logo2 from '../../Logo/logo2';

import HomeNavbarUserMenu from './homeNavbarUserMenu';

import './homeNavbar.css';

const HomeNavbar = (props) => {
    const { userFullName, userEmail,userProfilePicture,userProfileDto } = props;

    const [firstName, lastName] = userFullName.split(' ');

    //user button
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // const [userEmail] = useLocalState('', 'userEmail');
    const initials = (firstName[0] + lastName[0]).toUpperCase();

    const closeOffcanvasIfLargeScreen = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 700) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
    
    useEffect(() => {
        closeOffcanvasIfLargeScreen();
        window.addEventListener('resize', closeOffcanvasIfLargeScreen);
    
        return () => {
            window.removeEventListener('resize', closeOffcanvasIfLargeScreen);
        };
    }, [setIsSmallScreen]);

    return (
        <div>
            <nav className="navbar w-100" style={{position: "fixed",zIndex: "11", height: "4.5rem", backgroundColor: "#222222" }}>
                <div className='container-fluid' >
                    <div className="row w-100 m-0 mx-2">
                        <div className='col-0 col-lg-3 d-flex align-items-center p-0 '>
                            <div className='d-none d-lg-inline'>
                                <div style={{width: "11.5rem"}}>
                                    <Logo2 strokeColor='#fafafa'/>
                                </div>
                            </div>
                        </div>

                        <div className='col-10 col-sm-6 col-md-8 col-lg-5 d-flex justify-content-start align-items-center'>
                                <div className='pe-5 pe-lg-3'>
                                    {isSmallScreen ? 
                                            <div className='me-2 m-auto home-navbar-search-ss'><IconSearch color='#fafafa' style={{padding: "2px"}}  /></div>
                                            : 
                                            <form className="home-navbar-search" role="search">
                                                <Input
                                                    className="form-control home-navbar-search-input me-2"
                                                    type="search"
                                                    placeholder="Search"
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <IconSearch width={18.5} color='#e1e1e1' />
                                                        </InputAdornment>
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <div className='d-flex' style={{background: "#27282a", borderRadius: "5px", padding: "2px 9px"}}>

                                                                <div className='d-flex align-items-center' style={{paddingBottom: "1px"}}><IconCommand width={17.1} color='#e1e1e1' /></div>
                                                                <div className='m-auto' style={{color: '#e1e1e1', fontFamily:"Nunito Sans", fontWeight: "600", fontSize: "1rem"}}>K</div>
                                                                </div>
                                                        </InputAdornment>
                                                    }
                                                    aria-label="Search"
                                                />
                                            </form>
                                    }
                                </div>
                        </div>

                        <div className='text-white col-2 col-sm-6 col-md-4 col-lg-4 d-flex align-items-center justify-content-end'>
                            <div className='d-flex align-items-center'>
                                <div className=''>
                                    <div data-tooltip-id="my-tooltip" className='m-auto' data-tooltip-content={`Create items`}>
                                        <Tooltip
                                        label="Create items"
                                        position="bottom"
                                        offset={8}
                                        withArrow
                                        openDelay={700}
                                        className='fafafa-color lato-font custom-tooltip' // Add custom class here
                                        style={{ backgroundColor: "#338b6f", borderRadius: "20px" }}
                                        >
                                            <Button className='create-home-navbar-button' >
                                                <AddCircleRoundedIcon className='me-1 add-icon-create-home-navbar' />Create
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>
                                {/* <div className='home-navbar-divider me-3'>
                                </div> */}
                                <Divider size="xs" orientation="vertical" ms={13} me={8} m='auto' h={35} bd='.1px solid #676869'/>
                                <div className='m-auto me-4 user-home-navbar-icon-apps'>
                                    <IconApps width={30} height={30}/>

                                </div>

                                <HomeNavbarUserMenu 
                                    userProfileDto={userProfileDto}
                                    userProfilePicture={userProfilePicture}
                                    userFullName={userFullName}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HomeNavbar;