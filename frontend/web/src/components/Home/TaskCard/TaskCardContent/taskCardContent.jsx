import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import dayjs from 'dayjs';

import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Tooltip } from '@mantine/core';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import NewHomeDueDatePopover from '../../newHomeDueDatePopover';

import './taskCardContent.css';

const TaskCardContent = (props) => {
    const {today, taskData,taskType,currentTaskDueDate, currentTaskDueDateTime, currentIndex, setCurrentIndex, setCurrentTaskDueDate,
        setCurrentTaskDueDateTime, getTagInfo,setCurrentTaskTags,setModalShow,setCurrentTaskName,setCurrentTaskCreationDate,setCurrentTaskDescription,
        setCurrentTaskLastUpdatedOn,setCurrentTaskStatus,setCurrentTaskPriority,
        handleTaskComplete,dueDatePopoverIsOpen,setDueDatePopoverIsOpen,setTaskType
    } 
    = props;

    const location = useLocation();

    const handleDueDatePopoverClick = (event, index) => {
        setCurrentIndex(index);
        setCurrentTaskDueDate(taskData[index].dueDate);
        // if (taskData[index].dueDateTime) {
        //     setCurrentTaskDueDateTime(dayjs(taskData[index].dueDateTime).format('HH:mm'));
        // }
        setCurrentTaskDueDateTime(taskData[index].dueDateTime);

    };

    const OpenTaskDetailsModal = async (event, index) => {
        try {

            const currentTags = await getTagInfo(taskType[index].id);
            setCurrentTaskTags(currentTags);

            setModalShow(true);
            setCurrentTaskName(taskType[index].name);
            setCurrentTaskCreationDate(taskType[index].createdOn);
            setCurrentTaskLastUpdatedOn(taskType[index].lastUpdatedOn);
            setCurrentTaskDescription(taskType[index].description);
            setCurrentTaskDueDate(taskType[index].dueDate);
            // if (taskData[index].dueDateTime) {
                // setCurrentTaskDueDateTime(dayjs(taskData[index].dueDateTime).format('HH:mm'));
                // }
            setCurrentTaskDueDateTime(taskData[index].dueDateTime);
            setCurrentTaskStatus(taskType[index].status);
            setCurrentTaskPriority(taskType[index].priority);
            setCurrentIndex(index);
        } catch(error) {
            console.error('Error opening task details modal:', error);
        } 
    }
    
    const formatDate = (dateString) => {
        const dueDateDiffFromToday = dayjs(dateString).startOf('day').diff(dayjs(today).startOf('day'), 'day');

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

    return (
        <>
            {taskType.map((row, index) => (
                
            <TableRow key={index} className='table-row-dark' style={{ backgroundColor: "#1e1f21",borderRadius: "10px"}}>
                <TableCell scope="row" className='d-flex align-items-center justify-content-between table-cell' >
                    <div className='d-flex justify-content-between w-100'>
                        <div className="d-flex mb-2" style={{ color: "#fafafa" }}>
                            <div className='m-auto d-flex'>
                                <CheckCircleOutlineRoundedIcon onClick={(event) => handleTaskComplete(event,index)} className='user-home-task-check-icon user-home-task-set-complete' />
                            </div>
                            <Link to={{pathname: '/home/modal'}} state={{ background: location }}  onClick={(e) => OpenTaskDetailsModal(e, index)}>
                                <div style={{outline: "none"}}>
                                    <button className='task-name-link'> {/* ${row.status === 'Completed' ? ' strikethrough' : ''} */}
                                        <span className={`ps-2 taskName-text`}> 
                                            {row.name}
                                        </span>
                                    </button>
                                </div>
                            </Link>
                        </div>
                        
                        <NewHomeDueDatePopover 
                            popoverTarget={taskType[index].status === 'Completed' ? 
                                <span style={{color: "#358b4b", cursor: "pointer"}} onClick={(event) => handleDueDatePopoverClick(event, index)}>Completed</span>
                                :
                                !taskType[index].dueDate ? 
                                <span>
                                    <Tooltip label="Add due date" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font' 
                                    style={{backgroundColor: "#338b6f", borderRadius: "6px",visibility: dueDatePopoverIsOpen ? "hidden" : "visible"}}> 
                                        <div className='d-flex align-items-center user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index)}>
                                            <CalendarTodayRoundedIcon className='user-home-calendar-icon'/>
                                        </div>
                                    </Tooltip>
                                </span>
                                :
                                <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`}
                                >
                                    {formatDate(taskType[index].dueDate) === 'Overdue' ? (
                                        <span style={{color: "#e10845ef"}} onClick={(event) => handleDueDatePopoverClick(event, index)}>Overdue</span>
                                    ) : (
                                        <span style={{color: "#e5e5e5"}} onClick={(event) => handleDueDatePopoverClick(event, index)}>{formatDate(taskType[index].dueDate)}</span>
                                    )}
                                </span>
                            }
                            setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                            currentTaskDueDate={currentTaskDueDate} setCurrentTaskDueDate={setCurrentTaskDueDate}
                            currentTaskDueDateTime={currentTaskDueDateTime} setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                            today={today}
                            currentIndex={currentIndex} taskType={taskType} setTaskType={setTaskType}
                        />
                    </div>
                </TableCell>
            </TableRow>
            ))}
        </>
    );
};

export default TaskCardContent;