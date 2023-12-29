import React, { useState } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logout from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import './homeNavbar.css';
import CocollabLogo from '../../Logo/logo';


const HomeNavbar = () => {
    //user button
    const [userBtnAnchorEl, setUserBtnAnchorEl] = useState(null);
    const openUserBtn = Boolean(userBtnAnchorEl);

    const handleUserBtnClick = (event) => {
        setUserBtnAnchorEl(event.currentTarget);
    };

    const handleUserBtnClose = () => {
        setUserBtnAnchorEl(null);
    };

    const [userFullName] = useLocalState('', 'userFullName');
    const [firstName, lastName] = userFullName.split(' ');
    const initials = (firstName[0] + lastName[0]).toUpperCase();
    console.log("full name: " + lastName);
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <div>
            <Nav className="navbar navbar-expand-md" style={{height: "4.8rem" }}>
                <Container fluid>
                    <div className='ps-3'>
                        <CocollabLogo width={2.9} paddingBottom={0} fontSize={0} href={() => false}></CocollabLogo>

                    </div>
                    <div
                        className={`sidebar w-100 offcanvas offcanvas-end`}
                        tabIndex="-1"
                    >
                        <div className="">
                            <div className="d-flex p-4 p-md-0">
                                <MenuList className="flex-grow-1"></MenuList>
                                <div className="d-flex justify-content-center align-items-center gap-3 pe-4">
                                    <div>
                                        <div className='nav-side-button'>
                                            <NotificationsIcon className='m-auto notis'></NotificationsIcon>
                                        </div>
                                    </div>
                                    <div className='pe-md-5 me-md-2'>
                                        <div className='nav-side-button'>
                                            <MailIcon className='m-auto notis'></MailIcon>
                                        </div>
                                    </div>
                                    <button className="px-0 px-md-1 py-1 py-md-0 user-button" onClick={handleUserBtnClick} aria-controls={openUserBtn ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openUserBtn ? 'true' : undefined}>
                                        <div className='m-auto'>
                                            <p className='m-auto fafafa-color initials'>{initials}</p>
                                        </div>
                                    </button>
                                    <Menu
                                        anchorEl={userBtnAnchorEl}
                                        id="account-menu"
                                        open={openUserBtn}
                                        onClose={handleUserBtnClose}
                                        onClick={handleUserBtnClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={handleUserBtnClose}>
                                            <Avatar className="my-profile" /> Profile
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleUserBtnClose}>
                                            <ListItemIcon>
                                                <Settings fontSize="small" />
                                            </ListItemIcon>
                                            Settings
                                        </MenuItem>
                                        <button onClick={logout} className='logout'>
                                            <MenuItem onClick={handleUserBtnClose} className='logout-menu'>
                                                <ListItemIcon className='logout-menu-icon'>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </button>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Nav>
        </div>
    );
};

export default HomeNavbar;