import React, { useState } from 'react';

import Cookies from 'js-cookie';
import { userLogout } from '../../../DataManagement/Users/logout';
import { constructImageSrc } from '../../../utils/constructImageSrc';

import { IconSettings, IconTrash,IconArchive,IconHelp,IconBell,IconUser,IconChevronDown,IconLogout } from '@tabler/icons-react';

import { Avatar,Text,Menu, rem } from '@mantine/core';
import { useScrollLock } from '../../../utils/useScrollLock';

const HomeNavbarUserMenu = (props) => {
    const {userProfileDto,userProfilePicture, userFullName  } = props;

    const handleUserLogout = () => {
        localStorage.clear();
        Cookies.set('isAuthenticated', false);
        userLogout();
    };

    const [menuOpened, setMenuOpened] = useState(false);
    const { disableScroll, enableScroll } = useScrollLock();  // Destructure the functions from the hook


    return (
        <>
            <Menu shadow="md" width={300} position="bottom-end" offset={12} 
            closeOnEscape
            opened={menuOpened}
            onOpen={() => {
                disableScroll();
                setMenuOpened(true);
            }}
            onClose={() => {
                enableScroll();
                setMenuOpened(false);
            }}
            >
                <div className='d-flex align-items-center'>
                    <Menu.Target className='d-flex align-items-center user-home-avatar-menu-target' style={{borderRadius: "8px", cursor: "pointer", padding: "6px 8px"}}>
                        <div>
                            <Avatar 
                                className='home-navbar-avatar-button d-flex align-items-center'
                                src={userProfileDto !== null &&
                                userProfileDto.avatarType === 'image' ? constructImageSrc(userProfileDto.pfd.data, userProfileDto.avatarType) : 'none'}
                                style={{backgroundImage: userProfilePicture !== null && userProfileDto == null ? `url(${userProfilePicture})` : 'none', overflow: "visible",
                                cursor: "pointer",backgroundSize: 'cover', borderRadius: "50%"}} 
                            />
                            <span className='ps-1'><IconChevronDown width={15} height={15}/></span>
                        </div>
                    </Menu.Target>
                </div>

                <Menu.Dropdown 
                    style={{borderRadius: "8px"}}
                    className={`user-home-navbar-menu-dropdown`}
                >
                    
                    <Menu.Label>
                        <div className='d-flex gap-3 align-items-center'>
                            <Avatar 
                                className='home-navbar-avatar-button d-flex align-items-center'
                                src={userProfileDto !== null &&
                                userProfileDto.avatarType === 'image' ? constructImageSrc(userProfileDto.pfd.data, userProfileDto.avatarType) : 'none'}
                                style={{backgroundImage: userProfilePicture !== null && userProfileDto == null ? `url(${userProfilePicture})` : 'none', overflow: "visible",
                                backgroundSize: 'cover'}} 
                            />

                            <div className='d-flex flex-column'>
                                <Text c='#d4d6d8' fz={17} fw={650} ff='Lato' className='home-navbar-menu-fullnamedesc'>{userFullName}</Text>
                                <Text c='#b6b8ba' fz={14} fw={200} ff='Lato' className='home-navbar-menu-fullnamedesc'>Software Engineer</Text>
                            </div>
                        </div>
                    </Menu.Label>
                    {/* <Menu.Label>Application</Menu.Label> */}
                    <Menu.Item mt={20} w='91.5%' leftSection={<IconUser style={{ width: rem(14), height: rem(14) }} />}>
                        Profile
                    </Menu.Item>
                    <Menu.Item w='91.5%' leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                        Settings
                    </Menu.Item>
                    <Menu.Item w='91.5%' leftSection={<IconBell style={{ width: rem(14), height: rem(14) }} />}>
                        Notification Settings
                    </Menu.Item>
                    <Menu.Item w='91.5%' leftSection={<IconArchive style={{ width: rem(14), height: rem(14) }} />}
                    >
                        Archive
                    </Menu.Item>
                    <Menu.Item w='91.5%' leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}>
                        Trash
                    </Menu.Item>

                    {/* <Menu.Divider /> */}

                    {/* <Menu.Label>Danger zone</Menu.Label> */}
                    <Menu.Item w='91.5%'
                    leftSection={<IconHelp style={{ width: rem(14), height: rem(14) }} />}
                    >
                    Help
                    </Menu.Item>
                    <Menu.Divider size="xs" bd='.1px solid #676869' />
                    <Menu.Item w='91.5%' onClick={handleUserLogout}
                        leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                    >
                        Log out
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
};

export default HomeNavbarUserMenu;