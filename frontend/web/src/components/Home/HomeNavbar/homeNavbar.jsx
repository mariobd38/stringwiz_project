import React, { useEffect, useState } from 'react';

import {Icons} from '../../icons/icons';

import { Divider,Input, Button, Popover,Text,Flex} from '@mantine/core';
import Logo2 from '../../Logo/logo2';

import HomeNavbarUserMenu from './homeNavbarUserMenu';
import SpaceCreationModal from '../SpaceCreationModal/spaceCreationModal';

import './homeNavbar.css';

const HomeNavbar = (props) => {
    const { userFullName, initials,userEmail,userProfilePicture,userProfileDto
        , setOpenSidebarToggle, openSidebarToggle
     } = props;

    //user button
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [openSpaceCreateModal,setOpenSpaceCreateModal] = useState(false);

    // const [userEmail] = useLocalState('', 'userEmail');

    const closeOffcanvasIfLargeScreen = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 700) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const handleOpenSidebarToggle = () => {
        setOpenSidebarToggle(!openSidebarToggle);
        if (openSidebarToggle) {
            document.body.classList.remove('active');
        } else {
            document.body.classList.add('active');
        }
    }
    
    useEffect(() => {
        closeOffcanvasIfLargeScreen();
        window.addEventListener('resize', closeOffcanvasIfLargeScreen);
    
        return () => {
            window.removeEventListener('resize', closeOffcanvasIfLargeScreen);
        };
    }, [setIsSmallScreen]);

    return (
        <div>
            <nav className="navbar w-100" style={{position: "fixed",top: "0", zIndex: "11", height: "4.5rem", backgroundColor: "#222222" }}>
                <div className='container-fluid' >
                    <div className="row w-100 m-0 mx-2">
                        <div className='col-1 col-lg-3 d-flex align-items-center p-0 '>
                            <div className="navbar-menu-sidebar-icon" onClick={handleOpenSidebarToggle}>
                                {Icons('IconMenu2',27,27,'#fafafa')}
                            </div>

                            <div className='d-none d-lg-inline' style={{marginLeft: "20px"}}>
                                <div style={{width: "11rem"}}>
                                    <Logo2 strokeColor='#fafafa'/>
                                </div>
                            </div>
                        </div>

                        <div className='col-1 col-sm-5 col-md-7 col-lg-5 d-flex justify-content-start align-items-center'>
                                <div className='pe-5 pe-lg-3'>
                                    {isSmallScreen ? 
                                            <div className='me-2 m-auto home-navbar-search-ss'>
                                                {Icons('IconSearch',17.1,17.1,'#e1e1e1')}
                                            </div>
                                            : 
                                            <form className="home-navbar-search" role="search">
                                                <Input 
                                                    placeholder="Search" 
                                                    className="home-navbar-search-input me-2"
                                                    leftSection={Icons('IconSearch',16,16,'#c1c1c1')}
                                                    
                                                    rightSection={<div className='d-flex me-4' style={{background: "#27282a", borderRadius: "5px", padding: "2px 9px"}}>
                                                                    <div className='d-flex align-items-center' style={{paddingBottom: "1px"}}>
                                                                        {Icons('IconCommand',17.1,17.1,'#e1e1e1')}
                                                                    </div>
                                                                    <div className='m-auto' style={{color: '#e1e1e1', fontFamily:"Nunito Sans", fontWeight: "600", fontSize: "1rem"}}>K</div>
                                                                </div>}
                                                />
                                            </form>
                                    }
                                </div>
                        </div>

                        <div className='text-white col-10 col-sm-6 col-md-4 col-lg-4 d-flex align-items-center justify-content-end px-0'>
                            <div className='d-flex align-items-center'>

                                <div className='d-flex gap-3'>
                                {/* <Flex gap={8} > */}
                                <Button fw='500' radius='8' p='0 11px' bg='transparent' bd='1px solid #676869' ff='Inter' color='#f0f2f6' >
                                    Explore
                                </Button>
                                
                                <Popover width={280} position="bottom-end" shadow="md">
                                    <Popover.Target>
                                        <div className='user-home-navbar-icon-apps'>
                                                {Icons('IconPlanet',25,25,'#fafafa')}
                                        </div>
                                    </Popover.Target>

                                    <Popover.Dropdown bg='#2e2f31' bd='.1px solid #57585a'>

                                        <Flex justify='center' align='center' direction='column' gap={20}  c='#ebecef'>
                                            <Text fz='14.3'>No active spaces..</Text>
                                            <Button bd='1px solid #6e6f71' bg='transparent' fullWidth px={0} onClick={() => setOpenSpaceCreateModal(true)}>New Space</Button>
                                        </Flex>
                                    </Popover.Dropdown>
                                </Popover>
                                {/* </Flex> */}
                                </div>


                                <Divider size="xs" orientation="vertical" ms={13} me={10} m='auto' h={28} bd='.1px solid #676869'/>
                                <div className='m-auto me-4 d-flex gap-2'>
                                    <div className='user-home-navbar-icon-apps'>
                                        {Icons('IconBell',25,25,'#fafafa')}
                                    </div>

                                    <div className='user-home-navbar-icon-apps'>
                                        {Icons('IconApps',25,25,'#fafafa')}
                                    </div>
                                </div>

                                <HomeNavbarUserMenu 
                                    userProfileDto={userProfileDto}
                                    userProfilePicture={userProfilePicture}
                                    userFullName={userFullName}
                                    initials={initials}
                                />
                                
                                <SpaceCreationModal 
                                    openSpaceCreateModal={openSpaceCreateModal}
                                    setOpenSpaceCreateModal={setOpenSpaceCreateModal}
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