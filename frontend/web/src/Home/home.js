import React, { useState, useEffect } from 'react';
import { useLocalState } from "../utils/useLocalStorage";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import EventIcon from '@mui/icons-material/Event';
import FlagIcon from '@mui/icons-material/Flag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

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
import './home.css';





const Home = () => {
    
    const dayjs = require('dayjs');

    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});
    const todays_date = dayOfWeek + ", " + month + " " + date.getDate();

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
    };

    const handleRemoveDueDateClick = (event) => {
        setCurrentTaskDueDate(null);
        handleUpdateTask(event);
    }
    const handleMoreTaskModalClose = () => {
        setOtherStatusesArray(defaultStatuses);
        setMoreTaskModalOpen(false);
        setTaskDescriptionInputValue(null);
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
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDueDatePopoverClose = () => {
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false);
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
        getTaskInfo(jwt, setTaskData);
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
    const [menuSettingsanchorEl, setMenuSettingsAnchorEl] = React.useState(null);
    const openMenuSettings = Boolean(menuSettingsanchorEl);
    const handleMenuSettingsBtnClick = (event) => {
        setMenuSettingsAnchorEl(event.currentTarget);
    };
    const handleMenuSettingsBtnClose = (event) => {
        setMenuSettingsAnchorEl(null);
    };
    const handleDeleteTaskBtnClick = (event) => {
        setCurrentIndex(currentIndex);
        handleDeleteTask(event);
        setMoreTaskModalOpen(false);
    };
    const handleSetTaskCompleteBtn = (event) => {
        otherStatusesArray = userStatuses;

        otherStatusesArray.splice(otherStatusesArray.indexOf('Completed'), 1);
        setOtherStatusesArray(otherStatusesArray);

        setCurrentTaskStatus('Completed');
        
        handleUpdateTask(event);

    }

    //description related
    const [isInputFocused, setInputFocused] = useState(false);
    const [taskDescriptionInputValue, setTaskDescriptionInputValue] = useState('');

    const handleFocus = () => {
        setInputFocused(true);
    };

    const handleBlur = () => {
        setInputFocused(false);
    };

    const handleInputTaskDescriptionChange = (event) => {
        setTaskDescriptionInputValue(event.target.value);
        setCurrentTaskDescription(event.target.value);
        handleUpdateTask(event);
    };


    //Task name related
    const handleInputTaskNameChange = (event) => {
        if (event.type === 'input') {
            if (event.currentTarget.textContent === '') {
                console.log('empty!');
            }
            handleUpdateTask(event);
        } 
        else if (event.type === 'keydown' && event.key === 'Enter') {
            event.preventDefault();
        }
        
    };


    //Item type related (task, subtask, project)
    const [itemType, setItemType] = React.useState('Task');

    const handleItemTypeChange = (event) => {
        setItemType(event.target.value);
    };

    // Handler for tag input changes

    // const tagDataRef = useRef(tagData);


    useEffect(() => {
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
      }, [currentIndex]);
    //Tag related
    const TagMenuCustomToggle = React.forwardRef(({ children, onClick }, ref) => {
        const delayedClick = (e, currentIndex ) => {
            if(tagNameAbsent) setTagNameAbsent(false);
            setTagInputValue('');

            // console.log("real tag data below :)")
            // console.log(tagData);

            taskData[currentIndex].tags = tagData;
            console.log(taskData);

            e.preventDefault();
            setTimeout(() => {
                onClick(e);
            }, 80); 
        };
    
        return (
            <Tooltip
                title={<span className='create-tag-tooltip-menu-text'>{[`Create Tag`]}</span>}
                arrow
                className='create-tag-tooltip menu-tooltip'
            >
                <LocalOfferIcon
                    ref={ref}
                    className='tag-icon'
                    onClick={(event) => delayedClick(event, currentIndex)}
                >
                    {children}
                </LocalOfferIcon>
            </Tooltip> 
        );
    });
    const [tagInputValue, setTagInputValue] = useState('');
    const [tagNameAbsent, setTagNameAbsent] = useState(false);
    
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      
          return (
            <div 
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}

            >
              <Form.Control
                autoFocus
                className="my-2 m-auto menu-tag-form-control"
                placeholder="Search or Create New Tag"
                onChange={(e) => setTagInputValue(e.target.value)}
                onKeyDown={handleTagInputChange}
                value={tagInputValue}
                open={handleTagInputChange}
                />
                <ul className="list-unstyled">
                {React.Children.toArray(children).filter((child) => {
                    const childText = child.props.children.toLowerCase(); // Convert child text to lowercase
                    const inputValue = tagInputValue.toLowerCase(); // Convert input value to lowercase
                    return !inputValue || childText.startsWith(inputValue);
                })}
                </ul>
            </div>
          );
        },
      );
      const handleCreateTag = (event) => {
        createTagInfo(jwt, tagInputValue, taskData[currentIndex].id, tagData, setTagData);
    };

      const handleTagInputChange = (event) => {
        // console.log(tagDataRef.current);

        setTagNameAbsent(false);
        // handleGetTags();
        if (event.key === 'Enter') {
            if (tagInputValue === '') {
                setTagNameAbsent(true);
            } else {
                setTagNameAbsent(false);
                console.log("my entire tag data right here");
                console.log(allTagData);
                console.log(taskData[currentIndex]);
                for(let i = 0; i < allTagData.length;i++) {
                    if(allTagData[i].name === tagInputValue) {
                        const existingTag = allTagData[i];
                        addExistingTagInfo(jwt, existingTag, tagData, setTagData, taskData[currentIndex]);
                        taskData[currentIndex].tags = existingTag;
                        return;
                    }
                }
                handleCreateTag();
                setTagInputValue('');
            }
        }
        
    };


    // const handleGetTags = () => {
    //     getTagInfo(jwt, setTagData,taskData[currentIndex].id);
    // };


    // useEffect(() => {
    //     const fetchTagsData = async () => {
    //         try {
    //             console.log(currentIndex);
    //             const data =  await getTagInfo(jwt, tagData, setTagData, taskData[currentIndex].id);
    //             tagDataRef.current = data;
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };
    //     fetchTagsData();
    // },[]);
    

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
                                                        <button className='task-name-link' onClick={() => handleMoreTaskModalOpen(index, row.name, row.description, row.status, row.priority, row.taskIdNumber, row.createdOn, row.dueDate, row.lastUpdatedOn)}>
                                                            <span className={`ps-2 taskName-text ${row.status === 'Completed' ? ' strikethrough' : ''}`}>{row.name}</span> 
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
                                                    

                                                    <div className='my-3 d-flex  justify-content-md-between row'>
                                                        
                                                        <div className='col-12 col-lg-8'>
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
                                                                <CheckIcon className={`mx-2 mx-lg-3 set-task-complete-btn ${currentTaskStatus === 'Completed' ? 'set-task-complete-true-btn' : ''}`}  onClick={(event) => handleSetTaskCompleteBtn(event)}></CheckIcon>
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

                                                            {currentTaskPriority === null ? 
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`Set priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip'>
                                                                <FlagIcon className='more-task-priority-btn mx-2 mx-md-5' variant="contained" onClick={handleMenuPriorityBtnClick} ></FlagIcon>
                                                            </Tooltip> 
                                                            :
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`${currentTaskPriority} priority`]}</span>} arrow className='task-priority-tooltip menu-tooltip '>
                                                                <span className='more-task-current-priority-btn mx-2 mx-lg-3' onClick={handleMenuPriorityBtnClick}><FlagIcon className={`me-2   ${
                                                            currentTaskPriority === 'Critical' ? 'more-task-priority-critical-btn' :
                                                            currentTaskPriority === 'High' ? 'more-task-priority-high-btn' :
                                                            currentTaskPriority === 'Medium' ? 'more-task-priority-medium-btn' :
                                                            currentTaskPriority === 'Low' ? 'more-task-priority-low-btn' : ''
                                                            }`}
                                                                variant="contained"  ></FlagIcon><span className='more-task-priority-text'>{currentTaskPriority} priority</span></span>
                                                            </Tooltip> }
                                                            
                                                            <Button className="btn px-0 px-md-1 py-1 py-md-0 more-task-user-button">
                                                                    <p className='m-auto text-white initials'>{initials}</p>
                                                                    <Tooltip title={<span className='menu-tooltip-text'>{[`Remove asignee`]}</span>} arrow className='remove-asignee-tooltip menu-tooltip'>
                                                                        <CancelIcon className="remove-user-cancel-icon " />
                                                                    </Tooltip>
                                                            </Button>

                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={menuSettingsanchorEl}
                                                                open={openMenuSettings}
                                                                onClose={handleMenuSettingsBtnClose}
                                                                MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                    <MenuItem onClick={handleDeleteTaskBtnClick} className='menu-delete-task-btn'>
                                                                        Delete task
                                                                    </MenuItem>
                                                            </Menu>
                                                            <Tooltip title={<span className='menu-tooltip-text'>{[`Task Settings`]}</span>} arrow className='task-settings-tooltip menu-tooltip'>
                                                                <MoreHorizIcon className='task-settings-btn mx-1  ms-md-3 me-md-5' onClick={handleMenuSettingsBtnClick}></MoreHorizIcon>
                                                            </Tooltip>
                                                        </div>
                                                        {/* <div className=''> */}
                                                        <div className='mt-3 mt-lg-0 col-12 col-lg-4  d-flex justify-content-start justify-content-lg-end'>
                                                            <Tooltip title={<span className=' created-date-tooltip-text menu-tooltip-text'>{[`Created by  ${userFullName} on ${currentTaskCreatedOn}`,<br />,`Last Updated on ${currentTaskUpdatedOn}`]}</span>} arrow className='created-date-tooltip menu-tooltip'>
                                                                <div className='created-date-div mx-2  mx-md-2'>
                                                                    <div className='created-text'>Created</div>
                                                                    <div className='created-date-text'>{currentTaskCreatedOn}</div>
                                                                </div>
                                                            </Tooltip>

                                                            <div className="divider"></div>
                                                            <div className='created-date-div mx-2 me-md-0 me-lg-5' >
                                                                {currentTaskDueDate && currentTaskDueDate!=='Invalid Date' ? 
                                                                    <div>
                                                                        <div className='created-text'>Due Date</div>
                                                                        <div className='created-date-text '>
                                                                                <CancelIcon className='remove-due-date-btn' onClick={handleRemoveDueDateClick}></CancelIcon>
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
                                                        {/* </div> */}
                                                        
                                                        
                                                    </div>
                                                </Nav>
                                                <div className="container mt-4">
                                                    <div className="row ">
                                                        <div className="col-xl-6 mx-2">
                                                            <div className='update-task-name-content' contentEditable={true}  onInput={handleInputTaskNameChange} onKeyDown={handleInputTaskNameChange} suppressContentEditableWarning={true}
                                                                >
                                                                <h1 className='update-task-name kk'>{currentTaskName}</h1>
                                                            </div>
                                                            <div className='mt-3 '>

                                                                <Dropdown className='d-inline me-2'>
                                                                    <Dropdown.Toggle as={TagMenuCustomToggle} id="dropdown-custom-components" >
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu as={CustomMenu} className='tag-dropdown-menu tag-search-wrapper' >
                                                                        {tagNameAbsent && <p className='ms-3 pt-1 error-message'>Oops! Tag Name is required</p>}
                                                                        {/* <Dropdown.Item eventKey="red">Red</Dropdown.Item>
                                                                        <Dropdown.Item eventKey="blue">Blue</Dropdown.Item>
                                                                        <Dropdown.Item eventKey="orange">Orange</Dropdown.Item> */}
                                                                        
                                                                        {/* {tagData && tagData.map((r, index) => (
                                                                            <Dropdown.Item eventKey="m">{r.name}</Dropdown.Item>

                                                                        ))} */}
                                                                        {/* <div className=''> */}
                                                                            {allTagData && allTagData.map((tagRow, index) => (
                                                                                <Dropdown.Item eventKey={`${tagRow.name}`}>{tagRow.name}</Dropdown.Item>

                                                                            ))}
                                                                        {/* </div> */}
                                                                        

                                                                    </Dropdown.Menu>
                                                                </Dropdown>

                                                                

                                                                <FormControl className='mx-2'>
                                                                    <Select className='item-type-form'
                                                                    // defaultValue={"task"}
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        value={itemType}
                                                                        onChange={handleItemTypeChange}
                                                                    >
                                                                        <MenuItem value={'Task'} default >Task</MenuItem>
                                                                        <MenuItem value={'Subtask'} default>Subtask</MenuItem>
                                                                        <MenuItem value={'Project'}>Project</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                                {currentTaskIdNumber && <Tooltip title={<span className='copy-task-id-tooltip'>{[`Copy task ID`]}</span>} arrow className='copy-task-id-tooltip mx-3 menu-tooltip'>
                                                                    <Button className='ms-2 current-task-id-number-btn' onClick={() => {navigator.clipboard.writeText(currentTaskIdNumber)}}>{currentTaskIdNumber}</Button>
                                                                </Tooltip>}

                                                            </div>

                                                            <div className=' '>
                                                            {tagData && tagData.map((r, index) => (
                                                                    <Button className='me-2 mt-3 menu-tag-button'><span><LocalOfferIcon className='tag-icon-span me-1'></LocalOfferIcon></span>{r.name}</Button>
                                                                ))}
                                                            </div>

                                                            <div className='my-4 pt-2 w-100'>
                                                                
                                                                <TextareaAutosize
                                                                placeholder={!isInputFocused && !taskDescriptionInputValue && !currentTaskDescription ? 'Add description' : undefined}
                                                                // defaultValue={currentTaskDescription ? currentTaskDescription : ''}
                                                                fullWidth
                                                                className='more-task-description ps-3'
                                                                // startAdornment={
                                                                //     <InputAdornment position="start" className='more-task-description-adornment'>
                                                                //     {!isInputFocused && !inputValue  && <DescriptionIcon />}
                                                                //     </InputAdornment>
                                                                // }
                                                                onFocus={handleFocus}
                                                                onBlur={handleBlur}
                                                                onChange={handleInputTaskDescriptionChange}
                                                                value={taskDescriptionInputValue ? taskDescriptionInputValue : currentTaskDescription}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                        </div>
                                                    </div>
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
                                        <Button variant="primary" onClick={handleCreateTask} className='default-stringwiz-text create-task-btn'>
                                            Create
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