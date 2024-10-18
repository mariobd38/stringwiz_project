import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollLock } from '../../../utils/useScrollLock';

import { Menu } from '@mantine/core';

const MantineDropdown = (props) => {
    const { background,target,width,dropdown,isParent,childDropdownOpened,handleCloseChildDropdown,isChild,position,
        tagDeleteItemClicked,setOpenTagDeletionModal,setTagDeleteItemClicked,dmt } = props;

    const [menuOpened, setMenuOpened] = useState(false);
    const dropdownRef = useRef(null);
    const { disableScroll, enableScroll } = useScrollLock(); 

    useEffect(() => {
        if (menuOpened && !childDropdownOpened && isParent !== undefined && !isParent) {
            setMenuOpened(false);
        }
    }, [childDropdownOpened,isParent,menuOpened]);

    const shouldEnablePointerEvents = () => {
        if (isParent) return menuOpened && !childDropdownOpened;
        return menuOpened;
    };

    const handleClose = useCallback(() => {
        if (isChild) {
            handleCloseChildDropdown();
            setMenuOpened(false);
        }
        if (!childDropdownOpened) {
            setMenuOpened(false);
            enableScroll();
        }
    }, [childDropdownOpened, enableScroll, handleCloseChildDropdown,isChild]);

    useEffect(() => {
        if (menuOpened && tagDeleteItemClicked) {
            setOpenTagDeletionModal(true);
            setMenuOpened(false);
            enableScroll();
            setTagDeleteItemClicked(false);
        }
    }, [menuOpened, tagDeleteItemClicked,enableScroll,setOpenTagDeletionModal,setTagDeleteItemClicked]);

    return (
        <Menu shadow="md" width={width} position={position} offset={12} zIndex={1000000}
            closeOnEscape={false}
            opened={menuOpened} 
            closeOnClickOutside
            closeOnItemClick={!childDropdownOpened}
            onOpen={() => {
                setMenuOpened(true);
                disableScroll();
            }}
            onClose={(event) => {
                // if (!childDropdownOpened) {
                //     console.log("close :(");
                //     setMenuOpened(false);
                //     enableScroll();
                //     rowIndex !== undefined && setTimeout(() => {
                //         onMenuToggle(false, rowIndex);
                //     }, 100);
                // }
                const escapePressed = event?.type === 'keydown' && (event?.key === 'Escape' || event?.key === 'Esc');
                handleClose(escapePressed);
            }}
        >
            <Menu.Target>
                {target}
            </Menu.Target>

            <Menu.Dropdown 
                className={`mantine-dropdown-model ${isParent ? 'parent' : ''}`}
                bd='0' 
                bg={background}
                ref={dropdownRef} 
                style={{
                    pointerEvents: shouldEnablePointerEvents() ? "auto" : "none",
                    boxShadow: "0 2px 16px #0006",
                    borderRadius: "6px",
                    marginTop: dmt || '0'
                }}
                onClick={(event) => event.stopPropagation()}
            >
                {dropdown}
            </Menu.Dropdown>
        </Menu>
    );
};

export {MantineDropdown};