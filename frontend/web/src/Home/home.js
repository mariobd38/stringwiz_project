import React, { useState, useEffect } from 'react';
import { useLocalState } from "../utils/useLocalStorage";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';

import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';

import HomeNavbar from './HomeNavbar/homeNavbar';
import HomeHeader from './HomeHeader/homeHeader';
import {createTaskInfo} from '../DataManagement/Tasks/createTask';
import {getTaskInfo} from '../DataManagement/Tasks/getTasks';
import { updateTaskInfo } from '../DataManagement/Tasks/updateTask';
import { deleteTaskInfo } from '../DataManagement/Tasks/deleteTask';
import { createTagInfo } from '../DataManagement/Tags/createTag';
import { addExistingTagInfo } from '../DataManagement/Tags/addExistingTag';
import { getTagInfo } from '../DataManagement/Tags/getTags';
import { getAllTagsInfo } from '../DataManagement/Tags/getAllTags';
import HomeMoreTaskInfo from './HomeMoreTaskInfo/homeMoreTaskInfo';

import relax from '../images/stringwiz_relax.png';
import completed from '../images/cocollab_completed.png';

// import { Editor } from '../tinymce-react-demo/node_modules/@tinymce/tinymce-react';

import './home.css';





const Home = () => {

    const dayjs = require('dayjs');
    const [month, setMonth] = useState(dayjs().format('MMMM'));
    const [dayOfWeek, setDayOfWeek] = useState(dayjs().format('dddd'));

    const [jwt] = useLocalState("", "jwt");
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
    const [updatedTaskAttribute, setUpdatedTaskAttribute] = useState('');
    const [updatedTaskValue, setUpdatedTaskValue] = useState('');
    const [previousTaskAttributeValue, setPreviousTaskAttributeValue] = useState('');
 

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
    const [tagData, setTagData] = useState([]);
    const [allTagData, setAllTagData] = useState([]);

    const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);
    const handleCreateTaskModalOpen = () => setCreateTaskModalOpen(true);
    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentTaskDescription, setCurrentTaskDescription] = useState('');
    const [currentTaskStatus, setCurrentTaskStatus] = useState('');
    const [currentTaskPriority, setCurrentTaskPriority] = useState('');
    const [currentTaskCreatedOn, setCurrentTaskCreatedOn] = useState('');
    const [currentTaskUpdatedOn, setCurrentTaskUpdatedOn] = useState('');
    const [currentTaskDueDate, setCurrentTaskDueDate] = useState('');
    const [currentTaskIdNumber, setCurrentTaskIdNumber] = useState('');
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleCreateTaskModalClose = () => {
        setCreateTaskModalOpen(false);
        setMissingNameError(false); 
    };

    const [moreTaskModalOpen, setMoreTaskModalOpen] = useState(false);
    const defaultStatuses = ['Stuck', 'To Do', 'In Progress', 'Completed'];
    let userStatuses = defaultStatuses;
    let [otherStatusesArray, setOtherStatusesArray] = useState(userStatuses);

    const handleMoreTaskModalOpen = (index, taskName, taskDescription, taskStatus, taskPriority, taskIdNumber, taskCreatedOn, taskDueDate, taskUpdatedOn) => {
        console.log(taskData);
        setCurrentIndex(index);
        setCurrentTaskName(taskName);
        setCurrentTaskDescription(taskDescription);

        otherStatusesArray.splice(otherStatusesArray.indexOf(taskStatus), 1);
        setOtherStatusesArray(otherStatusesArray);
        setCurrentTaskStatus(taskStatus);

        setCurrentTaskPriority(taskPriority);
        setCurrentTaskIdNumber(taskIdNumber);

        const taskCreatedOnDate = dayjs(taskCreatedOn).format(`MMM D, h:mm a`);
        const taskUpdatedOnDate = dayjs(taskUpdatedOn).format(`MMM D, h:mm a`);
        const taskDueOnDate = dayjs(taskDueDate).format(`MMM D`);

        setCurrentTaskCreatedOn(taskCreatedOnDate);
        setCurrentTaskUpdatedOn(taskUpdatedOnDate);
        setCurrentTaskDueDate(taskDueOnDate);

        setMoreTaskModalOpen(true);
        console.log("tag data bbelow");

        console.log(allTagData);
    };


    //status popovers
    const [statusPopoverAnchorEl, setStatusPopoverAnchorEl] = useState(null);

    const handleStatusPopoverClick = (event, index) => {
        setStatusPopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        setCurrentTaskStatus(taskData[index].status);
        // console.log("INDEX:  " + index)
        console.log(taskData[index].status);
    };

    const handleStatusPopoverClose = () => {
        setStatusPopoverAnchorEl(null);
        setCurrentTaskStatus(null);
    };

    const openStatusPopover = Boolean(statusPopoverAnchorEl);
    const statusPopOverId = openStatusPopover ? 'simple-popover' : undefined;



    //priority popovers
    const [priorityPopoverAnchorEl, setPriorityPopoverAnchorEl] = useState(null);

    const handlePriorityPopoverClick = (event, index) => {
        setPriorityPopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        setCurrentTaskPriority(taskData[index].priority);
    };

    const handlePriorityPopoverClose = () => {
        setPriorityPopoverAnchorEl(null);
        setCurrentTaskPriority(null);
    };

    const openPriorityPopover = Boolean(priorityPopoverAnchorEl);
    const priorityPopOverId = openPriorityPopover ? 'simple-popover' : undefined;

    //due date popovers
    const [currentIndex, setCurrentIndex] = useState(null);

    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);

    const handleDueDatePopoverClick = (event, index) => {
        setDueDatePopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        setCurrentTaskDueDate(taskData[index].dueDate); //new
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDueDatePopoverClose = () => {
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false); 
        setCurrentTaskDueDate(null); //new
    };

    const openDueDatePopover = Boolean(dueDatePopoverAnchorEl);
    const dueDatePopOverId = openDueDatePopover ? 'simple-popover' : undefined;

    const handleDateSelection = (date) => {
        setSelectedDate(date);
        // setCurrentTaskDueDate(taskData[].dueDate);
    };

    //delete task popovers
    const [deleteTaskPopoverAnchorEl, setDeleteTaskPopoverAnchorEl] = useState(null);

    const handleDeleteTaskPopoverClick = (event, index) => {
        setDeleteTaskPopoverAnchorEl(event.currentTarget);
    };

    const handleDeleteTaskPopoverClose = () => {
        setDeleteTaskPopoverAnchorEl(null);
    };

    const deleteTaskPopover = Boolean(deleteTaskPopoverAnchorEl);
    const deleteTaskPopOverId = deleteTaskPopover ? 'simple-popover' : undefined;


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
    // const handleGetTasks = () => {
    //     getTaskInfo(jwt, setTaskData);

    // };

    //update task call
    const handleUpdateTask = (event) => {
        setOpenSnackbar(false);
        updateTaskInfo(
            currentIndex, 
            event,
            taskData,
            selectedDate,
            dayjs,
            moreTaskModalOpen,
            setCheckIconVisible,
            handleDueDatePopoverClose,
            setCurrentTaskDueDate,
            handlePriorityPopoverClose,
            handleStatusPopoverClose,
            jwt,
            setOpenSnackbar,
            setUpdatedTaskValue,
            setUpdatedTaskAttribute
            );
        // console.log("new priority value: " + taskData[currentIndex]);
        setUpcomingTasks(taskData);
        setUpdatedTaskValue(taskData[currentIndex].priority);
        console.log("UPCOMING!!");
        console.log(upcomingTasks);

    };
    //delete task call
    const handleDeleteTask = (event) => {
        deleteTaskInfo(
            currentIndex, 
            taskData,
            setTaskData,
            jwt );
            handleMenuSettingsBtnClose();
        
    };


    useEffect(() => {
        const fetchAndSetTabs = async () => {
            setMonth(dayjs().format('MMMM'));
            setDayOfWeek(dayjs().format('dddd'));

            var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
            now = dayjs().format('YYYY-MM-DD');

            const todays_date = now;
            const upcoming = [];
            const overdue = [];
            const completed = [];

            taskData.forEach((task) => {
                
                if ((task.dueDate == null || task.dueDate >= todays_date) && task.status !== 'Completed') {
                    upcoming.push(task);
                } else if (todays_date > task.dueDate && task.status !== 'Completed') {
                    overdue.push(task);
                }else if (task.status === 'Completed') {
                    completed.push(task);
                } 
            });

                setUpcomingTasks(upcoming);
                setOverdueTasks(overdue);
                setCompletedTasks(completed);
            };
        fetchAndSetTabs();
    }, [taskData]);
    


      const completeTask = (index) => {
        let updatedTaskData = [...taskData];
        updatedTaskData[index].status = 'Completed';

        setTaskData(updatedTaskData);

        setTimeout(function() {
            const newTaskData = updatedTaskData.filter((task, i) => i !== index);

            setTaskData(newTaskData);

          }, 600);
      };

    const [menuSettingsanchorEl, setMenuSettingsAnchorEl] = React.useState(null);
    const handleMenuSettingsBtnClose = (event) => {
        setMenuSettingsAnchorEl(null);
    };

    // Handler for tag input changes

    useEffect(() => {
        getTaskInfo(jwt, setTaskData, setUpcomingTasks);
        setUpcomingTasks(taskData);

        const fetchTagsData = async () => {
            try {
                const data = await getTagInfo(jwt, tagData, setTagData, taskData[currentIndex].id);
                
                setTagData(data);
                

                getAllTagsInfo(jwt,setAllTagData);
            } catch (e) {
                console.log(e);
            }
        };
            fetchTagsData();
    }, [currentIndex, setTagData]);
    
    
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleSnackbarClick = () => {
        setOpenSnackbar(true);
    };
  
    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnackbar(false);
    };
  
    const action = (
      <React.Fragment>
        <Button className='snackbar-undo-btn lato-font' size="small" onClick={handleSnackbarClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleSnackbarClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    const hours = Array.from({ length: 24 }, (_, index) => {
        const hour = index === 0 ? 12 : index > 12 ? index-12 : index; // Adjusting the 0th hour to 12 am
        const period = index < 12 ? 'am' : 'pm'; // Determining the period (am or pm)

        return `${hour} ${period}`;
    });
    const timeBlocks = Array.from({ length: 24 }, (_, index) => '');//String.fromCharCode(65 + index)''); // Generates an array of 23 characters starting from 'A'

    const [modalShow, setModalShow] = useState(false);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    function DeleteTaskConfirmModal(props) {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title className="m-auto text-center lato-font-600" id="contained-modal-title-vcenter">
              <h4 className='text-center m-auto lato-font-600' style={{color: '#1e1f21'}} >Are you sure you want to delete this task?</h4>
              {/* Are you sure you want to delete this task? */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='py-4'>
              {/* <h4 className='text-center lato-font-600 mb-3'>Are you sure you want to delete this task?</h4> */}
              <div className='d-flex justify-content-center '>
                <Button className='mx-4 delete-task-cancel-btn' onClick={props.onHide}><BlockIcon className='mb-1 me-1 delete-task-modal-icon'></BlockIcon>Cancel</Button>
                <Button className='mx-4 delete-task-btn'><DeleteIcon className='mb-1 me-1 delete-task-modal-icon'></DeleteIcon>Delete Task</Button>
              </div>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-start py-0'>
                    <FormGroup >
                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <Typography
                            className='lato-font'
                            style={{fontSize: '0.94rem', color: '#1e1f21'}}
                            >
                                Do not show message again
                            </Typography>
                        }
                    />                    
                    </FormGroup>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <>
        <HomeNavbar></HomeNavbar>    
        <Container >
            <HomeHeader></HomeHeader>
            
            <div className='row pb-4 '>
                <div className='pt-4  col-xl d-flex justify-content-center'>
                    <Card className='my-card  m-0' body
                        ><h4 className='tasks-text text-center'>My Tasks</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>
                            <Tab eventKey="homeKey" className="home-tab" title="Upcoming">
                                <div className="table-container-wrapper">
                                    <TableContainer className="table-container" >
                                        <Table sx={{ }} aria-label="simple table">
                                        <TableBody>
                                            {upcomingTasks.map((row, index) => (
                                            <TableRow key={index} className='table-row'>
                                                <TableCell component="th" scope="row" className='lato-font d-flex align-items-center justify-content-between table-cell'>
                                                    <div className='d-flex align-items-center'>
                                                        <CheckCircleIcon className='ps-1 pb-1 mt-1 task-check table-cell-icon' onClick={() => completeTask(index)} />
                                                        <button className='task-name-link' onClick={() => handleMoreTaskModalOpen(index, row.name, row.description, row.status, row.priority, row.taskIdNumber, row.createdOn, row.dueDate, row.lastUpdatedOn)}>
                                                            <span className={`ps-2 taskName-text ${row.status === 'Completed' ? ' strikethrough' : ''}`}>{row.name} </span> 
                                                        </button>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <Tooltip title={<span className='lato-font'>{[`Set status`]}</span>} arrow className='status-tooltip menu-tooltip'>
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
                                                                    <ListItemButton  className={`status-list-item-btn`} onClick={handleUpdateTask}>
                                                                    <ListItemText primary="Stuck"/>{currentTaskStatus === 'Stuck' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn`} onClick={handleUpdateTask}>
                                                                    <ListItemText primary="To Do"/>{currentTaskStatus === 'To Do' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn`} onClick={handleUpdateTask}>
                                                                    <ListItemText primary="In Progress"/>{currentTaskStatus === 'In Progress' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn`} onClick={handleUpdateTask}>
                                                                    <ListItemText primary="Completed"/>{currentTaskStatus === 'Completed' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>

                                                        <Tooltip title={<span className='lato-font'>{[`Set priority`]}</span>} arrow className='priority-tooltip menu-tooltip'>
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
                                                                {/* <p className='text-center py-2 bg-warning lato-font'>Update Priority</p> */}
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn`} onClick={handleUpdateTask}>
                                                                        <ListItemText primary="Critical"/>{currentTaskPriority === 'Critical' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn`} onClick={handleUpdateTask}>
                                                                        <ListItemText primary="High"/>{currentTaskPriority === 'High' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn`} onClick={handleUpdateTask}>
                                                                        <ListItemText primary="Medium" />{currentTaskPriority === 'Medium' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn`} onClick={handleUpdateTask}>
                                                                        <ListItemText primary="Low"  />{currentTaskPriority === 'Low' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>

                                                        <Tooltip title={<span className='lato-font'>{[`Set due date`]}</span>} arrow className='due-date-tooltip menu-tooltip'>
                                                            <AccessTimeIcon className={`table-cell-icon due-date-icon mx-1`} variant="contained" onClick={(event) => handleDueDatePopoverClick(event, index)}></AccessTimeIcon>
                                                        </Tooltip>
                                                        <Popover
                                                            id={deleteTaskPopOverId}
                                                            open={deleteTaskPopover}
                                                            anchorEl={deleteTaskPopoverAnchorEl}
                                                            onClose={handleDeleteTaskPopoverClose}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'left',
                                                            }}
                                                        >
                                                            <List disablePadding className='update-list-menu'>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton  className={`status-list-item-btn`} onClick={handleUpdateTask}>
                                                                    <ListItemText primary="Stuck"/>{currentTaskStatus === 'Stuck' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn`} onClick={handleUpdateTask}>
                                                                    <ListItemText primary="To Do"/>{currentTaskStatus === 'To Do' ? <CheckIcon></CheckIcon>: ''}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>

                                                        


                                                        <Popover
                                                            id={dueDatePopOverId}
                                                            open={openDueDatePopover}
                                                            anchorEl={dueDatePopoverAnchorEl}
                                                            onClose={handleDueDatePopoverClose}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'left',
                                                            }} >
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DateCalendar onChange={handleDateSelection} defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate) : undefined} className={`${isCheckIconVisible ? 'calendar-hide' : ''}`}/>
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
                                                        <Tooltip title={<span className='lato-font'>{[`Delete task`]}</span>} arrow className='delete-task-tooltip menu-tooltip'>
                                                            <DeleteIcon className={`table-cell-icon delete-task-icon mx-1`} variant="contained" onClick={() => setModalShow(true)}></DeleteIcon>
                                                        </Tooltip>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                            )) }
                                            {/* TODO: remove example snackbar */}
                                            <div>
                                                <Snackbar
                                                    open={openSnackbar}
                                                    autoHideDuration={3150}
                                                    onClose={handleSnackbarClose}
                                                    message={`${updatedTaskAttribute} set to ${updatedTaskValue}`}
                                                    action={action}
                                                />
                                            </div>
                                            
                                            <div>
                                                <DeleteTaskConfirmModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </div>
                                        <HomeMoreTaskInfo 
                                            moreTaskModalOpen={moreTaskModalOpen} setMoreTaskModalOpen={setMoreTaskModalOpen} dayjs={dayjs} jwt={jwt} taskData={taskData} tagData={tagData} setTagData={setTagData} allTagData={allTagData} 
                                            currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} currentTaskName={currentTaskName} currentTaskDescription={currentTaskDescription} 
                                            setCurrentTaskDescription={setCurrentTaskDescription} currentTaskStatus={currentTaskStatus} setCurrentTaskStatus={setCurrentTaskStatus} currentTaskPriority={currentTaskPriority} 
                                            setCurrentTaskPriority={setCurrentTaskPriority} currentTaskIdNumber={currentTaskIdNumber} currentTaskCreatedOn={currentTaskCreatedOn} currentTaskUpdatedOn={currentTaskUpdatedOn}
                                            currentTaskDueDate={currentTaskDueDate} setCurrentTaskDueDate={setCurrentTaskDueDate} handleUpdateTask={handleUpdateTask} handleDeleteTask={handleDeleteTask} 
                                            setAllTagData={setAllTagData} addExistingTagInfo={addExistingTagInfo} setUpcomingTasks={setUpcomingTasks} setTaskData={setTaskData}
                                            handleMoreTaskModalOpen={handleMoreTaskModalOpen} >
                                        </HomeMoreTaskInfo>
                                        
                                </TableBody> 
                            </Table> 
                            </TableContainer>
                        </div>
                                <div className="mt-1 d-flex justify-content-center">
                                    <button className="btn create-task-button" onClick={handleCreateTaskModalOpen}>
                                        <AddTaskRoundedIcon className='add-task-icon'>
                                        </AddTaskRoundedIcon> 
                                        <span className='ps-2 lato-font'>Create new task</span>
                                    </button>
                                    
                                    <Modal show={createTaskModalOpen} onHide={handleCreateTaskModalClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='lato-font'>Create a task</Modal.Title>
                                        </Modal.Header>
                                    <Modal.Body>
                                        <Alert severity="error" className='w-75 mb-3'>Task Name is required</Alert>
                                        {missingNameError && <p className="pt-2 error-message lato-font">Please enter a name for your task</p>}

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
                                                    <MenuItem value={'Critical'} className='text-dark priority-item'>Critical</MenuItem>
                                                    <MenuItem value={'High'} className='text-dark priority-item'>High</MenuItem>
                                                    <MenuItem value={'Medium'} className='text-dark priority-item'>Medium</MenuItem>
                                                    <MenuItem value={'Low'} className='text-dark priority-item'>Low</MenuItem>
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
                                        <Button variant="primary" onClick={handleCreateTask} className='default-stringwiz-text create-task-btn'>
                                            Create
                                        </Button>
                                    </Modal.Footer>
                                    </Modal>
                                </div>
                            </Tab>
                            <Tab eventKey="overdueKey" className="home-tab" title="Overdue">
                                <div className='d-flex align-items-around flex-column '>
                                <p className='lato-font-600 m-auto pt-3 no-tasks-desc'>Nice work! No overdue tasks 🥳</p>
                                   
                                   <div className='d-flex pt-4'>
                                        <a className="m-auto  text-center ">
                                            <img src={relax} className="tab-home-illustration" alt="relax" />
                                        </a>

                                    </div>

                                </div>
                                
                            </Tab>
                            <Tab eventKey="completedKey" className="home-tab" title="Completed">
                                <div className='d-flex align-items-around flex-column '>
                                    <p className='lato-font-600 m-auto pt-3 no-tasks-desc '>Your completed tasks will appear here ✅</p>
                                    
                                    <div className='d-flex pt-4'>
                                        <a className="m-auto  text-center ">
                                            <img src={completed} className="tab-home-illustration" alt="relax" />
                                        </a>

                                    </div>

                                </div>
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
                                        <span className='ps-2 lato-font'>Create new project</span>
                                </button>
                            </div>     
                    </Card>
                </div>
            </div>

            <div className='row pb-4 '>
                <div className='pt-4  col-12 col-lg-5 d-flex justify-content-center'>
                    <Card className='my-card  m-0' body>
                        <h4 className='tasks-text text-center'>Reminders</h4>
                    </Card>
                </div>

                <div className='pt-4 col-12 col-lg-7 d-flex justify-content-center'>
                    <Card className=' pb-3 my-card text-center hell' body>
                        <h4 className='tasks-text '>Daily Calendar</h4>
                        {/* {month}, {dayOfWeek}       */}
                        <div className='pt-3 p-3'>
                            <div class="container p-0 ">
                                <div class="row  d-flex justify-content-center lato-font">
                                    <div className='p-0 col col-2 col-sm-1'>
                                        {hours.map((timeSlot, index) => (
                                            <div key={index} className="time-column align-items-start d-flex justify-content-end pe-2">
                                                {timeSlot}
                                            </div>
                                        ))}
                                    </div>
                                    <div className=' mt-2 p-0 col col-10 col-sm-11'>
                                        {timeBlocks.map((block, index) => (
                                            <div key={index} className="time-block">
                                                {block}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </Card>
                </div>
            </div>
        </Container>
        </>
    );
};

export default Home;