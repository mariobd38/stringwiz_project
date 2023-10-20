import React, { useState } from 'react';
import { useLocalState } from "../../utils/useLocalStorage";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import logo from '../../images/stringwiz_logo2.png';
import './homeNavbar.css';

const HomeNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);


    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
      };

    const [userFullName] = useLocalState("", "userFullName");
    const firstName = userFullName.split(' ')[0];
    const lastName = userFullName.split(' ')[1];
    const initials = firstName[0] + lastName[0];

    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div>
            <Nav className="navbar navbar-expand-md">
            <Container fluid>

            <div className="img-fluid">
              <a className="navbar-brand m-auto fs-4 ps-3" href="/">
                <img
                  src={logo}
                  className="img-fluid-custom"
                  alt="Stringwiz"
                />
              </a>
            </div>

            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              onClick={toggleOffcanvas}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`sidebar w-100 offcanvas offcanvas-end ${
                isOffcanvasOpen ? 'show' : ''
              }`}
              tabIndex="-1"
            >
              {/* Offcanvas content */}
              <div className="offcanvas-content">
                <div className="offcanvas-header border-bottom">
                  <div className="img-fluid">
                    <a className="navbar-brand m-auto fs-4" href="/">
                      <img
                        src={logo}
                        className="img-fluid-custom"
                        alt="Stringwiz"
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-close shadow-none"
                    onClick={toggleOffcanvas}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column flex-md-row p-4 p-md-0">
                  <ul className=" flex-grow-1 ">
                  </ul>
                  <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 pe-4">
                    <div className='pe-md-5'>
                        <button className="btn nav-button px-1 py-1 user-button">

                            <div className='user-button m-auto' style={{backgroundColor: "#e7e7e7"}}>
                                <NotificationsActiveRoundedIcon className='m-auto notis'></NotificationsActiveRoundedIcon>
                            </div>
                        </button>
                    </div>
                  
                    
                    <button className="btn nav-button px-1 py-1 user-button" onClick={handleClick} aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
                        <div className='user-button m-auto'>
                            <p className='m-auto text-white initials'>{initials}</p>
                        </div>
                    </button>
                        

                    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        <MenuItem onClick={handleClose}>
            <Avatar className="my-profile"/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <button onClick={() => logout()} className='logout'>
        <MenuItem onClick={handleClose} className='logout-menu'>
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