import React from 'react';

import { Divider,Menu,Avatar,Box } from '@mantine/core';

import { Icons } from '../../../icons/icons';

const HomeSidebarSpaceOptions = ({spaceName, spaceIcon}) => {

    const menuItems = [
        { name: 'Preferences',icon: 'IconAdjustmentsHorizontal' },
        { name: 'Switch space',icon: 'IconSwitchHorizontal' },
        { name: 'Space settings',icon: 'IconSettings'},
        { name: 'Manage members',icon: 'IconUsersGroup'},
        // { name: 'Leave space',icon: 'IconUsersGroup'},
    ];

    return (
        <>
            <Box my={5}>
                <Menu.Label w='225' h={25} mb={8} fz={12.3} style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{spaceName}</Menu.Label>

                {menuItems.map((item) => (
                    <Menu.Item key={item.name} c='#d5d6d8' bg='#222222' mt={item?.marginTop} w='calc(240px - 13.8%)' leftSection={Icons(item.icon,15,15,'#d5d6d8')}>
                        {item.name}
                    </Menu.Item>
                ))}
                <Divider size="xs" bd='.1px solid #676869' my={5} />
                <Menu.Item bg='#222222' c='#d5d6d8' w='calc(240px - 13.8%)' leftSection={Icons('IconPlus',15,15,'#d5d6d8')}>
                    New space
                </Menu.Item>
            </Box>
        </>
    );
};

export default HomeSidebarSpaceOptions;