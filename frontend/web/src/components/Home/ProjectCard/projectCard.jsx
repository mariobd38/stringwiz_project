import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import './projectCard.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            className='user-home-card-tabpanel'
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const ProjectCard = () => {
    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);

    const handleNewTaskClick = () => {
        setNewTaskRowOpen((prev) => !prev);
    };

    const handleNewTaskClickAway = () => {
        setNewTaskRowOpen(false);
    };
    
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <Card
                className='project-card-card'
            >
                <Card.Header 
                    style={{
                        backgroundColor: '#1e1f21',
                        border: "none"
                    }} 
                    className='d-flex align-items-center py-3 d-flex justify-content-between px-4 user-home-card-header' >
                    <div className='d-flex align-items-center' style={{ color: '#fafafa' }}>
                        <span className='d-flex align-items-center'>
                            My Projects
                            <LockIcon className='ms-2' style={{ width: "1.1rem" }}/>
                        </span>
                    </div>
                    <div className='me-2' style={{ color: "#fafafa" }}>
                        <MoreHorizRoundedIcon />
                    </div>
                </Card.Header>

                <Card.Body className='user-home-card-body'>
                    <Box sx={{ width: "100%" }} >
                        <AppBar className='user-home-card-task-tabs-appbar' position="static" sx={{backgroundColor: "#1e1f21", boxShadow: "none"}}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                                className='user-home-card-task-tabs'
                                aria-label="full width tabs example"
                            >
                                <Tab label="Ongoing" className='user-home-card-task-tab' {...a11yProps(0)} />
                                <Tab label="Overdue" className='user-home-card-task-tab' {...a11yProps(1)} />
                                <Tab label="Completed" className='user-home-card-task-tab' {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                    
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className='table-container-wrapper'>
                                    <TableContainer className='table-container' >
                                        <Table>
                                            <TableBody >
                                                <ClickAwayListener onClickAway={handleNewTaskClickAway}>
                                                    <Box sx={{ position: 'relative' }}>
                                                        <button className='user-home-create-task-button-dark d-flex align-items-center ms-2 mb-2'
                                                            style={{ color: "#919191" }} onClick={handleNewTaskClick}
                                                        >
                                                            <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                                            <span className='me-1' style={{ fontSize: '0.95rem' }}>Create project</span>
                                                        </button>
                                                        <div className='w-100 table-row-dark'>
                                                        {newTaskRowOpen ? (
                                                            <TableRow className='table-row-new-dark ' style={{backgroundColor: "#1E1F21", width: "100%"}} >
                                                                <TableCell scope="row" className=' d-flex align-items-center justify-content-between table-cell'>
                                                                    <div className='d-flex align-items-center mb-1 m-0' style={{color: "#fafafa"}}>
                                                                        <div>
                                                                            <CheckRoundedIcon className='user-home-task-check-icon' />
                                                                        </div>
                                                                        <div>
                                                                            {/* <input onKeyDown={handleTaskCreate} placeholder='Task name' autoFocus="autofocus" className={`ps-2 task-name-text user-home-new-task-input fafafa-color`} contentEditable={true} />  */}
                                                                        </div>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                        ) : null}
                                                        </div>
                                                        
                                                    </Box>
                                            </ ClickAwayListener>
                                            </TableBody> 
                                        </Table>
                                    </TableContainer>
                                </div>
                            </TabPanel>

                            <TabPanel value={value} index={1} dir={theme.direction}>
                                Item Two
                            </TabPanel>

                            <TabPanel value={value} index={2} dir={theme.direction}>
                                Item Three
                            </TabPanel>
                        </SwipeableViews>
                    </Box>
                </Card.Body>
            </Card>
        </>
    );
};


export default ProjectCard;