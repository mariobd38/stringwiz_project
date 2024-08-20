import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollLock } from '../../../utils/useScrollLock';

import { Menu } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import { motion, AnimatePresence } from 'framer-motion';

const MantineDropdown = (props) => {
    const { target,width,onMenuToggle,rowIndex,dropdown,isParent,childDropdownOpened,handleCloseChildDropdown,isChild,position } = props;

    const [menuOpened, setMenuOpened] = useState(false);
    const dropdownRef = useRef(null);
    const { disableScroll, enableScroll } = useScrollLock(); 

    useEffect(() => {
        if (menuOpened && !childDropdownOpened && isParent !== undefined && !isParent) {
            setMenuOpened(false);
        }
    }, [childDropdownOpened,isParent,menuOpened]);

    const shouldEnablePointerEvents = () => {
        if (isChild) return menuOpened;
        if (isParent) return menuOpened && !childDropdownOpened;
        return menuOpened;
    };

    const handleClose = useCallback((escapePressed = false) => {
        if (isChild) {
            handleCloseChildDropdown();
            setMenuOpened(false);
        }
        if (!childDropdownOpened || escapePressed) {
            setMenuOpened(false);
            enableScroll();
            rowIndex !== undefined && setTimeout(() => {
                onMenuToggle(false, rowIndex);
            }, 100);
        }
    }, [childDropdownOpened, enableScroll, rowIndex, onMenuToggle, isParent, handleCloseChildDropdown,isChild]);


    return (
        <Menu shadow="md" width={width} position={position} offset={12} zIndex={1000000}
            closeOnEscape={false}
            opened={menuOpened} 
            closeOnClickOutside
            closeOnItemClick={false}
            onOpen={() => {
                setMenuOpened(true);
                disableScroll();
                // if (childDropdownOpened) disableScroll(dropdownRef);
                rowIndex !== undefined && onMenuToggle(true,rowIndex);
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

            <AnimatePresence>
                {menuOpened && (
                    <Menu.Dropdown 
                        component={motion.div}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                            enter: { duration: 0.3, ease: "easeOut" },
                            exit: { duration: 0.3, ease: "easeIn", delay: 0.5 }

                        }}
                        className={`mantine-dropdown-model ${isParent ? 'parent' : ''}`}
                        bd='0' 
                        bg='#232426' 
                        ref={dropdownRef} 
                        style={{
                            pointerEvents: shouldEnablePointerEvents() ? "auto" : "none",
                            boxShadow: "0 2px 16px #0006"
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {dropdown}
                    </Menu.Dropdown>
                )}
            </AnimatePresence>
        </Menu>
    );
};

export {MantineDropdown};