import React, { useState, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
 
import dayjs from 'dayjs';

import { Tooltip, Table, Text,Button } from '@mantine/core';
import {
    IconChevronDown,IconCircle,IconCircleCheck,IconCalendarMonth,IconCircleCheckFilled,IconFlag3Filled,IconLoader,IconUser,IconTrash,IconCalendarDue
  } from '@tabler/icons-react';

import NewHomeDueDatePopover from '../../newHomeDueDatePopover';
import { MantineDropdown } from '../../../models/ModelDropdown2/mantineDropdown';
import PriorityDropdownContent from '../../DropdownContent/priorityDropdownContent';
import StatusDropdownContent from '../../DropdownContent/statusDropdownContent';

import './taskCardContent.css';

const TaskCardContent = (props) => {
    const {today,taskType,taskTypeObj,currentTaskDueDate, currentTaskDueDateTime, currentIndex, setCurrentIndex, setCurrentTask,setCurrentTaskDueDate,
        setCurrentTaskDueDateTime, getTagInfo,setCurrentTaskTags,setModalShow,setCurrentTaskName,setCurrentTaskCreationDate,setCurrentTaskDescription,
        setCurrentTaskLastUpdatedOn,setCurrentTaskStatus,setCurrentTaskPriority,handleTaskComplete,dueDatePopoverIsOpen,setDueDatePopoverIsOpen,
        setTaskType,isTaskTabCompleted, setCurrentTaskDescriptionHtml,handleTaskUpdateNew
    } = props;

    const location = useLocation();

    const handleDueDatePopoverClick = (event,index,task) => {
        setCurrentIndex(index);
        setCurrentTaskDueDate(task.dueDate);
        setCurrentTaskDueDateTime(task.dueDateTime);
        //setDueDatePopoverIsOpen(!dueDatePopoverIsOpen); //todo
    };

    const OpenTaskDetailsModal = async (event, taskType,index) => {
        try {
            const currentTags = await getTagInfo(taskType[index].id);
            setTaskType(taskType);
            setCurrentTask(taskType[index]);
            setCurrentTaskTags(currentTags);
            setCurrentTaskName(taskType[index].name);
            setCurrentTaskCreationDate(taskType[index].createdOn);
            setCurrentTaskLastUpdatedOn(taskType[index].lastUpdatedOn);
            setCurrentTaskDescription(taskType[index].description);
            setCurrentTaskDescriptionHtml(taskType[index].descriptionHtml);
            setCurrentTaskDueDate(taskType[index].dueDate);
            setCurrentTaskDueDateTime(taskType[index].dueDateTime);
            setCurrentTaskStatus(taskType[index].status);
            setCurrentTaskPriority(taskType[index].priority);
            setCurrentIndex(index);
            setModalShow(true);
        } catch(error) {
            console.error('Error opening task details modal:', error);
        }
    }
    
    const formatDate = (dateString) => {
        const dueDateDiffFromToday = dayjs(dateString).startOf('day').diff(dayjs(today).startOf('day'), 'day');

        if (dueDateDiffFromToday < 6) {
            if (dueDateDiffFromToday < 0)
                return `${dayjs(dateString).format('MMMM D')}`;
            if (dueDateDiffFromToday === 0)
                return 'Today';
            if (dueDateDiffFromToday === 1)
                return 'Tomorrow';
            return `${dayjs(dateString).format('dddd')}`;
        }

        if (dayjs(dateString).year() === dayjs().year()) {
            return `${dayjs(dateString).format('MMM D')}`;
        } else {
            return `${dayjs(dateString).format('MMM D, YYYY')}`;
        }
    };
      
    const [hoveredTableCellIndex, setHoveredTableCellIndex] = useState(null);

    const handleTableCellMouseEnter = (index) => {
        setHoveredTableCellIndex(index);
    };

    const handleTableCellMouseLeave = () => {
        setHoveredTableCellIndex(null);
    };


    // const [openMenuRowIndex, setOpenMenuRowIndex] = useState(null);
    // const [activeTaskType, setActiveTaskType] = useState(null);


    const handleMenuToggle = (isOpened, rowIndex) => {
        if (!isOpened) {
            handleTableCellMouseLeave();
        } 
    };

    const tableRowRef = useRef(null);

    const rows = (taskType) => {
        return taskType.map((element, index) => (
        <Table.Tr key={index} className='table-row-dark table-cell' bd='none' style={{borderRadius: "18px"}}>
            <Table.Td className={`text-overflow-cell`}
            >
                <div ref={tableRowRef}>
                    <div className="d-flex" style={{ color: "#fafafa" }}>
                        <div className='align-items-center d-flex'>
                            {isTaskTabCompleted ?
                            <IconCircleCheckFilled
                                onClick={(event) => handleTaskComplete(event, index,taskType)}
                                style={{ color: "#048a66" }}
                                className='user-home-task-check-icon user-home-task-set-complete'
                            />
                            : hoveredTableCellIndex === index ? (
                                <IconCircleCheck
                                width={16}
                                onClick={(event) => handleTaskComplete(event, index,taskType)}
                                className="user-home-task-set-complete"
                                onMouseLeave={handleTableCellMouseLeave}
                                />
                            ) : (
                                <IconCircle
                                onClick={(event) => handleTaskComplete(event, index,taskType)}
                                width={16}
                                className="user-home-task-set-complete"
                                onMouseEnter={() => handleTableCellMouseEnter(index)}
                                />
                            )
                            }
                        </div>
                    
                        <Link 
                            className='text-overflow m-0 d-flex ps-1' to={{ pathname: '/home/modal' }} state={{ background: location }} 
                            onClick={(e) => OpenTaskDetailsModal(e, taskType, index)}
                        >
                            <div className='d-flex flex-column w-100'>
                                <button className='task-name-link'
                                >
                                    <div className={`task-name-text d-flex align-items-center w-100`} >
                                        <Text className='text-overflow' fz={14}>{element.name}</Text>
                                    </div>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Table.Td>
            <Table.Td ps={0}>
                    <div className='d-flex align-items-center gap-2 justify-content-end' >
                            {/* <span
                            className="table-cell-icon"
                            >
                                <Tooltip label="Delete task" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                    <div className='user-home-calendar-icon-div'>
                                        <IconTrash className='user-home-calendar-icon' />
                                    </div>
                                </Tooltip>
                        
                            </span> 

                            <span
                            className="table-cell-icon"
                            >
                                <Tooltip label="Change assignee" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                    <div className='user-home-calendar-icon-div'>
                                        <IconUser className='user-home-calendar-icon' />
                                    </div>
                                </Tooltip>
                            </span> 

                            <span
                            className="table-cell-icon"
                            >
                                <MantineDropdown 
                                    target={
                                        <Tooltip label="Set status" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                        style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                            <div className='user-home-calendar-icon-div'>
                                                <IconLoader className='user-home-calendar-icon' />
                                            </div>
                                        </Tooltip>
                                    }
                                    width={190} dropdown={<StatusDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index}/> }
                                    rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                            />
                            </span> */}

                            {/* <>{element.status ?
                                <MantineDropdown 
                                    target={
                                        <Button p='0 12px' size="xs" radius='8' fz={13} bg='transparent' className='user-home-calendar-icon-div'>
                                            <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`} >
                                                <span className='d-flex align-items-center' style={{color: "#e5e5e5"}}
                                                >
                                                    <IconLoader className='me-1' width={18}/>{element.status}
                                                </span>
                                            </span>
                                        
                                        </Button> 
                                    }
                                    width={210} dropdown={<StatusDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index}/> }
                                    rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                                />
                                :
                                <span className='table-cell-icon'>
                                    <MantineDropdown 
                                        target={
                                            <Tooltip label="Set status" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                            style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                                <div className='user-home-calendar-icon-div'>
                                                    <IconLoader className='user-home-calendar-icon' />
                                                </div>
                                            </Tooltip>
                                        }
                                        width={210} dropdown={<StatusDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index}/> }
                                        rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                                    />
                                </span>
                                 }
                            </> */}

                        <>{element.priority ?
                                <MantineDropdown 
                                    target={
                                        <Button p='0 12px' size="xs" radius='8' fz={13} bg='transparent' className='user-home-calendar-icon-div'>
                                            <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`} >
                                                <span className='d-flex align-items-center' style={{color: "#e5e5e5"}}
                                                >
                                                    <IconFlag3Filled className='me-1' width={18}/>{element.priority}
                                                </span>
                                            </span>
                                        
                                        </Button> 
                                    }
                                    width={210} dropdown={<PriorityDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index} /> }
                                    rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                                />
                                :

                                <span className='table-cell-icon'>
                                    <MantineDropdown 
                                        target={
                                            <Tooltip label="Set priority" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                            style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                                <div className='user-home-calendar-icon-div'>
                                                    <IconFlag3Filled className='user-home-calendar-icon' />
                                                </div>
                                            </Tooltip>
                                        }
                                        width={210} dropdown={<PriorityDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index} /> }
                                        rowIndex={index} onMenuToggle={handleMenuToggle} position='bottom-end'
                                    />
                                </span>
                                 }
                            </>

                        <NewHomeDueDatePopover
                            popoverTarget={

                            <>{element.dueDate ?
                                <Button fz='13' size="xs" p='0 12px' radius='8' bg='transparent' className='user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index,element)}>
                                    <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`} >
                                        <span className='d-flex align-items-center'
                                            style={{ color: dayjs(element.dueDate).startOf('day').diff(dayjs(today).startOf('day'), 'day') < 0 && element.status !== 'Completed' ? "#e10845cf" : "#e5e5e5"
                                        }} >
                                        <IconCalendarDue className='me-1' width={18}/>{formatDate(element.dueDate)}
                                        </span>
                                    </span>
                                </Button> :

                                <span className='table-cell-icon'>
                                    <Tooltip label="Add due date" position="top" offset={8} withArrow openDelay={400} className='fafafa-color lato-font'
                                    style={{ backgroundColor: "#338b6f", borderRadius: "6px" }}>
                                        <div className='user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index,element)}>
                                            <IconCalendarMonth className='user-home-calendar-icon' />
                                        </div>
                                    </Tooltip>
                                </span>}
                            </>} 

                            currentTaskDueDate={currentTaskDueDate} setCurrentTaskDueDate={setCurrentTaskDueDate}
                            currentTaskDueDateTime={currentTaskDueDateTime} setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                            today={today} dueDatePopoverIsOpen={dueDatePopoverIsOpen} setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                            currentIndex={currentIndex} taskType={taskType} setTaskType={setTaskType}
                        />
                </div>
            </Table.Td>
        </Table.Tr>));
      };

    return (
        <>
                <Table bd="none">
                    <Table.Tbody bd="0px">
                        {rows(taskType)}
                    </Table.Tbody>
                </Table>
        </>
      );
};

export default TaskCardContent;