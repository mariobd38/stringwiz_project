import React from 'react';

import Cookies from 'js-cookie';
import { userLogout } from '../../../DataManagement/Users/logout';
// import { constructImageSrc } from '../../../utils/constructImageSrc';

import { Text,Menu } from '@mantine/core';

import {Icons} from '../../icons/icons';
import UserAvatar from '../UserAvatar/userAvatar';
import { MantineDropdown } from '../../models/ModelDropdown2/mantineDropdown';

const HomeNavbarUserMenu = (props) => {
    const {userProfileDto,userProfilePicture, userFullName, initials } = props;

    const handleUserLogout = () => {
        localStorage.clear();
        Cookies.set('isAuthenticated', false);
        userLogout();
    };

    const menuItems = [
        { name: 'Profile',icon: 'IconUser', marginTop: '20'},
        { name: 'Settings',icon: 'IconSettings'},
        { name: 'Notification Settings',icon: 'IconBell'},
        { name: 'Archive',icon: 'IconArchive'},
        { name: 'Trash',icon: 'IconTrash'},
        { name: 'Help',icon: 'IconHelp'},
    ];

    return (
        <>
            <MantineDropdown 
                target={
                    <div className='d-flex align-items-center user-home-avatar-menu-target' style={{borderRadius: "8px", cursor: "pointer", padding: "6px 8px"}}>
                        <UserAvatar 
                            userProfileDto={userProfileDto}
                            userProfilePicture={userProfilePicture}
                            initials={initials}
                            multiplier={2.075}
                            fontSize={1}
                        />
                        <span className='ps-1'>
                            {Icons('IconChevronDown',15,15,'#fafafa')}
                        </span>
                    </div>
                }
                width={300}
                dropdown={
                    <div className={`user-home-navbar-menu-dropdown`}
                    >
                    <Menu.Label>
                        <div className='d-flex gap-3 align-items-center'>
                            <UserAvatar 
                                userProfileDto={userProfileDto}
                                userProfilePicture={userProfilePicture}
                                initials={initials}
                                multiplier={4.8}
                                fontSize={2.1}
                            />

                            <div className='d-flex flex-column'>
                                <Text c='#d4d6d8' fz={17} fw={650} ff='Lato' className='home-navbar-menu-fullnamedesc'>{userFullName}</Text>
                                <Text c='#b6b8ba' fz={14} fw={200} ff='Lato' className='home-navbar-menu-fullnamedesc'>Software Engineer</Text>
                            </div>
                        </div>
                    </Menu.Label>

                    {menuItems.map((item) => (
                        <Menu.Item key={item.name} bg='#222222' c='#d5d6d8' mt={item?.marginTop} w='91.5%' leftSection={Icons(item.icon,14,14,'#d5d6d8')}>
                            {item.name}
                        </Menu.Item>
                    ))}
                    <Menu.Divider size="xs" bd='.1px solid #676869' />
                    <Menu.Item w='91.5%' bg='#222222' c='#d5d6d8' onClick={handleUserLogout} leftSection={Icons('IconLogout',14,14,'#d5d6d8')}>
                        Log out
                    </Menu.Item>
                    </div>
                }
            background={'#222222'} position='bottom-end'
            />
        </>
    );
};

export default HomeNavbarUserMenu;