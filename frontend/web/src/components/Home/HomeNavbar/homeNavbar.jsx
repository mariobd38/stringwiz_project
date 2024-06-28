import React, { useEffect, useState } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import Cookies from 'js-cookie';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArchiveIcon from '@mui/icons-material/Archive';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardCommandKeyRoundedIcon from '@mui/icons-material/KeyboardCommandKeyRounded';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';

import { Divider, Input, InputAdornment, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Tooltip } from '@mantine/core';

import CocollabLogo from '../../Logo/logo';

import { userLogout } from '../../../DataManagement/Users/logout';

import './homeNavbar.css';

const HomeNavbar = (props) => {
    const { passedUserInfo } = props;
    // console.log(passedUserInfo.fullName);
    
    // const [userFullName] = useState(passedUserInfo.fullName);
    let [userFullName] = useLocalState("", "userFullName");

    const [firstName, lastName] = userFullName.split(' ');

    //user button
    const [userBtnAnchorEl, setUserBtnAnchorEl] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const openUserBtn = Boolean(userBtnAnchorEl);

    const handleUserBtnClick = (event) => {
        setUserBtnAnchorEl(event.currentTarget);
    };

    const handleUserBtnClose = () => {
        setUserBtnAnchorEl(null);
    };

    // const [userEmail] = useState(passedUserInfo.email);
    const [userEmail] = useLocalState('', 'userEmail');
    const initials = (firstName[0] + lastName[0]).toUpperCase();

    const logout = () => {
        localStorage.clear();
        Cookies.set('isAuthenticated', false);
        userLogout();
    };

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
                        <div className='col-0 col-lg-3'>
                            <div className='d-none d-lg-inline' >
                                <a href={() => false} style={{cursor: "default !important"}}>
                                    <CocollabLogo width={1.6} paddingBottom={0.3} fontSize={2} textColor={"fafafa"}/>
                                </a>
                            </div>
                        </div>

                        <div className='col-10 col-sm-6 col-md-8 col-lg-5 d-flex justify-content-start align-items-center'>
                                <div className='pe-5 pe-lg-3'>
                                    {isSmallScreen ? 
                                            <div className='me-2 m-auto home-navbar-search-ss'><SearchIcon sx={{ color: '#e1e1e1'}} /></div>
                                            : 
                                            <form className="home-navbar-search" role="search">
                                                <Input
                                                    className="form-control home-navbar-search-input me-2"
                                                    type="search"
                                                    placeholder="Search"
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <SearchIcon sx={{ color: '#e1e1e1'}} />
                                                        </InputAdornment>
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <div className='d-flex'>
                                                                <KeyboardCommandKeyRoundedIcon className='m-auto' sx={{ color: '#e1e1e1', width: "1.25rem", height: "1.25rem"}} />
                                                                <div className='m-auto' style={{color: '#e1e1e1', fontFamily:"Montserrat", fontWeight: "600", fontSize: "1.1rem"}}
                                                                    >K
                                                                </div>
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
                            <div className='d-flex'>
                                <div className=''>
                                    <div data-tooltip-id="my-tooltip" className='m-auto' 
                                        data-tooltip-content={`Create items`}>
                                        {/* {isSmallScreen ? 
                                            <div className='me-2 m-auto'><AddCircleRoundedIcon className='only-add-icon-create-home-navbar' /></div>
                                            : 
                                        } */}
                                        <Tooltip label="Create items" position="bottom" offset={8} withArrow openDelay={400} className='fafafa-color lato-font' style={{backgroundColor: "#338b6f", borderRadius: "6px"}}> 
                                            <Button className='create-home-navbar-button me-4 me-md-3'><AddCircleRoundedIcon className=' me-1 add-icon-create-home-navbar' />Create</Button>
                                        </Tooltip>
                                    </div>
                                        
                                </div>
                                <div className='home-navbar-divider me-3'>
                                </div>
                                <div className='m-auto me-4'>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="4" width="6" height="6" rx="1" stroke="#fafafa" strokeWidth="2" strokeLinejoin="round"/>
                                        <rect x="4" y="14" width="6" height="6" rx="1" stroke="#fafafa" strokeWidth="2" strokeLinejoin="round"/>
                                        <rect x="14" y="14" width="6" height="6" rx="1" stroke="#fafafa" strokeWidth="2" strokeLinejoin="round"/>
                                        <rect x="14" y="4" width="6" height="6" rx="1" stroke="#fafafa" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>

                                </div>

                                <div className='text-white user-navbar-button' onClick={handleUserBtnClick} style={{cursor: "pointer"}}>
                                    <p className='m-0 d-flex justify-content-center align-items-center initials'>{initials}</p>
                                </div>


                                <Menu
                                    className='user-btn-navbar-menu'
                                    anchorEl={userBtnAnchorEl}
                                    id="account-menu"
                                    open={openUserBtn}
                                    onClose={handleUserBtnClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        width: "18rem",
                                        backgroundColor: "#292929",
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: '#292929',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className='text-center fafafa-color' style={{fontSize: "1.05rem"}}>
                                        <div className='m-auto text-center mt-3'>
                                            <div className='text-white user-navbar-menu-button' style={{cursor: "pointer"}}>
                                                <p className='m-0 d-flex justify-content-center align-items-center menu-initials'>{initials}</p>
                                            </div>
                                        </div>

                                        <div className='my-3'>
                                            <div className='lato-font' style={{fontWeight: '600', textTransform: "capitalize"}}>
                                                {userFullName}
                                            </div>
                                            <div className='lato-font'>
                                                {userEmail}
                                            </div>
                                        </div>
                                    </div>

                                    <MenuItem onClick={handleUserBtnClose} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <PersonIcon fontSize="small" />
                                        </ListItemIcon>
                                            Profile
                                    </MenuItem>

                                    <MenuItem onClick={handleUserBtnClose} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                            Settings
                                    </MenuItem>

                                    <Divider style={{backgroundColor: "#fafafa"}} />

                                    <MenuItem onClick={handleUserBtnClose} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <AddRoundedIcon fontSize="small" />
                                        </ListItemIcon>
                                            Add workspace
                                    </MenuItem>

                                    <MenuItem onClick={handleUserBtnClose} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <ArchiveIcon fontSize="small" />
                                        </ListItemIcon>
                                            Archive
                                    </MenuItem>

                                    <MenuItem onClick={handleUserBtnClose} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <DeleteIcon fontSize="small" />
                                        </ListItemIcon>
                                            Trash
                                    </MenuItem>

                                    <MenuItem onClick={handleUserBtnClose} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <HelpIcon fontSize="small" />
                                        </ListItemIcon>
                                            Help
                                    </MenuItem>

                                    <MenuItem onClick={logout} className='lato-font home-navbar-menu-item'>
                                        <ListItemIcon style={{color: "#fafafa"}}>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HomeNavbar;