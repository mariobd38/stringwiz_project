import React, { useState, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Modal } from "antd";
 
import dayjs from 'dayjs';

import { Tooltip, Table, Text,Button,Textarea } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import Icons from '../../../icons/icons';

import NewHomeDueDatePopover from '../../newHomeDueDatePopover';
import { MantineDropdown } from '../../../models/ModelDropdown2/mantineDropdown';
import PriorityDropdownContent from '../../DropdownContent/priorityDropdownContent';
import StatusDropdownContent from '../../DropdownContent/statusDropdownContent';
import TaskOptionsPortal from './TaskOptionsPortal';
import { useScrollLock } from '../../../../utils/useScrollLock';

import './taskCardContent.css';

const TaskCardContent = (props) => {
    const {today,taskType,currentTaskDueDate, currentTaskDueDateTime, currentIndex, setCurrentIndex,setCurrentTaskDueDate,
        setCurrentTaskDueDateTime, getTagInfo,setCurrentTaskTags,setModalShow,setCurrentTaskName,setCurrentTaskCreationDate,
        setCurrentTaskLastUpdatedOn,setCurrentTaskStatus,setCurrentTaskPriority,handleTaskComplete,dueDatePopoverIsOpen,
        setDueDatePopoverIsOpen,setTaskType,isTaskTabCompleted, setCurrentTaskDescriptionHtml,handleTaskUpdateNew
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
            setCurrentTaskTags(currentTags);
            setCurrentTaskName(taskType[index].name);
            setCurrentTaskCreationDate(taskType[index].createdOn);
            setCurrentTaskLastUpdatedOn(taskType[index].lastUpdatedOn);
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
                return `${dayjs(dateString).format('MMM D')}`;
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

    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [showInnerContextMenu,setShowInnerContextMenu] = useState(false);
    const { disableScroll, enableScroll } = useScrollLock(); 

    const ref = useClickOutside(() => {
        if (!showInnerContextMenu) {
            enableScroll();
            setShowContextMenu(false); // Hide the parent dropdown
            setShowInnerContextMenu(false);
            setOpenMenuIndex(null);
        }
    });

    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    const handleTaskRowRightClick = (event,index) => {
        setCurrentTask(taskType[index]);
        setCurrentIndex(index);
        setNewTaskName(taskType[index].name);
        event.preventDefault(); // Prevent the default context menu

        const mouseX = event.clientX;
        const mouseY = event.clientY - 100;
        setContextMenuPosition({
            top: mouseY,
            left: mouseX,
        });
        setShowContextMenu(true);
        disableScroll();
    }

    const tableRowRef = useRef(null);
    const [openRenameModal, setOpenRenameModal] = useState(false);
    const [newTaskName,setNewTaskName] = useState(null);

    const CustomContextMenu = useMemo(() => {
        return <TaskOptionsPortal 
            ref={ref}
            contextMenuPosition={contextMenuPosition}
            showContextMenu={showContextMenu}
            setShowContextMenu={setShowContextMenu}
            openMenuIndex={openMenuIndex}
            setOpenMenuIndex={setOpenMenuIndex}
            enableScroll={enableScroll}
            setShowInnerContextMenu={setShowInnerContextMenu}
            setOpenRenameModal={setOpenRenameModal}
        />
        
    },[showContextMenu,contextMenuPosition,ref,openMenuIndex,enableScroll]);

    const handleTaskRename = () => {
        handleTaskUpdateNew(taskType[currentIndex], newTaskName, "name", taskType, setTaskType, currentIndex);
        setOpenRenameModal(false);
        // console.log(newTaskName);
        // setCurrentTaskName(event.currentTarget.value);
    }


    const rows = (taskType) => {
        return taskType.map((element, index) => (
        <Table.Tr key={index} className='table-row-dark table-cell' bd='none' style={{borderRadius: "18px"}} onContextMenu={(event) => handleTaskRowRightClick(event, index)}>
            <Table.Td className={`text-overflow-cell`} >
                <div ref={tableRowRef}>
                    <div className="d-flex" style={{ color: "#fafafa" }}>
                        <div className='align-items-center d-flex'>
                            {isTaskTabCompleted ?
                                <div onClick={(event) => handleTaskComplete(event, index,taskType)} className='d-flex align-items-center user-home-task-check-icon user-home-task-set-complete'>
                                    {Icons('IconCircleCheckFilled',24,24,'#048a66')}
                                </div>
                                : (
                                    <div onClick={(event) => handleTaskComplete(event, index,taskType)}
                                    className="user-home-task-set-complete d-flex align-items-center">
                                        {Icons('IconCircle',16,16)}
                                    </div>
                                )
                            }
                        </div>
                    
                        <Link className='text-overflow m-0 d-flex ps-1' to={{ pathname: '/home/modal' }} state={{ background: location }} 
                            onClick={(e) => OpenTaskDetailsModal(e, taskType, index)} >
                            <div className='d-flex flex-column w-100'>
                                <button className='task-name-link' >
                                    <div className={`task-name-text `} >
                                        <Text className='text-overflow' fz={14}>{element.name}</Text>
                                    </div>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Table.Td>
            <Table.Td ps={0} className='table-icons-cell'>
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

                        <>{element.priority &&
                            <MantineDropdown 
                                target={
                                    <Button p='0 12px' size="xs" radius='6' fz={13} bg='transparent' className='user-home-calendar-icon-div'>
                                        <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`} >
                                            <span className='d-flex align-items-center' style={{color: "#e5e5e5"}} >
                                                <div className='me-1'>
                                                    {Icons('IconFlag3',18,18,'#e5e5e5')}
                                                </div>

                                                <span>{element.priority}</span>
                                            </span>
                                        </span>
                                    </Button> 
                                }
                                width={210} dropdown={<PriorityDropdownContent element={element} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} setTaskType={setTaskType} idx={index} existingTask={true}/> }
                                position='bottom-end'
                            />
                        }</>

                        <NewHomeDueDatePopover
                            popoverTarget={

                            <>{element.dueDate ?
                                <Button fz='13' size="xs" p='0 12px' radius='6' bg='transparent' className='user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index,element)}>
                                    <span style={{ color: "#a7a7a7" }} className={`lato-font, user-home-chosen-due-date-text`} >
                                        <span className='d-flex align-items-center'
                                            style={{ color: dayjs(element.dueDate).startOf('day').diff(dayjs(today).startOf('day'), 'day') < 0 && element.status !== 'Completed' ? "#e10845cf" : "#e5e5e5"
                                        }} >
                                            <div className='d-flex align-items-center'>
                                                <div className='me-2'>
                                                    {Icons('IconCalendarDue',18,18,'#fafafa')}
                                                </div>
                                                <span>{formatDate(element.dueDate)}</span>
                                            </div>
                                        </span>
                                    </span>
                                </Button> :

                                <span className='table-cell-icon'>
                                    <Tooltip label="Add due date" position="top" offset={8} openDelay={400} className='user-home-tooltip' >
                                        <div className='user-home-calendar-icon-div' onClick={(event) => handleDueDatePopoverClick(event, index,element)}>
                                            {Icons('IconCalendarMonth',20.80,16,'#fafafa')}
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
        </Table.Tr>
        ));
      };

    return (
        <>  
            <Table bd="none">
                <Table.Tbody bd="0px">
                    <>
                        {rows(taskType)}
                        
                        {showContextMenu && CustomContextMenu }
                        {currentTask && 
                            <Modal centered open={openRenameModal} onCancel={() => {setOpenRenameModal(false);}} afterClose={() => {setCurrentTask(null); setNewTaskName(null);}} className='task-rename-modal' width={570}>
                                <div style={{width: "90%", margin: "auto"}}>
                                    <Textarea
                                        className='mt-1 mb-5 py-2'
                                        p={0}
                                        m={0}
                                        w='100%'
                                        minRows={2}
                                        autosize
                                        defaultValue={taskType && taskType[currentIndex].name}
                                        onChange={(event) => setNewTaskName(event.currentTarget.value)}
                                    />
                                    <Button disabled={currentTask.name === newTaskName || (newTaskName.length === '' || newTaskName.trim() === '')} onClick={handleTaskRename} w='-webkit-fill-available'>
                                        <div className='d-flex align-items-center'>
                                            <div className='me-2'>
                                                {Icons('IconPencil',17,17)}
                                            </div>
                                            <span>Confirm new task name</span>
                                        </div>
                                        
                                    </Button>
                                </div>
                            </Modal>
                        }
                    </>
                </Table.Tbody>
            </Table>
        </>
      );
};

export default TaskCardContent;