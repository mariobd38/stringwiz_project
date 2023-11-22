import React, { useState, useEffect } from 'react';
import { useLocalState } from "../utils/useLocalStorage";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import EventIcon from '@mui/icons-material/Event';
import FlagIcon from '@mui/icons-material/Flag';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Alert from '@mui/material/Alert';
import Badge from '@mui/material/Badge';
// import Box from '@mui/material/Box';
// import Dialog from '@mui/material/Dialog';
// import Fade from '@mui/material/Fade';'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
// import Popper from '@mui/material/Popper';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';

import HomeNavbar from './HomeNavbar/homeNavbar';
import HomeHeader from './HomeHeader/homeHeader';
import './home.css';
import { withStyles } from '@mui/styles';
import {createTaskInfo} from '../DataManagement/createTask';
import {getTaskInfo} from '../DataManagement/getTasks';
import { updateTaskInfo } from '../DataManagement/updateTask';




const Home = () => {
    
    const dayjs = require('dayjs');


    const [jwt] = useLocalState("", "jwt");
    console.log(jwt);
    const [userFullName] = useLocalState('', 'userFullName');
    const [firstName, lastName] = userFullName.split(' ');
    const initials = (firstName[0] + lastName[0]).toUpperCase();
    const [userTasks, setUserTasks] = useLocalState([], "userTasks");
 
    const [taskName, setTaskName] = useState(null);
    const [taskDescription, setTaskDescription] = useState(null);
    const [taskStatus, setTaskStatus] = useState(null);
    const [taskPriority, setTaskPriority] = useState(null);
    const [taskDueDate, setTaskDueDate] = useState(null);
    
    const [missingNameError, setMissingNameError] = useState(false);

    const [isCheckIconVisible, setCheckIconVisible] = useState(false);

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    };
    const handleTaskStatusChange = (event) => {
        setTaskStatus(event.target.value);
    };

    const handleTaskPriorityChange = (event) => {
        setTaskPriority(event.target.value);
    };

    const handleTaskDueDateChange = (date) => {
        setTaskDueDate(date);
    };

    const [taskData, setTaskData] = useState([]);

    const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);
    const handleCreateTaskModalOpen = () => setCreateTaskModalOpen(true);
    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentTaskDescription, setCurrentTaskDescription] = useState('');
    const [currentTaskStatus, setCurrentTaskStatus] = useState('');
    const [currentTaskPriority, setCurrentTaskPriority] = useState('');
    const [currentTaskCreatedOn, setCurrentTaskCreatedOn] = useState('');
    const [currentTaskUpdatedOn, setCurrentTaskUpdatedOn] = useState('');
    const [currentTaskDueDate, setCurrentTaskDueDate] = useState('');

    const handleCreateTaskModalClose = () => {
        setCreateTaskModalOpen(false);
        setMissingNameError(false); 
    };

    const [moreTaskmodalOpen, setMoreTaskModalOpen] = useState(false);
    const defaultStatuses = ['Stuck', 'To Do', 'In Progress', 'Completed'];
    const defaultPriorities = ['Critical', 'High', 'Medium', 'Low'];
    let userStatuses = defaultStatuses;
    let userPriorities = defaultPriorities;
    let [otherStatusesArray, setOtherStatusesArray] = useState(userStatuses);
    const handleMoreTaskModalOpen = (index, taskName, taskDescription, taskStatus, taskPriority,  taskCreatedOn, taskDueDate, taskUpdatedOn) => {
        setCurrentIndex(index);
        setCurrentTaskName(taskName);
        setCurrentTaskDescription(taskDescription);

        otherStatusesArray.splice(otherStatusesArray.indexOf(taskStatus), 1);
        console.log(otherStatusesArray.indexOf(taskStatus));
        console.log(otherStatusesArray);
        setOtherStatusesArray(otherStatusesArray);
        setCurrentTaskStatus(taskStatus);
        console.log(currentTaskStatus + " is the current status")

        setCurrentTaskPriority(taskPriority);

        const taskCreatedOnDate = dayjs(taskCreatedOn).format(`MMM D, h:mm a`);
        const taskUpdatedOnDate = dayjs(taskUpdatedOn).format(`MMM D, h:mm a`);
        const taskDueOnDate = dayjs(taskDueDate).format(`MMM D`);

        setCurrentTaskCreatedOn(taskCreatedOnDate);
        setCurrentTaskUpdatedOn(taskUpdatedOnDate);
        setCurrentTaskDueDate(taskDueOnDate);

        setMoreTaskModalOpen(true);
        // console.log(taskData[index].lastUpdatedOn);
    };

    const handleRemoveDueDateClick = (event) => {
        setCurrentTaskDueDate(null);
        handleUpdateTask(event);
    }
    const handleMoreTaskModalClose = () => {
        setOtherStatusesArray(defaultStatuses);
        setMoreTaskModalOpen(false);
    };


    //status popovers
    const [statusPopoverAnchorEl, setStatusPopoverAnchorEl] = useState(null);

    const handleStatusPopoverClick = (event, index) => {
        setStatusPopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
    };

    const handleStatusPopoverClose = () => {
        setStatusPopoverAnchorEl(null);
    };

    const openStatusPopover = Boolean(statusPopoverAnchorEl);
    const statusPopOverId = openStatusPopover ? 'simple-popover' : undefined;



    //priority popovers
    const [priorityPopoverAnchorEl, setProrityPopoverAnchorEl] = useState(null);

    const handlePriorityPopoverClick = (event, index) => {
        setProrityPopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
    };

    const handlePriorityPopoverClose = () => {
        setProrityPopoverAnchorEl(null);
    };

    const openPriorityPopover = Boolean(priorityPopoverAnchorEl);
    const priorityPopOverId = openPriorityPopover ? 'simple-popover' : undefined;

    //due date popovers
    const [currentIndex, setCurrentIndex] = useState(null);

    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);

    const handleDueDatePopoverClick = (event, index) => {
        setDueDatePopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        console.log(currentIndex + " + wyooo")
    };

    const [selectedDate, setSelectedDate] = useState(null);


    const handleDueDatePopoverClose = () => {
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false);
        console.log(currentIndex);
    };

    const openDueDatePopover = Boolean(dueDatePopoverAnchorEl);
    const dueDatePopOverId = openDueDatePopover ? 'simple-popover' : undefined;

    const handleDateSelection = (date) => {
        setSelectedDate(date);
      };


    //create task call
    const handleCreateTask = () => {
        createTaskInfo(
        dayjs,
        taskName,
        taskDescription,
        taskStatus,
        taskPriority,
        taskDueDate,
        setMissingNameError,
        setTaskData,
        setUserTasks,
        setTaskName,
        setTaskDescription,
        setTaskStatus,
        setTaskPriority,
        setTaskDueDate,
        setCreateTaskModalOpen,
        jwt,
        taskData,
        userTasks )
    };

    //get task call
    const handleGetTasks = () => {
        getTaskInfo(jwt, setTaskData)
    };

    //update task call
    const handleUpdateTask = (event) => {
        updateTaskInfo(
            currentIndex, 
            event,
            taskData,
            selectedDate,
            dayjs,
            moreTaskmodalOpen,
            setCheckIconVisible,
            handleDueDatePopoverClose,
            setCurrentTaskDueDate,
            handlePriorityPopoverClose,
            handleStatusPopoverClose,
            jwt )
    };

    useEffect(() => {
        handleGetTasks();
      }, []);

      const completeTask = (index) => {
        let updatedTaskData = [...taskData];
        updatedTaskData[index].status = 'Completed';

        setTaskData(updatedTaskData);

        setTimeout(function() {
            const newTaskData = updatedTaskData.filter((task, i) => i !== index);

            setTaskData(newTaskData);

          }, 600);
      };


    const [menuStatusanchorEl, setMenuStatusAnchorEl] = React.useState(null);
    const openMenuStatus = Boolean(menuStatusanchorEl);
    const handleMenuStatusBtnClick = (event) => {
        setMenuStatusAnchorEl(event.currentTarget);
    };
    const handleMenuStatusBtnClose = (otherStatus, event) => {
        if (userStatuses.includes(otherStatus)) {
            otherStatusesArray = userStatuses;

            otherStatusesArray.splice(otherStatusesArray.indexOf(otherStatus), 1);
            setOtherStatusesArray(otherStatusesArray);

            setCurrentTaskStatus(otherStatus);
            
            handleUpdateTask(event);

        }

        setMenuStatusAnchorEl(null);
    };
    const [menuPriorityanchorEl, setMenuPriorityAnchorEl] = React.useState(null);
    const openMenuPriority = Boolean(menuPriorityanchorEl);
    const handleMenuPriorityBtnClick = (event) => {
        setMenuPriorityAnchorEl(event.currentTarget);
    };
    const handleMenuPriorityBtnClose = (userPriority, event) => {
        if (userPriorities.includes(userPriority)) {
            setCurrentTaskPriority(userPriority);
            handleUpdateTask(event);
        }
        setMenuPriorityAnchorEl(null);
    };
    const handleSetTaskCompleteBtn = (event) => {
        otherStatusesArray = userStatuses;

        otherStatusesArray.splice(otherStatusesArray.indexOf('Completed'), 1);
        setOtherStatusesArray(otherStatusesArray);

        setCurrentTaskStatus('Completed');
        
        handleUpdateTask(event);

    }


    return (
        <>
        <HomeNavbar></HomeNavbar>    
        <Container >
            <HomeHeader></HomeHeader>
            
            <div className='row pb-5'>
                <div className='pt-4 col-xl d-flex justify-content-center'>
                    <Card className=' pb-3 my-card  m-0' body><h4 className='tasks-text text-center'>My Tasks</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>
                            <Tab eventKey="homeKey" className="" title="Upcoming">
                                <div className="table-container-wrapper">
                                    <TableContainer className="table-container" >
                                        <Table sx={{ }} aria-label="simple table">
                                        <TableBody>
                                            {taskData.map((row, index) => (
                                            <TableRow key={index} className='table-row'>
                                                <TableCell component="th" scope="row" className='default-tab-text d-flex align-items-center justify-content-between table-cell'>
                                                    <div className='d-flex align-items-center'>
                                                        <CheckCircleIcon className='ps-1 pb-1 mt-1 task-check table-cell-icon' onClick={() => completeTask(index)} />
                                                        <button className='task-name-link' onClick={() => handleMoreTaskModalOpen(index, row.name, row.description, row.status, row.priority, row.createdOn, row.dueDate, row.lastUpdatedOn)}>
                                                            <span /*contentEditable={true}*/ className={`ps-2 taskName-text ${row.status === 'Completed' ? ' strikethrough' : ''}`}>{row.name}</span> 
                                                        </button>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <Tooltip title={<span className='menu-tooltip-text'>{[`Set status`]}</span>} arrow className='status-tooltip menu-tooltip'>
                                                            <AssignmentIcon className='table-cell-icon status-icon mx-1' variant="contained" onClick={(event) => handleStatusPopoverClick(event, index)}></AssignmentIcon>
                                                        </Tooltip>

                                                        <Popover
                                                            id={statusPopOverId}
                                                            open={openStatusPopover}
                                                            anchorEl={statusPopoverAnchorEl}
                                                            onClose={handleStatusPopoverClose}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'left',
                                                            }}
                                                        >

                                                            <List disablePadding className='update-list-menu'>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'Stuck')}>
                                                                    <ListItemText primary="Stuck"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'To Do')}>
                                                                    <ListItemText primary="To Do"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                    </svg>
                                                                </div>

                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'In Progress')}>
                                                                    <ListItemText primary="In Progress"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'Completed')}>
                                                                    <ListItemText primary="Completed"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>


                                                        <Tooltip title={<span className='menu-tooltip-text'>{[`Set priority`]}</span>} arrow className='priority-tooltip menu-tooltip'>
                                                            <FlagIcon  className='table-cell-icon priority-icon mx-1' variant="contained"  onClick={(event) => handlePriorityPopoverClick(event, index)}></FlagIcon>
                                                        </Tooltip>
                                                                                        
                                                        <Popover
                                                            id={priorityPopOverId}
                                                            open={openPriorityPopover}
                                                            anchorEl={priorityPopoverAnchorEl}
                                                            onClose={handlePriorityPopoverClose}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'left',
                                                            }}
                                                            className='poopover'
                                                        >
                                                            <List disablePadding className='update-list-menu'>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={` priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'Critical')}>
                                                                    <ListItemText primary="Critical"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'High')}>
                                                                    <ListItemText primary="High"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                    </svg>
                                                                </div>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'Medium')}>
                                                                    <ListItemText primary="Medium" />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => handleUpdateTask(event, 'Low')}>
                                                                    <ListItemText primary="Low"  />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>
                                                        <Tooltip title={<span className='menu-tooltip-text'>{[`Set due date`]}</span>} arrow className='due-date-tooltip menu-tooltip'>
                                                            <AccessTimeIcon className={`table-cell-icon due-date-icon mx-1`} variant="contained" onClick={(event) => handleDueDatePopoverClick(event, index)}></AccessTimeIcon>
                                                        </Tooltip>

                                                        <Popover
                                                            id={dueDatePopOverId}
                                                            open={openDueDatePopover}
                                                            anchorEl={dueDatePopoverAnchorEl}
                                                            onClose={handleDueDatePopoverClose}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'left',
                                                            }}
                                                        >
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DateCalendar onChange={handleDateSelection} className={`${isCheckIconVisible ? 'calendar-hide' : ''}`}/>
                                                                <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                    </svg>
                                                                </div>
                                                                <div className={`pb-2 d-flex justify-content-around ${isCheckIconVisible ? 'calendar-hide' : ''}`}> 
                                                                    <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                                                                    <Button className='date-calendar-btn' onClick={handleUpdateTask} disabled={!selectedDate} >OK</Button>
                                                                </div>
                                                                
                                                            </LocalizationProvider>
                                                        </Popover>

                                                    {/* <MoreHorizRoundedIcon onClick={handleMoreTaskClick('right')} className='more-horiz'></MoreHorizRoundedIcon> */}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        
                                            )) }
                                            
                                        <Modal
                                            show={moreTaskmodalOpen}
                                            onHide={handleMoreTaskModalClose}
                                        >
                                            <div className='modal-parent row '>
                                                <Nav className='upper_more_task_nav m-0 b-0 d-flex justify-content-end'>
                                                        <Modal.Header closeButton>
                                                        </Modal.Header>
                                                </Nav>
                                                <Nav className=' more_task_nav row'>
                                                    
                                                    <div className='my-3 d-flex justify-content-between'>
                                                        
                                                        <div>
                                                            <Button className={`ms-0 ms-md-2 ${currentTaskStatus === 'Completed' ? 'menu-current-status-isCompleted' : ''}`} id="menu-current-status-btn"
                                                                aria-controls={openMenuStatus ? 'basic-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={openMenuStatus ? 'true' : undefined}
                                                                onClick={handleMenuStatusBtnClick}>
                                                                {currentTaskStatus} 
                                                            </Button>

                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={menuStatusanchorEl}
                                                                open={openMenuStatus}
                                                                onClose={handleMenuStatusBtnClose}
                                                                MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                {otherStatusesArray.map((otherStatuses) => (
                                                                    <MenuItem onClick={(event) => handleMenuStatusBtnClose(otherStatuses, event)} className='menu-change-status-btn'>{otherStatuses}</MenuItem>
                                                                ))}
                                                            </Menu>
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`Mark as Complete`]}</span>} arrow className='set-complete-tooltip d-none d-sm-inline menu-tooltip'>
                                                                <CheckIcon className={`mx-2 mx-md-3 set-task-complete-btn ${currentTaskStatus === 'Completed' ? 'set-task-complete-true-btn' : ''}`}  onClick={(event) => handleSetTaskCompleteBtn(event)}></CheckIcon>
                                                            </Tooltip>
                                                            

                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={menuPriorityanchorEl}
                                                                open={openMenuPriority}
                                                                onClose={handleMenuPriorityBtnClose}
                                                                MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                {userPriorities.map((userPriority) => (
                                                                    <MenuItem onClick={(event) => handleMenuPriorityBtnClose(userPriority, event)} className='menu-change-priority-btn'>
                                                                        <span className={`m-0 ${userPriority === 'Critical' ? 'more-task-priority-critical-btn' : ''}
                                                                                                ${userPriority === 'High' ? 'more-task-priority-high-btn' : ''}
                                                                                                ${userPriority === 'Medium' ? 'more-task-priority-medium-btn' : ''}
                                                                                                ${userPriority === 'Low' ? 'more-task-priority-low-btn' : ''}`}>
                                                                            <FlagIcon className='me-3'></FlagIcon>
                                                                        </span>
                                                                        {userPriority} {userPriority === currentTaskPriority && <CheckIcon className='ms-2'></CheckIcon>}
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>

                                                            {/* user does not have a current priority for this task */}
                                                            {currentTaskPriority === null ? 
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`Set priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip'>
                                                                <FlagIcon className='more-task-priority-btn mx-2 mx-md-5' variant="contained" onClick={handleMenuPriorityBtnClick} ></FlagIcon>
                                                            </Tooltip> 
                                                            :
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`${currentTaskPriority} priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip '>
                                                                <FlagIcon className={`mx-2 mx-md-5 more-task-current-priority-btn ${
                                                            currentTaskPriority === 'Critical' ? 'more-task-priority-critical-btn' :
                                                            currentTaskPriority === 'High' ? 'more-task-priority-high-btn' :
                                                            currentTaskPriority === 'Medium' ? 'more-task-priority-medium-btn' :
                                                            currentTaskPriority === 'Low' ? 'more-task-priority-low-btn' : ''
                                                            }`}
                                                                variant="contained" onClick={handleMenuPriorityBtnClick} ></FlagIcon>
                                                            </Tooltip> }

                                                            {/* <button className="btn nav-button px-0 px-md-1 py-1 py-md-0  user-button" 
                                                                >
                                                                <Badge badgeContent={'x'} color="secondary" className='more-task-user-button-badge '>
                                                                    <div className='more-task-user-button m-auto'>
                                                                        <p className='m-auto text-white initials'>{initials}</p>
                                                                    </div>
                                                                </Badge>
                                                                
                                                                
                                                            </button> */}
                                                            <Button className="btn px-0 px-md-1 py-1 py-md-0 more-task-user-button">
                                                                    <p className='m-auto text-white initials'>{initials}</p>
                                                                    <Tooltip title={<span className='menu-tooltip-text'>{[`Remove asignee`]}</span>} arrow className='task-settings-tooltip menu-tooltip'>
                                                                        <CancelIcon className="remove-user-cancel-icon " />
                                                                    </Tooltip>
                                                            </Button>

                                                            {/* <div className="divider"></div> */}
                                                        {/* </div> */}
                                                        {/* <div> */}
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`Task Settings`]}</span>} arrow className='task-settings-tooltip menu-tooltip'>
                                                                <MoreHorizIcon className='task-settings-btn mx-1 mx-md-5'></MoreHorizIcon>
                                                            </Tooltip>
                                                        </div>

                                                        <div>
                                                            <Tooltip title={<span className='created-date-tooltip-text menu-tooltip-text'>{[`Created by  ${userFullName} on ${currentTaskCreatedOn}`,<br />,`Last Updated on ${currentTaskUpdatedOn}`]}</span>} arrow className='created-date-tooltip menu-tooltip'>
                                                                <div className='created-date-div mx-2 mx-md-2'>
                                                                    <div className='created-text'>Created</div>
                                                                    <div className='created-date-text'>{currentTaskCreatedOn}</div>
                                                                </div>
                                                            </Tooltip>

                                                            <div className="divider"></div>
                                                            <div className='created-date-div mx-2 me-md-5' >
                                                                {currentTaskDueDate && currentTaskDueDate!=='Invalid Date' ? 
                                                                    <div>
                                                                        <div className='created-text'>Due Date</div>
                                                                        <div className='created-date-text '>
                                                                            {/* <Button > */}
                                                                                <CancelIcon className='remove-due-date-btn' onClick={handleRemoveDueDateClick}></CancelIcon>
                                                                            {/* </Button> */}
                                                                            {currentTaskDueDate}
                                                                        </div>
                                                                    </div>
                                                                :
                                                                <>
                                                                    <Tooltip title={<span className='menu-tooltip-text'>{[`Set due date`]}</span>} arrow className='due-date-create-tooltip menu-tooltip'>
                                                                        <div><EventIcon className='due-date-create-btn' onClick={(event) => handleDueDatePopoverClick(event, currentIndex)} ></EventIcon></div>
                                                                    </Tooltip>

                                                                    <Popover
                                                                    id={dueDatePopOverId}
                                                                    open={openDueDatePopover}
                                                                    anchorEl={dueDatePopoverAnchorEl}
                                                                    onClose={handleDueDatePopoverClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'bottom',
                                                                        horizontal: 'left',
                                                                    }}
                                                                    >
                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                        <DateCalendar onChange={handleDateSelection} className={`${isCheckIconVisible ? 'calendar-hide' : ''}`}/>
                                                                        <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                            </svg>
                                                                        </div>
                                                                        <div className={`pb-2 d-flex justify-content-around ${isCheckIconVisible ? 'calendar-hide' : ''}`}> 
                                                                            <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                                                                            <Button className='date-calendar-btn' onClick={handleUpdateTask} disabled={!selectedDate} >OK</Button>
                                                                        </div>
                                                                        
                                                                    </LocalizationProvider>
                                                                    </Popover>
                                                                </>
                                                                
                                                                }
                                                            </div> 
                                                        </div> 
                                                        
                                                    </div>
                                                </Nav>
                                                <div className='modal-wrapper col-xl'>
                                                    <div className="row" >
                                                        <div className='mt-2 mx-2 mb-2 pt-2' contentEditable={true} suppressContentEditableWarning={true}>
                                                            <p className='update-modal-task-name'>{currentTaskName}</p>
                                                        </div>

                                                        <div className='my-4 pt-2 mx-2 w-100 tt' contentEditable={true} suppressContentEditableWarning={true}>
                                                            <p className='update-modal-task-name' placeholder='n'>{currentTaskDescription}</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='modal-wrapper col-xl'>
                                                    <Modal.Dialog className='custom-width-modal'>
                                                        <Modal.Header closeButton className='modal-header'>
                                                            <Modal.Title className='default-tab-text'>{currentTaskName} - {currentTaskDescription}</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                            <h2
                                                                contentEditable={true}
                                                                suppressContentEditableWarning={true}
                                                                style={{ maxWidth: '100%', textAlign: 'center' }}
                                                            >
                                                                {currentTaskName}
                                                            </h2>
                                                            </div>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button
                                                            variant="primary"
                                                            className='default-tab-text create-task-btn'
                                                            >
                                                            <AddCircleRoundedIcon className='' />
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal.Dialog>
                                                </div>
                                            </div>
                                        </Modal>
                                        

                                </TableBody> 
                            </Table> 
                            </TableContainer>
                        </div>
                                <div className="mt-1 d-flex justify-content-center">
                                    <button className="btn create-task-button" onClick={handleCreateTaskModalOpen}>
                                        <AddTaskRoundedIcon className='add-task-icon'>
                                        </AddTaskRoundedIcon> 
                                        <span className='ps-2 default-tab-text'>Create new task</span>
                                    </button>
                                    
                                    <Modal show={createTaskModalOpen} onHide={handleCreateTaskModalClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='default-tab-text'>Create a task</Modal.Title>
                                        </Modal.Header>
                                    <Modal.Body>
                                        <Alert severity="error" className='w-75 mb-3'>Task Name is required</Alert>
                                        {missingNameError && <p className="pt-2 error-message default-tab-text">Please enter a name for your task</p>}

                                            <div className='pt-2'>
                                                <TextField
                                                id="outlined-basic"
                                                label="Name"
                                                value={taskName}
                                                autoComplete='off'
                                                className='pb-4 w-75'
                                                defaultValue={null}
                                                onChange={handleTaskNameChange}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                className='w-75'
                                                label="Description"
                                                value={taskDescription}
                                                autoComplete='off'
                                                defaultValue={null}
                                                onChange={handleTaskDescriptionChange}
                                                />
                                            </div>
                                            <div className='pt-4 w-75'>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={taskStatus}
                                                        defaultValue={null}
                                                        label="Status"
                                                        onChange={handleTaskStatusChange}
                                                        className=''
                                                        >
                                                        {/* <div> */}
                                                        <MenuItem value={'Stuck'} className=' text-dark status-item'>Stuck</MenuItem>
                                                        <MenuItem value={'To Do'} className=' text-dark status-item'>To Do</MenuItem>
                                                        <MenuItem value={'In Progress'} className=' text-dark status-item'>In Progress</MenuItem>
                                                        <MenuItem value={'Completed'} className=' text-dark status-item'>Completed</MenuItem>
                                                        {/* </div> */}
                                                        
                                                    </Select>
                                                </FormControl>
                                            <div className='pt-4'>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={taskPriority}
                                                    defaultValue={null}
                                                    label="Priority"
                                                    onChange={handleTaskPriorityChange}
                                                    >
                                                    <MenuItem value={'Critical'} className='bg-dark bg-critical text-white priority-item'>Critical</MenuItem>
                                                    <MenuItem value={'High'} className='bg-high text-white priority-item'>High</MenuItem>
                                                    <MenuItem value={'Medium'} className='bg-medium text-white priority-item'>Medium</MenuItem>
                                                    <MenuItem value={'Low'} className='bg-low text-white priority-item'>Low</MenuItem>
                                                    {/* <MenuItem value={'20'}>Twenty</MenuItem> */}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='pt-3 w-100' >
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DateField']}
                                                        label="Due Date" 
                                                        className='w-100'>
                                                            <DateField 
                                                                label="Due Date" 
                                                                className='w-100' 
                                                                value={taskDueDate}
                                                                onChange={handleTaskDueDateChange}
                                                            />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleCreateTask} className='default-tab-text create-task-btn'>
                                            <AddCircleRoundedIcon className=''></AddCircleRoundedIcon>
                                        </Button>
                                    </Modal.Footer>
                                    </Modal>
                                </div>
                            </Tab>
                            <Tab eventKey="overdueKey" className="pt-3" title="Overdue">
                                <p className='default-tab-text m-auto text-center pt-3'>No overdue tasks! 🥳</p>
                            </Tab>
                            <Tab eventKey="completedKey" className="pt-3 text-start ps-4 d-flex justify-content-center"title="Completed">
                                <ChecklistRtlRoundedIcon className='checklist-rtl-icon'/>
                                <p className='ps-4 mt-auto default-tab-text'>Your completed tasks will show up here!</p>
                            </Tab>
                        </Tabs>
                    </Card>
                </div>

                <div className='pt-4 col-lg d-flex justify-content-center'>
                    <Card className=' pb-3 my-card text-center' body>
                        <h4 className='tasks-text'>My Projects</h4>
                            <div className="projects-div">
                                <button className='btn  create-task-button'  >
                                        <AddTaskRoundedIcon></AddTaskRoundedIcon> 
                                        <span className='ps-2 default-tab-text'>Create new project</span>
                                </button>
                            </div>     
                    </Card>
                </div>
            </div>
        </Container>
        </>
    );
};

export default Home;