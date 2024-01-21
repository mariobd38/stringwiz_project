import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../utils/useLocalStorage";
import { useCookies } from "../../utils/useCookies";

import Card from 'react-bootstrap/Card';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
// import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';

import HomeNavbar from './HomeNavbar/homeNavbar';
import HomeHeader from '../Home/HomeHeader/homeHeader';

import {getTaskInfo} from './../../DataManagement/Tasks/getTasks';
import {createTaskInfo} from './../../DataManagement/Tasks/createTask';
import {updateTaskInfo} from './../../DataManagement/Tasks/updateTask';

import milestones from '../../images/milestones.png';
import NewHomeDueDatePopover from './newHomeDueDatePopover';


import './newHome.css';

const NewHome = () => {
    const dayjs = require('dayjs');
    // const [month, setMonth] = useState(dayjs().format('MMMM'));
    // const [dayOfWeek, setDayOfWeek] = useState(dayjs().format('dddd'));
    const [jwt] = useLocalState("", "jwt");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [taskData, setTaskData] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [today, setToday] = useState(null);

    useEffect(() => {
        const fetchAndSetTabs = async () => {
            // setMonth(dayjs().format('MMMM'));
            // setDayOfWeek(dayjs().format('dddd'));

            // var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
            var now = dayjs().format('YYYY-MM-DD');
            setToday(now);

            const todays_date = now;
            const upcoming = [];
            const overdue = [];
            const completed = [];

            taskData.forEach((task) => {
                
                if ((task.dueDate == null || task.dueDate >= todays_date) && task.status !== 'Completed') {
                    upcoming.push(task);
                } else if (todays_date > task.dueDate && task.status !== 'Completed') {
                    upcoming.push(task);
                }else if (task.status === 'Completed') {
                    completed.push(task);
                } 
            });

                setUpcomingTasks(upcoming);
                // setOverdueTasks(overdue);
                // setCompletedTasks(completed);
            };
        fetchAndSetTabs();
        
        // contentEditableRef.current.focus();
    }, [taskData, upcomingTasks]);

    useEffect(() => {
        getTaskInfo(jwt, setTaskData, setUpcomingTasks);
        setUpcomingTasks(taskData);

        // const fetchTagsData = async () => {
        //     try {
        //         const data = await getTagInfo(jwt, tagData, setTagData, taskData[currentIndex].id);
                
        //         setTagData(data);
                

        //         getAllTagsInfo(jwt,setAllTagData);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // };
        //     fetchTagsData();
    }, [currentIndex, upcomingTasks, setUpcomingTasks]);

    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);
    const [newTaskName, setNewTaskName] = useState(null);
    const [userTasks, setUserTasks] = useLocalState([], "userTasks");
    //const [missingNameError, setMissingNameError] = useState(false);



    const handleNewTaskClick = () => {
        setNewTaskRowOpen((prev) => !prev);
    };

    const handleNewTaskClickAway = () => {
        setNewTaskRowOpen(false);
    };

    const handleTaskCreate = (event) => {

        // handleGetTags();
        if (event.key === 'Enter' && event.target.value !== '') {
            setNewTaskName(event.target.value);
            // console.log(event.target.value);
            createTaskInfo(
                dayjs,
                event.target.value,
                null,
                null,
                null,
                null,
                null,
                setTaskData,
                setUserTasks,
                jwt,
                taskData,
                userTasks );
            setNewTaskRowOpen(false);
        }
    };

    //due date popovers
    const [currentTaskDueDate, setCurrentTaskDueDate] = useState('');

    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);

    const handleDueDatePopoverClick = (event, index) => {
        console.log(dueDateClockIsOpen);
        setDueDatePopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        setCurrentTaskDueDate(upcomingTasks[index].dueDate);
        setDueDateClockIsOpen(false);
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDueDatePopoverClose = () => {
        console.log("yol");
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false); 
        setSelectedTime(false);
        setCurrentTaskDueDate(null);
        setDueDateClockIsOpen(false);
    };

    const formatDate = (dateString) => {
        const dueDateDiffFromToday = dayjs(dateString).diff(today, 'day');

        if (dueDateDiffFromToday < 6) {
            if (dueDateDiffFromToday < 0)
                return "Overdue";
            if (dueDateDiffFromToday === 0)
                return 'Due today';
            if (dueDateDiffFromToday === 1)
                return 'Due tomorrow';
            return `Due ${dayjs(dateString).format('dddd')}`;
        }

        if (dayjs(dateString).year() === dayjs().year()) {
            return `Due ${dayjs(dateString).format('MMM D')}`;
        } else {
            return `Due ${dayjs(dateString).format('MMM D, YYYY')}`;
        }
      };
    
    const [dueDateClockIsOpen, setDueDateClockIsOpen] = useState(false);

    //update task call
    const handleUpdateTask = (event) => {
        console.log("inside update");
        console.log(selectedDate);
        if (selectedDate === null && currentTaskDueDate !== null) {
            setSelectedDate(currentTaskDueDate);
        }

        updateTaskInfo(
            currentIndex, 
            event,
            taskData,
            selectedDate,
            dayjs,
            false,
            handleDueDatePopoverClose,
            setCurrentTaskDueDate,
            null,
            null,
            jwt,
            null,
            null,
            null
            );
        setUpcomingTasks(taskData);
        console.log("UPCOMING!!");
        console.log(upcomingTasks);
        setDueDateClockIsOpen(false);

    };

    const taskCard = 
            <Card
                style={{ width:'85%', fontFamily: 'Nunito Sans', border: "2.5px solid #505050" }}
            >
                <Card.Header 
                    style={{
                        backgroundColor: '#162561',
                        borderBottom: "1px solid #505050",
                        borderTopColor: "#505050"
                    }} 
                    className='d-flex align-items-center py-3 d-flex justify-content-between user-home-card-header' >
                    <div className='d-flex align-items-center' style={{ color: '#fafafa' }}>
                        <ChecklistRtlRoundedIcon className='me-3 user-home-checklist-icon'/>
                        <span className='d-flex align-items-center'>
                            Tasks
                            <LockIcon className='ms-2' style={{ width: "1.1rem" }}/>
                        </span>
                    </div>
                    <div className='me-2' style={{ color: "#fafafa" }}>
                        <MoreHorizRoundedIcon />
                    </div>
                    
                </Card.Header>
                <Card.Body className='pt-3 ' style={{ padding: "0", backgroundColor: "#1E1F21" }}>
                    
                    <div className='table-container-wrapper'>
                        <TableContainer className='table-container' >
                            <Table>
                                <TableBody >
                                    <ClickAwayListener onClickAway={handleNewTaskClickAway}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Button className='user-home-create-task-button-dark d-flex align-items-center ms-2 mb-2'
                                                style={{ color: "#919191" }} onClick={handleNewTaskClick}
                                            >
                                                <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                                <span className='me-1' style={{ fontSize: '0.95rem' }}>Create task</span>
                                            </Button>
                                            <div className='w-100 table-row-dark'>
                                            {newTaskRowOpen ? (
                                                <TableRow className='table-row-new-dark' style={{backgroundColor: "#1E1F21", width: "100%"}} >
                                                    <TableCell scope="row" className='d-flex align-items-center justify-content-between table-cell'>
                                                        <div className='d-flex align-items-center mb-1 m-0' style={{color: "#fafafa"}}>
                                                            <div>
                                                                <CheckRoundedIcon className='user-home-task-check-icon' />
                                                            </div>
                                                            <div>
                                                                <input onKeyDown={handleTaskCreate} placeholder='Task name' autoFocus="autofocus" className={`ps-2 taskName-text user-home-new-task-input fafafa-color`} contentEditable={true} /> 
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ) : null}
                                            </div>
                                            
                                        </Box>
                                </ ClickAwayListener>
                                    {upcomingTasks.map((row, index) => (
                                    <TableRow key={index} className='table-row-dark' style={{ backgroundColor: "#1E1F21" }}>
                                        <TableCell scope="row" className='d-flex align-items-center justify-content-between table-cell'>
                                            <div className='d-flex justify-content-between w-100'>
                                                {/* Left Content */}
                                                <div className='d-flex align-items-center mb-1 left' style={{ color: "#fafafa" }}>
                                                    <div>
                                                        <CheckRoundedIcon className='user-home-task-check-icon' />
                                                    </div>
                                                    <div>
                                                        <button className='task-name-link '>
                                                        <span className={`ps-2 taskName-text ${row.status === 'Completed' ? ' strikethrough' : ''}`}>
                                                            {row.name}
                                                        </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {!upcomingTasks[index].dueDate ? 
                                                    <Tooltip placement="top" title={<span className='nunito-sans-font ' style={{transition: "transition: width 1.2s ease-in-out"}}>{[`Add Due Date`]}</span>} arrow className='menu-tooltip'>

                                                        <div className='d-flex align-items-center user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index)}>
                                                            <CalendarTodayRoundedIcon className='user-home-calendar-icon '/>
                                                        </div>
                                                    </Tooltip> :
                                                    <div style={{ color: "#a7a7a7" }} className={`lato-font`} onClick={(event) => handleDueDatePopoverClick(event, index)}
                                                    >
                                                        {formatDate(upcomingTasks[index].dueDate) === 'Overdue' ? (
                                                            <span className='error-message'>Overdue</span>
                                                        ) : (
                                                            <span>{formatDate(upcomingTasks[index].dueDate)}</span>
                                                        )}
                                                    </div>
                                                }
                                                <NewHomeDueDatePopover 
                                                    currentTaskDueDate={currentTaskDueDate} dueDatePopoverAnchorEl={dueDatePopoverAnchorEl} handleDueDatePopoverClose={handleDueDatePopoverClose} today={today} handleUpdateTask={handleUpdateTask}
                                                    selectedDate={selectedDate} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} setDueDateClockIsOpen={setDueDateClockIsOpen} dueDateClockIsOpen={dueDateClockIsOpen}
                                                />
                                                {/* <Popover
                                                    id={dueDatePopOverId}
                                                    open={openDueDatePopover}
                                                    anchorEl={dueDatePopoverAnchorEl}
                                                    onClose={handleDueDatePopoverClose}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }} 
                                                    >
                                                        {!dueDateClockIsOpen ?
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DateCalendar onChange={handleDateSelection} className='user-home-date-picker' defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate) : dayjs(today)} style={{backgroundColor: "#121212", borderTopColor: "#121212", color: "#fafafa"}}/>
                                                            <div className={`pb-2 d-flex justify-content-around m-auto`} style={{backgroundColor: "#121212"}}> 
                                                                <div className='m-auto'>
                                                                    <AccessTimeRoundedIcon className='date-time-picker-btn' onClick={openDueDateClock}/>
                                                                </div>
                                                                <div className='mx-5 me-4'>
                                                                    <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                                                                    <Button className='date-calendar-btn' disablePast onClick={handleUpdateTask}  >OK</Button>
                                                            
                                                                </div>
                                                            </div>
                                                            
                                                        </LocalizationProvider> : 
                                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                            
                                                            <StaticTimePicker className='user-home-time-picker' />
                                                            <div className={`pb-2 d-flex justify-content-around m-auto`} style={{backgroundColor: "#121212"}}> 
                                                                <div className='m-auto'>
                                                                    <CalendarTodayRoundedIcon className='date-time-picker-btn' onClick={openDueDateClock}/>
                                                                </div>
                                                                <div className='mx-5 me-4'>
                                                                    <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                                                                    <Button className='date-calendar-btn' disabled={!selectedDate} >OK</Button>
                                                            
                                                                </div>
                                                            </div>
                                                        </LocalizationProvider>

                                                        }
                                                </Popover> */}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody> 
                            </Table>
                        </TableContainer>
                    </div>
                </Card.Body>
            </Card>

    return (
        <>
            <HomeNavbar></HomeNavbar>
            <div className="row mx-5  user-home-all-content">
                <HomeHeader />

                <div className='row pt-3 d-none d-md-flex px-0 m-0'> 
                    <div className="col-6 col-lg-4 d-flex justify-content-center pb-4 pb-xxl-0">
                        <div className='home-header-stat-block'>
                            <div className='d-flex justify-content-between home-header-stat-block-top'>
                                <div className='ms-3 home-header-stat-block-num pt-1'><span>0</span></div>
                                <div className='me-3 home-header-stat-block-text pt-3'><FolderOpenRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex align-items-start pt-1 bg-secondary home-header-stat-block-bottom'>
                                <div className='ms-3'><span className='home-header-stat-block-text'>Active projects</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-4 d-flex justify-content-center">
                        <div className='home-header-stat-block'>
                            <div className='d-flex justify-content-between home-header-stat-block-top'>
                                <div className='ms-3 home-header-stat-block-num pt-1'><span>{upcomingTasks.length}</span></div>
                                <div className='me-3 home-header-stat-block-text pt-3'><PublishedWithChangesRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex align-items-start pt-1 bg-secondary home-header-stat-block-bottom'>
                                <div className='ms-3'><span className='home-header-stat-block-text'>Ongoing tasks</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 d-flex justify-content-center pb-4 pb-xxl-0">
                        <div className='home-header-stat-block'>
                            <div className='d-flex justify-content-between home-header-stat-block-top'>
                                <div className='ms-3 home-header-stat-block-num pt-1'><span>0</span></div>
                                <div className='me-3 home-header-stat-block-text pt-3'><CheckRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex align-items-start pt-1 bg-secondary home-header-stat-block-bottom'>
                                <div className='ms-3'><span className='home-header-stat-block-text'>Tasks completed</span></div>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className='d-flex mt-4 px-5 user-home-data-content' >
                    <div className='user-home-main-content py-3' style={{ paddingLeft: "3.5rem"}}>
                        <div className='d-flex justify-content-between py-2'>
                            {taskCard}
                        </div>
                    </div>
                    <div className='user-home-right-content mt-4 d-none d-md-block'>
                        <div className='pt-3 pb-5 px-4 user-home-milestones-block ' style={{ backgroundColor: "#222529", borderRadius: "10px" }} >
                            <div className='d-flex justify-content-between'>
                                <div className='home-header-stat-block-text'>
                                    Milestones
                                </div>
                                <div><EmojiEventsRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex justify-content-center pt-4'>
                                <div className='fafafa-color user-home-milestones-description text-center nunito-sans-font' style={{ backgroundColor: "#2d3034", width: "80%" }}>
                                    <div className=''>
                                        <img src={milestones} className="illustration-home-page-milestones pt-1 pb-3 " alt="" style={{ width: "10rem" }} />
                                    </div>
                                    <div style={{ fontWeight: "600" }}>
                                        Let your goals become a reality
                                    </div>
                                    <div className='pt-3'>
                                        <Button className='user-home-create-task-button-dark' style={{ color: "#919191" }}>
                                            <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                            <span className='me-1' style={{ fontSize: '0.95rem' }}>Add milestone</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewHome;