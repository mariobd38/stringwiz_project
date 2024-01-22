import React, { useState } from 'react';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Card from 'react-bootstrap/Card';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import {createTaskInfo} from './../../../DataManagement/Tasks/createTask';
import {updateTaskInfo} from './../../../DataManagement/Tasks/updateTask';

import NewHomeDueDatePopover from './../newHomeDueDatePopover';

import './taskCard.css'

const TaskCard = ({today, upcomingTasks, setUpcomingTasks}) => {
    const [jwt] = useLocalState("", "jwt");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [taskData, setTaskData] = useState([]);
    const [newTaskRowOpen, setNewTaskRowOpen] = useState(false);
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
    const [dueDateClockIsOpen, setDueDateClockIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDueDatePopoverClick = (event, index) => {
        console.log(dueDateClockIsOpen);
        setDueDatePopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        setCurrentTaskDueDate(upcomingTasks[index].dueDate);
        setDueDateClockIsOpen(false);
    };



    const handleDueDatePopoverClose = () => {
        console.log("yol");
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false); 
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
    


    return (
        <>
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
                                                <div className='d-flex mb-2' style={{ color: "#fafafa" }}>
                                                    <div className='m-auto d-flex '>
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
                                                    selectedDate={selectedDate} setSelectedDate={setSelectedDate} setDueDateClockIsOpen={setDueDateClockIsOpen} dueDateClockIsOpen={dueDateClockIsOpen}
                                                />
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
        </>
    );
};

export default TaskCard;