import React, { useState, useRef } from 'react';
import { useScrollLock } from '../../../utils/useScrollLock';

import { Menu } from '@mantine/core';

const MantineDropdown = (props) => {
    const { target,onMenuToggle,rowIndex,dropdown } = props;

    const [menuOpened, setMenuOpened] = useState(false);
    const dropdownRef = useRef(null);
    const { disableScroll, enableScroll } = useScrollLock();  // Destructure the functions from the hook

    return (
        <Menu shadow="md" width={190} position="bottom-end" offset={12} 
            closeOnEscape
            opened={menuOpened} 
            onOpen={() => {
                setMenuOpened(true);
                disableScroll(dropdownRef.current);
                onMenuToggle(true,rowIndex);
            }}
            onClose={() => {
                setMenuOpened(false);
                enableScroll();
                setTimeout(() => {
                    onMenuToggle(false, rowIndex);
                }, 100); 
            }}
            >
            <Menu.Target>
                {target}
            </Menu.Target>

            <Menu.Dropdown className='mantine-dropdown-model' bd='0px' bg='#232426' ref={dropdownRef} style={{pointerEvents: menuOpened ? "auto" : "none",boxShadow: "0 2px 16px #0006"}}>
                {dropdown}
            </Menu.Dropdown>
        </Menu>
    );
};

export {MantineDropdown};