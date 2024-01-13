import React, { useEffect, useState } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import Container from 'react-bootstrap/Container';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AppsIcon from '@mui/icons-material/Apps';
import ArchiveIcon from '@mui/icons-material/Archive';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardCommandKeyRoundedIcon from '@mui/icons-material/KeyboardCommandKeyRounded';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';

import { Divider, Input, InputAdornment, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';

import './homeNavbar.css';
import CocollabLogo from '../../Logo/logo';

const HomeNavbar = () => {
    const dayjs = require('dayjs');
    const [userFullName] = useLocalState("", "userFullName");

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();

    let hour = now.hour();
    let minute = now.minute();
    let greeting = "Good ";
    const [firstName, lastName] = userFullName.split(' ');

    switch(true) {
        case (hour < 6):
            greeting += "night";
            break;
        case (hour >= 18 && (hour <= 23 && minute <= 59)):
            greeting += "evening";
            break;
        case (hour >= 12):
            greeting += "afternoon";
            break;  
        default:
            greeting += "morning";
            break;
    }
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

    const [userEmail] = useLocalState('', 'userEmail');
    const initials = (firstName[0] + lastName[0]).toUpperCase();
    console.log("full name: " + lastName);
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    const closeOffcanvasIfLargeScreen = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
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
            <nav className="navbar" style={{height: "4.5rem", backgroundColor: "#222222" }}>
                <Container fluid >
                    <div className="row w-100 m-0">
                        <div className='text-white col-0 col-xl-1 ps-3 pt-1'>
                            <div className='d-none d-xl-inline'>
                                <CocollabLogo width={2.5} paddingBottom={0} fontSize={0} href={() => false} />
                            </div>
                        </div>
                        <div className='col-10 col-md-9 col-lg-8  d-flex justify-content-start align-items-center m-auto'>
                                {/* <div className='text-white greeting d-none d-lg-inline ps-4 pe-4 pe-lg-0'>
                                    {greeting}, {firstName}
                                </div> */}
                                <div className='pe-5 pe-lg-3'>
                                    <form className="home-navbar-search" role="search">
                                        <Input
                                            className="form-control home-navbar-search-input me-2"
                                            type="search"
                                            placeholder="Search"
                                            sx={{ fontFamily: 'Lato', backgroundColor: '#4b4c4e', border: "1px solid #b1b1b1", color: "white", borderRadius: "25px" }}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <SearchIcon sx={{ color: '#e1e1e1'}} />
                                                </InputAdornment>
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <div className='d-flex'>
                                                        <KeyboardCommandKeyRoundedIcon className='m-auto' sx={{ color: '#e1e1e1', width: "1.05rem", height: "1.05rem"}} />
                                                        <div className='m-auto' style={{color: '#e1e1e1', fontFamily:"Montserrat", fontWeight: "600", fontSize: "0.95rem"}}
                                                            >K
                                                        </div>
                                                    </div>
                                                </InputAdornment>
                                            }
                                            aria-label="Search"
                                        />
                                    </form>
                                </div>
                            
    
                        </div>
                        <div className='text-white col-lg-2 col-md-3 col-2 m-auto d-flex justify-content-end'>
                            <div className='d-flex'>
                                <div className=''>
                                    <Tooltip title={<span className='nunito-sans-font'>{[`Create items`]}</span>} arrow className='menu-tooltip'>
                                        {isSmallScreen ? 
                                            <div className='me-2 m-auto'><AddCircleRoundedIcon className='only-add-icon-create-home-navbar' /></div>
                                            : 
                                            <Button className='create-home-navbar-button me-4 me-md-3'><AddCircleRoundedIcon className=' me-1 add-icon-create-home-navbar' />Create</Button>
                                        }
                                    </Tooltip>

                                </div>
                                <div className='home-navbar-divider me-3'>
                                </div>
                                <Tooltip title={<span className='nunito-sans-font'>{[`Action Menu`]}</span>} arrow className='menu-tooltip'>
                                    <AppsIcon className='menu-home-navbar me-2 d-none d-md-inline' />
                                </Tooltip>

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
                                            <div className='text-white user-navbar-menu-button' onClick={handleUserBtnClick} style={{cursor: "pointer"}}>
                                                <p className='m-0 d-flex justify-content-center align-items-center menu-initials'>{initials}</p>
                                            </div>
                                        </div>

                                        <div className='my-3'>
                                            <div className='pb-2 nunito-sans-font' style={{fontSize: '1.3rem'}}>
                                                Personal Workspace
                                            </div>
                                            <div className='lato-font' style={{fontWeight: '600'}}>
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
                </Container>
                {/* <Container fluid>
                    <div className="row">
                        
                    </div>
                        <div className='d-none d-md-inline ms-3'>
                            <CocollabLogo width={2.5} paddingBottom={0} fontSize={0} href={() => false} />
                        
                        </div>

                        <div className='d-flex'>
                            <div className='text-white m-auto me-3 greeting'>{greeting}, {firstName}</div>
                            <form className="home-navbar-search" role="search">
                                <Input
                                    className="form-control home-navbar-search-input me-2"
                                    type="search"
                                    placeholder="Search"
                                    sx={{ fontFamily: 'Lato', backgroundColor: '#4b4c4e', border: "1px solid #b1b1b1", color: "white", borderRadius: "25px" }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: '#e1e1e1'}} />
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <div className='d-flex'>
                                                <KeyboardCommandKeyRoundedIcon className='m-auto' sx={{ color: '#e1e1e1', width: "1.05rem", height: "1.05rem"}} />
                                                <div className='m-auto' style={{color: '#e1e1e1', fontFamily:"Montserrat", fontWeight: "600", fontSize: "0.95rem"}}
                                                    >K
                                                </div>
                                            </div>
                                        </InputAdornment>
                                    }
                                    aria-label="Search"
                                />
                            </form>
                        </div>

                        <div className='d-flex'>
                            <div>
                                <Button className='upgrade-home-navbar-button me-3 d-none d-md-inline'>Upgrade</Button>
                                <Tooltip title={<span className='nunito-sans-font'>{[`Create items`]}</span>} arrow className='menu-tooltip'>
                                    {isSmallScreen ? 
                                        <div className='me-4 m-auto'><AddCircleRoundedIcon className='only-add-icon-create-home-navbar' /></div>
                                        : 
                                        <Button className='create-home-navbar-button me-4 me-md-3'><AddCircleRoundedIcon className=' me-1 add-icon-create-home-navbar' />Create</Button>
                                    }
                                </Tooltip>

                            </div>
                            <div className='home-navbar-divider me-3'></div>
                            <Tooltip title={<span className='nunito-sans-font'>{[`Action Menu`]}</span>} arrow className='menu-tooltip'>
                                <AppsIcon className='menu-home-navbar me-2 d-none d-md-inline' />
                            </Tooltip>

                            <div className='text-white user-navbar-button ms-2 me-3' onClick={handleUserBtnClick} style={{cursor: "pointer"}}>
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
                                    <div className='m-auto text-center mt-2'>
                                        <div className='text-white user-navbar-menu-button' onClick={handleUserBtnClick} style={{cursor: "pointer"}}>
                                            <p className='m-0 d-flex justify-content-center align-items-center menu-initials'>{initials}</p>
                                        </div>
                                    </div>

                                    <div className='my-3 lato-font'>
                                        <div style={{fontWeight: '600'}}>
                                            {userFullName}
                                        </div>
                                        <div>
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
                        
                </Container> */}
            </nav>
        </div>
    );
};

export default HomeNavbar;