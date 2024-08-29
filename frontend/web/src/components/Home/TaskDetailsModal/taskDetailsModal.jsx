import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import dayjs from 'dayjs';

import { Modal } from 'antd';
import { Text, Input, Button,Textarea } from '@mantine/core';
import { IconX,IconDots } from '@tabler/icons-react';

import UserAvatar from '../UserAvatar/userAvatar';
import { ProfileCard } from './ProfileCard/profileCard';
import { MantineDropdown } from '../../models/ModelDropdown2/mantineDropdown';
import { removeTagInfo } from '../../../DataManagement/Tags/removeTag';
import { deleteTagInfo } from '../../../DataManagement/Tags/deleteTag';
import getStatusProperty from '../../../utils/getStatusProperty';
import getPriorityProperty from '../../../utils/getPriorityProperty';
import NewHomeDueDatePopover from '../newHomeDueDatePopover';
import TagDeletionModal from './TagDeletionModal/tagDeletionModal';
import TaskDetailsModalHeader from './TaskDetailsModalHeader/taskDetailsModalHeader';
import StatusDropdownContent from '../DropdownContent/statusDropdownContent';
import PriorityDropdownContent from '../DropdownContent/priorityDropdownContent';
import TagsDropdownContent from '../DropdownContent/tagsDropdownContent';
import TaskDescriptionTipTap from './TaskDescriptionTipTap/taskDescriptionTipTap'

import './taskDetailsModal.css';

