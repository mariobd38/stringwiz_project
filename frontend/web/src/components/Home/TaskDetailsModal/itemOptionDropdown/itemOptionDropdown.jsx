import React from 'react';

import { Divider, ListItemText, 
    ListItemIcon, Menu, MenuList, MenuItem, Typography } from '@mui/material';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

import './itemOptionDropdown.css';

const ItemOptionDropdown = (props) => {
    return (
        <Menu
            anchorEl={props.taskOptionMenuAnchorEl}
            id="account-menu"
            open={props.openTaskOptionMenu}
            onClose={props.handleTaskOptionMenuClose}
            onHide={props.handleTaskOptionMenuClose}
            sx={{
                marginTop: 1.3,
                paddingTop: 0,
                color: '#202123',
                boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.01) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.01) 0px 4px 6px -2px',

            }}
            className='user-home-task-details-modal-item-type-menu'
            
            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
            <Typography sx={{
                paddingLeft: 2,
                fontWeight: 600,
                fontFamily: "Lato",
                fontSize: "0.9rem"
            }}>
            ITEM TYPES
            </Typography>

            <MenuList className='user-home-task-details-modal-item-type-menu-item' style={{width: "11.5rem"}}>
                <MenuItem >
                    <ListItemIcon>
                        <ChecklistRtlRoundedIcon style={{ color: "#b7b7b7" }} fontSize="medium" />
                    </ListItemIcon>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <ListItemText>Task</ListItemText>
                        <CheckRoundedIcon className='d-flex justify-content-end' />
                    </div>
                </MenuItem>
                
                <MenuItem>
                    <ListItemIcon>
                        <EmojiEventsRoundedIcon style={{color: "#b7b7b7"}} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Milestone</ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <EventRoundedIcon style={{color: "#b7b7b7"}} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Event</ListItemText>
                </MenuItem>
                
                
                <Divider style={{backgroundColor: "#fafafa"}}/>
                
                <MenuItem>
                    <ListItemIcon>
                        <AddRoundedIcon style={{color: "#b7b7b7"}} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add an item</ListItemText>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ItemOptionDropdown;