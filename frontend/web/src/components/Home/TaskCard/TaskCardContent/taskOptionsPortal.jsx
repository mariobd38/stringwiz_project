import React, {forwardRef,useState } from 'react';

import { Menu,Box,Portal, Divider } from '@mantine/core';
import { IconEdit,IconLoader,IconCalendarPlus,IconTrash,IconFlag3,IconChevronRight } from '@tabler/icons-react';

import './taskOptionsPortal.css';

const TaskOptionsPortal = forwardRef((props, ref) => {
    const { contextMenuPosition, showContextMenu,setShowContextMenu,openMenuIndex,setOpenMenuIndex,
        enableScroll,setShowInnerContextMenu,setOpenRenameModal
     } = props;

    const menuItems = [
        {label: 'Rename', icon: <IconEdit width='17px'/>, cascade: false, 
            action: () => handleRenameButtonClick()
        },
        {label: 'Status', icon: <IconLoader width='17px'/>, cascade: true,
            child: {
                width: '200'
            }
        },
        {label: 'Priority', icon: <IconFlag3 width='17px'/>, cascade: true,
            child: {
                width: '200'
            }
        },
        {label: 'Set due date', icon: <IconCalendarPlus width='17px'/>, cascade: false},
        {label: 'Delete', icon: <IconTrash width='17px'/>, cascade: false}
    ]

    const handleRenameButtonClick = () => {
        enableScroll();
        setOpenRenameModal(true);
        setShowInnerContextMenu(false);
        setShowContextMenu(false);
    }

    const firstSectionItems = menuItems.slice(0,4);  // First section
    const secondSectionItems = menuItems.slice(4,5);

    const handleMouseEnter = (index) => {
        setOpenMenuIndex(index);
        setFirstSectionActive(true);
    };
    const [firstSectionActive, setFirstSectionActive] = useState(false);

    return (<>
        <Portal>
            <Box 
                bg='#28292b'
                w='200px'
                ref={ref}  // Attach the ref here
                bd='.1px solid #757779'
                style={{ 
                    borderRadius: "7px", 
                    position: 'absolute', 
                    top: `${contextMenuPosition.top}px`,
                    left: `${contextMenuPosition.left}px`,
                    zIndex: 100,
                    pointerEvents: "auto",
                }}
            >
                <Menu
                    opened={showContextMenu}
                    withinPortal
                    w='92%' 
                    style={{ borderRadius: "6px",pointerEvents: "auto", }}
                    closeOnItemClick={false}
                    
                >
                    <div 
                        className='p-2' 
                        style={{ borderRadius: "7px", boxShadow: "0 14px 28px rgba(0, 0, 0, 0.35)", maxHeight: "300px", overflow: "auto" }}
                    >

                        <Menu >
                            {/* <Menu.Dropdown> */}
                            {firstSectionItems.map((item, index) => (
                                <Menu
                                    trigger="hover"
                                    openDelay={150} 
                                    closeDelay={150}
                                    key={index}
                                    position="right-start"
                                    opened={openMenuIndex === index}
                                    closeOnItemClick={false}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    //onMouseLeave={handleMouseLeave}
                                >
                                    <Menu.Target closeOnItemClick={false}  >
                                        <Menu.Item
                                            w='86%'
                                            className={`rte-styles-options-button ${openMenuIndex === index && firstSectionActive   ? 'isActive' : ''}`}
                                            bg='#28292b'
                                            c='#eaebed'
                                            leftSection={item.icon}
                                            rightSection={item.cascade && <IconChevronRight width='17px' color='#d3d5d7'/>}
                                            onClick={item.action || item.action} 
                                        >
                                            <span>{item.label}</span>
                                        </Menu.Item>
                                    </Menu.Target>
                                    {item.cascade &&
                                    <Menu.Dropdown 
                                        onMouseEnter={() => {
                                            setShowInnerContextMenu(true);
                                        }}
                                        onMouseLeave={() => {
                                            setShowInnerContextMenu(false);
                                        }}
                                        w={item.child ? `${item.child.width}px` : 'auto'}
                                        bg='#28292b'
                                        c='#eaebed' 
                                        bd='.1px solid #757779' 
                                        m='0' style={{left: `${contextMenuPosition.left+191}px`,pointerEvents: "auto"}} 
                                    >
                                        <Menu.Item w='84%' m='auto' bg='#28292b' c='inherit'  className='rte-styles-options-button'>a</Menu.Item>
                                        <Menu.Item w='84%' m='auto' bg='#28292b' c='inherit'  className='rte-styles-options-button'>a</Menu.Item>
                                        
                                    </Menu.Dropdown>}
                                </Menu>
                            ))}
                        </Menu>
                        
                            {/* {firstSectionItems.map((item, index) => (
                                <div key={index}  className=''>
                                    <Menu.Item 
                                        className='rte-styles-options-button '
                                        key={index}
                                        bg='#28292b' 
                                        onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}

                                        c='#eaebed'
                                        leftSection={item.icon}
                                    >
                                        <span className='fafafa-color d-flex'>{item.label}</span>
                                    </Menu.Item>
                                </div>
                            ))} */}

                            <Divider my={8} bd='.1px solid #6a6a6a'/>
                            {secondSectionItems.map((item, index) => (
                                <div key={index} style={{ width: '98%' }} className=''>
                                    <Menu.Item 
                                        className='rte-styles-options-button '
                                        key={index}
                                        w='89%' 
                                        style={{borderRadius: "6px"}}
                                        bg='#28292b' 
                                        c='#eaebed'
                                        leftSection={item.icon}
                                    >
                                        <span className='fafafa-color d-flex'>{item.label}</span>
                                    </Menu.Item>
                                </div>
                            ))}
                    </div>
                </Menu>
            </Box>
        </Portal>

        </>
    );
});

TaskOptionsPortal.displayName = "TaskOptionsPortal";

export default TaskOptionsPortal;