const TaskDetailsModal = (props) => {
    const { 
        userFullName, initials,userEmail, currentIndex, currentTaskName, currentTaskPriority, currentTaskDueDate, currentTaskStatus, currentTaskCreationDate, currentTaskLastUpdatedOn,
        setCurrentTaskName, setCurrentTaskDueDate, setCurrentIndex, setCurrentTaskPriority, setSelectedDate, currentTaskTags, setCurrentTaskTags,setCurrentTaskDescriptionHtml,
        taskType, setTaskType,selectedDate, today, currentTaskDueDateTime, setCurrentTaskDueDateTime,
        onHide, show,completedTasks,dueDatePopoverIsOpen,setDueDatePopoverIsOpen,setCurrentTaskStatus, currentTaskDescriptionHtml,
        userProfileDto,userProfilePicture,handleTaskUpdateNew
    } = props;

    const content = currentTaskDescriptionHtml;
    const [originalTaskName, setOriginalTaskName] = useState(currentTaskName);

    const navigate = useNavigate();
    const location = useLocation();

    const currentTaskDateFormatter = (dateString) => {
        if (dateString === null)
            return 'None';
        if (dayjs(dateString).year() === dayjs().year() && currentTaskDueDateTime) {
            return `${dayjs(dateString).format('MMM D, h:mm a')}`;
        } else {
            return `${dayjs(dateString).format('MMM D[,] YYYY')}`;
        }
    }
    useEffect(() => {
        
        if (show && !originalTaskName) {
            setOriginalTaskName(currentTaskName);
        } 
    }, [show, currentTaskName, originalTaskName]);

    const handleTaskDetailsModalClose = () => {
        setOriginalTaskName(null);
        setCurrentTaskDescriptionHtml(null);
        onHide();
        navigate(-1);
    };
 
    useEffect(() => {
        if (location.pathname === '/home/modal' && !show) {

            const timeout = setTimeout(() => {
                // const newUrl = '/home';
                // window.history.replaceState(null, null, newUrl);
                navigate('/home');
            }, 300);
            return () => clearTimeout(timeout);
                // navigate('/home');
        }
    }, [location.pathname, show, navigate]);
     
 
    //task due date
    const handleDueDatePopoverClick = (event, index) => {
        setCurrentIndex(index);
        setCurrentTaskDueDate(taskType[index].dueDate);
        // if (taskType[index].dueDate) {
        //     setCurrentTaskDueDateTime(dayjs(taskType[index].dueDate).format('HH:mm'));
        // }
        setCurrentTaskDueDateTime(taskType[index].dueDateTime);
    };
 
    const handleDueDatePopoverClose = (event) => {
        setSelectedDate(false);
        setCurrentTaskDueDate(taskType[currentIndex].dueDate);
        // if (taskType[currentIndex].dueDate) {
        //     setCurrentTaskDueDateTime(dayjs(taskType[currentIndex].dueDate).format('HH:mm'));
        // }
        setCurrentTaskDueDateTime(taskType[currentIndex].dueDateTime);

    };
 
 
    const assigneeContent = (
        <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
             <div className='me-2'>
                <UserAvatar 
                    userProfileDto={userProfileDto}
                    userProfilePicture={userProfilePicture}
                    initials={initials}
                    multiplier={2.2}
                    fontSize={1.1}
                />
             </div>
             <Text className='lato-font'>
                 {userFullName}
             </Text>
         </div>
    );
 
    const handleTagRemoval = (event,currentTagIndex) => {
        event.stopPropagation();
        removeTagInfo(
            currentTaskTags[currentTagIndex].id,
            taskType[currentIndex].id,
            currentTaskTags, 
            setCurrentTaskTags
        );
        const updatedTaskTags = [...currentTaskTags];
        updatedTaskTags.splice(currentTagIndex, 1);
        setCurrentTaskTags(updatedTaskTags);

        setFirstRowTags(updatedTaskTags);

        // Recalculate rowOverflow state if needed
        calculateFirstRow(updatedTaskTags);
    }
 
     //tag dropdown logic
    const [childDropdownOpened, setChildDropdownOpened] = useState(false);
     //tag delete logic
    const [tagToDelete, setTagToDelete] = useState(null);
    const [tagDeleteItemClicked, setTagDeleteItemClicked] = useState(false);
    const [openTagDeletionModal,setOpenTagDeletionModal] = useState(false);
     
    const handleConfirmDeleteTagButtonClick = () => {
        deleteTagInfo(tagToDelete);
        setTagDeleteItemClicked(false);
        setOpenTagDeletionModal(false);
    }
        
    const onTagDeleteDropdownHide = () => {
        setOpenTagDeletionModal(false);
    };

    const handleUpdateTaskName = (e) => {
        if (e.currentTarget.value === '') {
            handleTaskUpdateNew(taskType[currentIndex], originalTaskName, "name", taskType, setTaskType, currentIndex);
        } else {
            handleTaskUpdateNew(taskType[currentIndex], e.currentTarget.value, "name", taskType, setTaskType, currentIndex);
        }
    }

    const buttonRefs = useRef([]);
    const tagButtonContainerRef = useRef(null);
    const tagButtonsRef = useRef(null);
    const [firstRowTags, setFirstRowTags] = useState([]);
    const [rowOverflow, setRowOverflow] = useState(false);
 
    const calculateFirstRow = useCallback((tags) => {
        // Ensure buttonRefs are correctly initialized
        buttonRefs.current = tags.map((_, i) => buttonRefs.current[i] || React.createRef());
    
        // Check if all refs are ready
        if (!buttonRefs.current.every(ref => ref.current)) {
            setTimeout(() => calculateFirstRow(tags), 0);
            return;
        }
    
        if (!tagButtonContainerRef.current || !tagButtonsRef.current) {
            return;
        }
    
        // Cache container width and initial variables
        const containerWidth = tagButtonContainerRef.current.offsetWidth;
        const containerHeight = tagButtonContainerRef.current.offsetHeight;
        const buttonsHeight = tagButtonsRef.current.offsetHeight;
    
        const tagsInFirstRow = [];
        let totalWidth = 0;
    
        // Determine if there is overflow
        const hasOverflow = buttonsHeight > containerHeight;
        setRowOverflow(hasOverflow);
    
        // Calculate tags that fit in the first row
        buttonRefs.current.every((ref, index) => {
            const buttonWidth = ref.current.offsetWidth + 21; // Adjust for margin/padding if needed
            if (totalWidth + buttonWidth <= containerWidth) {
                tagsInFirstRow.push(tags[index]);
                totalWidth += buttonWidth;
                return true; // Continue looping
            } else {
                return false; // Stop looping, row is full
            }
        });
    
        setFirstRowTags(tagsInFirstRow);
    }, []);

    useEffect(() => {
        setTimeout(() => calculateFirstRow(currentTaskTags), 0);
    },[currentTaskTags, calculateFirstRow]);

    return (
        
        <Modal
            centered
            open={show}
            onCancel={handleTaskDetailsModalClose}
            onHide={handleTaskDetailsModalClose}
            width={1000}
            className='task-details-modal-parent'
            closeIcon
        >
            <TaskDetailsModalHeader
                userFullName={userFullName}
                handleTaskDetailsModalClose={handleTaskDetailsModalClose}
            />

            <div className='user-home-task-details-modal-body'>
                <div className='d-flex justify-content-between pb-4' style={{height: "auto"}}>
                    <div className='w-100'>
                        {/* <Text className='mt-2 mb-3 py-2 nunito-sans-600-font user-home-task-details-modal-name' suppressContentEditableWarning={true} contentEditable={true} fz={40} w='90%' 
                        onInput={(e) => handleUpdateTaskName(e)}
                        >
                            {currentTaskName}
                        </Text> */}

                        <Textarea
                            className='mt-2 mb-3 py-2 user-home-task-details-modal-name'
                            p={0}
                            m={0}
                            w='90%'
                            minRows={1}
                            value={currentTaskName}
                            onChange={(event) => {
                                setCurrentTaskName(event.currentTarget.value);
                                handleUpdateTaskName(event);
                            }}
                            autosize
                        />



                        <div className='d-flex flex-column flex-wrap row-gap-3 lato-font ms-4'>
                            <div className='d-flex user-home-task-details-modal-head-property-group' style={{ fontSize: "1.06rem"}} >
                                <Text className='user-home-task-details-modal-property-lefttext'>Assignee</Text>
                                <div
                                className='user-home-task-details-modal-head-property-value'
                                >
                                    <ProfileCard
                                        userFullName={userFullName}
                                        initials={initials}
                                        userEmail={userEmail}
                                        userProfileDto={userProfileDto}
                                        userProfilePicture={userProfilePicture}
                                        target={<div className="assignee-content">
                                            {assigneeContent}
                                        </div>}
                                    />
                                </div>
                            </div>

                            <div className='d-flex user-home-task-details-modal-head-property-group' style={{ fontSize: "1.06rem"}}>
                                    <Text className='user-home-task-details-modal-property-lefttext'>Due Date</Text>
                                    <NewHomeDueDatePopover 
                                        popoverTarget={
                                            <div className='d-flex align-items-center justify-content-between user-home-task-details-modal-head-property-value' onClick={(event) => handleDueDatePopoverClick(event, currentIndex)}>
                                                <span className='lato-font'>
                                                    {currentTaskDateFormatter(currentTaskDueDate)}
                                                </span>
                                                {currentTaskDateFormatter(currentTaskDueDate) !== 'None' &&
                                                <span className='user-home-task-details-modal-due-date-remove' 
                                                onClick={(e) => { e.stopPropagation(); handleTaskUpdateNew(taskType[currentIndex], null, "clear due date", taskType, setTaskType, currentIndex);
                                                    setCurrentTaskDueDate(null); setCurrentTaskDueDateTime(null); }}>
                                                    <IconX className='user-home-task-details-modal-due-date-remove-icon' />
                                                </span>}
                                        </div>
                                        } 
                                        currentIndex={currentIndex} taskType={taskType} setTaskType={setTaskType}
                                        currentTaskDueDate={currentTaskDueDate} setCurrentTaskDueDate={setCurrentTaskDueDate} 
                                        currentTaskDueDateTime={currentTaskDueDateTime} setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                                        dueDatePopoverIsOpen={dueDatePopoverIsOpen} setDueDatePopoverIsOpen={setDueDatePopoverIsOpen}
                                        handleDueDatePopoverClose={handleDueDatePopoverClose} today={today} 
                                    />
                            </div>

                            <div className='d-flex user-home-task-details-modal-head-property-group' style={{ fontSize: "1.06rem" }}>
                                <Text className='user-home-task-details-modal-property-lefttext'>Status</Text>
                                <MantineDropdown 
                                    target={
                                        <div className='user-home-task-details-modal-head-property-value'>
                                            <div className='user-home-task-details-modal-head-text-dropdown-value' style={{color: '#e7e7e7', background: currentTaskStatus && getStatusProperty(currentTaskStatus).background }}>
                                                <div className='d-flex'>
                                                    <span className='d-flex align-items-center me-2'>{currentTaskStatus && getStatusProperty(currentTaskStatus).icon}</span>
                                                    <span>{currentTaskStatus}</span>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    width={190} dropdown={<StatusDropdownContent element={taskType && taskType[currentIndex]} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} 
                                    setTaskType={setTaskType} idx={currentIndex} setCurrentTaskStatus={setCurrentTaskStatus}  /> }
                                    position='bottom-start'
                                />
                            </div>

                            <div className='d-flex user-home-task-details-modal-head-property-group' style={{ fontSize: "1.06rem" }}>
                                <Text className='user-home-task-details-modal-property-lefttext'>Priority</Text>
                                <MantineDropdown 
                                    target={
                                        <div className='user-home-task-details-modal-head-property-value'>
                                            {currentTaskPriority ?
                                            <div className='user-home-task-details-modal-head-text-dropdown-value' style={{background: currentTaskPriority && getPriorityProperty(currentTaskPriority).color}}>
                                                <div className='d-flex'>
                                                    <span className='d-flex align-items-center me-2'>{currentTaskPriority && getPriorityProperty(currentTaskPriority).icon}</span>
                                                    <span>{currentTaskPriority}</span>
                                                </div>
                                            </div> : <Text c='#babbbe'>Empty</Text>}
                                        </div>
                                    }
                                    width={210} dropdown={<PriorityDropdownContent element={taskType && taskType[currentIndex]} handleTaskUpdateNew={handleTaskUpdateNew} taskType={taskType} 
                                    setTaskType={setTaskType} idx={currentIndex} setCurrentTaskPriority={setCurrentTaskPriority} /> }
                                    position='bottom-start'
                                />
                            </div>


                            <div className='d-flex user-home-task-details-modal-head-property-group' style={{ fontSize: "1.06rem" }}>
                                <Text className='user-home-task-details-modal-property-lefttext'>Tags</Text>
                                <MantineDropdown 
                                    target={
                                        <div className='user-home-task-details-modal-head-property-value' ref={tagButtonContainerRef}>
                                            <div className="d-flex flex-wrap" ref={tagButtonsRef}>
                                                {rowOverflow && firstRowTags.length < currentTaskTags.length ?  <span>
                                                {firstRowTags.map((tag, index) => (
                                                    <Button ref={buttonRefs.current[index]} key={index} bg={tag.color} className='user-home-task-details-modal-tags-button' fw={400} h='22' ff='Lato' fz={16}>
                                                        <span className='d-flex'>
                                                            <span className='align-middle user-home-task-details-modal-tags-button-text' >
                                                            {tag.name}
                                                            </span>
                                                        </span>

                                                            {/* <span className='align-middle user-home-task-details-modal-tags-button-options' 
                                                            onClick={(event) => {event.stopPropagation(); event.preventDefault(); console.log('options');}}>
                                                                <IconDots style={{width: "1.2rem"}}/>
                                                            </span> */}
                                                        
                                                        <span className='align-middle user-home-task-details-modal-tags-button-close' 
                                                        onClick={(event) => handleTagRemoval(event,index)}>
                                                            <IconX style={{width: "1.2rem"}}/>
                                                        </span>
                                                    </Button>)) } <span className='align-middle user-home-task-details-modal-tags-button-additional'>+{currentTaskTags.length - firstRowTags.length}</span>
                                                    </span>
                                                : currentTaskTags.map((tag, index) => (
                                                    <Button ref={buttonRefs.current[index]} key={index} bg={tag.color} className='user-home-task-details-modal-tags-button' fw={400} h='22' ff='Lato' fz={16}>
                                                        <span className='d-flex'>
                                                            <span className='align-middle user-home-task-details-modal-tags-button-text' >
                                                            {tag.name}
                                                            </span>
                                                        </span>

                                                            {/* <span className='align-middle user-home-task-details-modal-tags-button-options' 
                                                            onClick={(event) => {event.stopPropagation(); event.preventDefault(); console.log('options');}}>
                                                                <IconDots style={{width: "1.2rem"}}/>
                                                            </span> */}
                                                        
                                                        <span className='align-middle user-home-task-details-modal-tags-button-close' 
                                                        onClick={(event) => handleTagRemoval(event,index)}>
                                                            <IconX style={{width: "1.2rem"}}/>
                                                        </span>
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                    width={260} 
                                    dropdown={<TagsDropdownContent task={taskType && taskType[currentIndex]} taskType={taskType} setTaskType={setTaskType}
                                    idx={currentIndex} setCurrentTaskTags={setCurrentTaskTags} currentTaskTags={currentTaskTags} childDropdownOpened={childDropdownOpened} 
                                    setChildDropdownOpened={setChildDropdownOpened} setTagDeleteItemClicked={setTagDeleteItemClicked} setTagToDelete={setTagToDelete} /> } tagDeleteItemClicked={tagDeleteItemClicked} setTagDeleteItemClicked={setTagDeleteItemClicked}
                                    isParent={true} childDropdownOpened={childDropdownOpened} position='bottom-start' setOpenTagDeletionModal={setOpenTagDeletionModal}
                                />
                            </div>
                            </div>
                        
                        </div>
                    </div> 

                    <div className='mt-3'>
                        <TaskDescriptionTipTap 
                            content={content}
                            currentIndex={currentIndex}
                            taskType={taskType}
                            setTaskType={setTaskType}
                            selectedDate={selectedDate}
                            setCurrentTaskDueDate={setCurrentTaskDueDate}
                            setCurrentTaskDueDateTime={setCurrentTaskDueDateTime}
                            completedTasks={completedTasks}
                        />
                    </div>

                    {tagToDelete && <TagDeletionModal 
                        show={openTagDeletionModal}
                        handleClose={onTagDeleteDropdownHide}
                        handleConfirmDeleteTagButtonClick={handleConfirmDeleteTagButtonClick}
                        tagName={tagToDelete.name}
                    />}
                                        
                </div>
      </Modal>
    );
};

export default TaskDetailsModal;