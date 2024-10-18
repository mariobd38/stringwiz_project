import React, { useState, useRef } from 'react';
import {Avatar,UnstyledButton,Badge,Tooltip,rem,Box,Flex} from '@mantine/core';

import {Icons} from '../../icons/icons';

import classes from './navbarSearch.module.css';

import HomeSidebarSpaceOptions from './HomeSideBarSpaceOptions/homeSideBarSpaceOptions';
import { MantineDropdown } from '../../models/ModelDropdown2/mantineDropdown';
import './homeSidebar.css';

const HomeSidebar = (props) => {
    const { userEmail, openSidebarToggle, setOpenSidebarToggle,spaceName,spaceIcon } = props;

    const links = [
        { icon: 'IconHome', label: 'Home' },
        { icon: 'IconInbox', label: 'Inbox', notifications: 4 },
        { icon: 'IconFolder', label: 'Projects', notifications: 4 },
        { icon: 'IconFile', label: 'Docs' },
        { icon: 'IconCalendar', label: 'Calendar' },
        { icon: 'IconDotsCircleHorizontal', label: 'More' },
    ];

    const profileLink = (
        <div className={openSidebarToggle ? 'home-sidebar-profile-parent-div active' : 'home-sidebar-profile-parent-div'}>
            <UnstyledButton className={`d-flex justify-content-start w-100 ${!openSidebarToggle ?  classes.mainLink : 'px-3'} ${classes.profile} mb-0`} style={{padding:"7px"}}>
                <Flex gap={openSidebarToggle && 10} align='center'>

                    <div>
                        <Avatar className='profile-avatar' color={spaceIcon && spaceIcon.color} radius={spaceIcon && spaceIcon.radius}>
                            {spaceIcon && spaceIcon.children}
                        </Avatar>
                    </div>
                    <div 
                    style={{
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis',
                            maxWidth: '165px',
                            color: "#f1f1f1",
                            fontWeight: "600",
                            fontFamily: 'Lato'
                        }}
                    >
                        {openSidebarToggle && spaceName}
                    </div>
                </Flex>
                
            </UnstyledButton>
        </div>
    );

  const mainLinks = links.map((link,index) => (
        <>
            {openSidebarToggle ? 
                <UnstyledButton key={index} className={`${classes.mainLink} ${classes.active}`}>
                    <div className={classes.mainLinkInner}>
                        <div className={`${classes.mainLinkIcon} ${classes.active}`}>
                            {Icons(link.icon, 25, 25, '#868e96')}
                            {/* <link.icon color='#868e96' size={25}  stroke={2} /> */}
                        </div>
                        <span style={{fontFamily: 'Lato', fontWeight: "500", fontSize: "15px", color: "#d0d2d4"}}>{link.label}</span>
                    </div>
                    {link.notifications && (
                        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                            {link.notifications}
                        </Badge>
                    )}
                </UnstyledButton>
            
            : 
            <Tooltip label={link.label} position="right" withArrow arrowOffset={10} arrowSize={4} bg='#121212' openDelay={500} offset={{ mainAxis: 10 }}>
                <UnstyledButton key={link.label} className={classes.mainLink}>
                    <div className={`${classes.mainLinkInner} d-flex justify-content-center`}>
                        <div className={classes.iconWrapper}>
                            {Icons(link.icon, 25, 25, '#868e96')}
                            {link.notifications &&
                            <Badge circle size="xs" color="blue" className={classes.badge}>
                                {link.notifications}
                            </Badge>
                            }
                        </div>
                    </div>
                </UnstyledButton>
            </Tooltip>
            }
        
        </>
        
    ));

    const [sidebarColor, setSidebarColor] = useState('#222529');
    const isResizing = useRef(false);

    const handleMouseMove = (e) => {
        if (!isResizing.current) return;
        setSidebarColor('#525559');
        let newWidth = e.clientX;
        if (newWidth < 200) {
            newWidth = 80;
            setOpenSidebarToggle(false);
        }

        if (newWidth > 150) {
            newWidth = 260;
            setOpenSidebarToggle(true);
        }
    };

    const handleMouseUp = () => {
        setSidebarColor('#222529');

        isResizing.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing.current = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <nav className={`${classes.navbar} ${openSidebarToggle ? 'active' : ''}`} 
            style={{
                width: openSidebarToggle ? rem(260) : rem(80),
            }}
            >

                <Box className={classes.section}>
                    <MantineDropdown 
                        target={<div className={classes.profile}>{profileLink}</div>}
                        width={240}
                        dropdown={<HomeSidebarSpaceOptions spaceName={spaceName} spaceIcon={spaceIcon} />}
                        background={'#222222'} position='right-start' dmt={6}
                    />
                </Box>
                <div className={classes.section}>
                    <div className={classes.mainLinks}>{mainLinks}</div>
                </div>

                <div className="resize-handle" onMouseDown={handleMouseDown} style={{background: sidebarColor}}></div>
        </nav>
    );
};

export default HomeSidebar;
