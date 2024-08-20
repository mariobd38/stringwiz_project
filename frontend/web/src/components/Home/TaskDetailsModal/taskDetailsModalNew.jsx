import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import dayjs from 'dayjs';

import { Modal } from 'antd';
import { Text,Avatar, Button } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import getStatusProperty from '../../../utils/getStatusProperty';
import getPriorityProperty from '../../../utils/getPriorityProperty';
import NewHomeDueDatePopover from '../newHomeDueDatePopover';
import { constructImageSrc } from '../../../utils/constructImageSrc';
import { UpdateTaskInfo } from '../../../DataManagement/Tasks/updateTask';
import { removeTagInfo } from '../../../DataManagement/Tags/removeTag';
import { ProfileCard } from './ProfileCard/profileCard';
import { deleteTagInfo } from '../../../DataManagement/Tags/deleteTag';
import TaskDeletionModal from './TaskDeletionModal/taskDeletionModal';
import TaskDetailsModalHeader from './TaskDetailsModalHeader/taskDetailsModalHeader';
import { MantineDropdown } from '../../models/ModelDropdown2/mantineDropdown';
import StatusDropdownContent from '../DropdownContent/statusDropdownContent';
import PriorityDropdownContent from '../DropdownContent/priorityDropdownContent';
import TagsDropdownContent from '../DropdownContent/tagsDropdownContent';
import TaskDescriptionTipTap from '../TaskDetailsModal/TaskDescriptionTipTap/taskDescriptionTipTap'
import { UpdateTaskInfoNew } from '../../../DataManagement/Tasks/updateTaskNew';

const TaskDetailsModalNew = (props) => {
    const { 
        userFullName, userEmail, currentIndex, currentTaskName, currentTaskPriority, currentTaskDueDate, currentTaskStatus, currentTaskCreationDate, currentTaskLastUpdatedOn,
        setCurrentTaskDueDate, setCurrentIndex, setCurrentTaskPriority, setSelectedDate, currentTaskTags, setCurrentTaskTags,setCurrentTaskDescriptionHtml,
        taskType, setTaskType,selectedDate, today, currentTaskDueDateTime, setCurrentTaskDueDateTime,
        onHide, show,completedTasks,dueDatePopoverIsOpen,setDueDatePopoverIsOpen,setCurrentTaskStatus, currentTaskDescriptionHtml,
        userProfileDto,userProfilePicture,handleTaskUpdateNew
     } = props;

     const content = currentTaskDescriptionHtml;

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
 
     const handleTaskDetailsModalClose = () => {
        setCurrentTaskDescriptionHtml(null);
        onHide();
        navigate(-1);
     }
 
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
     
 
     //task description
     const handleTaskUpdate = (event) => {
         UpdateTaskInfo(
             currentIndex, 
             event,
             taskType,
             setTaskType,
             selectedDate,
             dayjs,
             setCurrentTaskDueDate,
             setCurrentTaskDueDateTime,
             completedTasks,
         );
     }
 
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
            <Avatar size='md' className='me-2 user-home-task-details-modal-assignee-initials-circle  '
            src={userProfileDto !== null &&
            userProfileDto.avatarType === 'image' ? constructImageSrc(userProfileDto.pfd.data, userProfileDto.avatarType) : 'none'}
            style={{backgroundImage: userProfilePicture !== null && userProfileDto == null ? `url(${userProfilePicture})` : 'none', overflow: "visible",
            cursor: "pointer",backgroundSize: 'cover', borderRadius: "50%"}} 
            >
             </Avatar>
             <Text className='lato-font'>
                 {userFullName}
             </Text>
         </div>
    );
 
     const handleTagRemoval = (currentTagIndex) => {
        removeTagInfo(
            currentTaskTags[currentTagIndex].id,
            taskType[currentIndex].id,
            currentTaskTags, 
            setCurrentTaskTags
        );
     }
 
 
     //tag dropdown logic

     //tag delete logic
     const [tagDeleteButtonClicked, setTagDeleteButtonClicked] = useState(false);
     const [tagDeleteButtonClickedIndex, setTagDeleteButtonClickedIndex] = useState(false);
 
     const onTagDeleteDropdownHide = () => {
         setTagDeleteButtonClicked(false);
     };
 
     const handleConfirmDeleteTagButtonClick = () => {
         deleteTagInfo(currentTaskTags,setCurrentTaskTags,tagDeleteButtonClickedIndex);
         setTagDeleteButtonClicked(false);
     }

    const [childDropdownOpened, setChildDropdownOpened] = useState(false);

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
                    <div style={{width: "100%"}}>
                        <Text className='mt-2 mb-3 py-2 nunito-sans-600-font user-home-task-details-modal-name' suppressContentEditableWarning={true} contentEditable={true} fz={40} w='90%' 
                        onInput={(e) => handleTaskUpdateNew(e.currentTarget.textContent)}>
                            {currentTaskName}
                        </Text>


                        <div className='d-flex flex-column flex-wrap row-gap-3 lato-font ms-4'>
                            <div className='d-flex user-home-task-details-modal-head-property-group' style={{ fontSize: "1.06rem"}} >
                                <Text className='user-home-task-details-modal-property-lefttext'>Assignee</Text>
                                <div
                                className='user-home-task-details-modal-head-property-value'
                                >
                                    <ProfileCard
                                        userFullName={userFullName}
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
                                                <span className='user-home-task-details-modal-due-date-remove' onClick={(event) => { event.stopPropagation(); handleTaskUpdate(event); }}>
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
                                            <div className='user-home-task-details-modal-head-text-dropdown-value' style={{background: currentTaskStatus && getStatusProperty(currentTaskStatus).color}}>
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
                                        <div className='user-home-task-details-modal-head-property-value'>
                                            <div className="d-flex flex-wrap">
                                                {currentTaskTags.map((tag, index) => (
                                                <div key={index} style={{backgroundColor: tag.color ? tag.color : '#0d6efd', border: "none"}} className={`user-home-task-details-modal-tags-button `}
                                                >
                                                    <span className='d-flex'>
                                                        <span className={`align-middle user-home-task-details-modal-tags-button-text`} >
                                                            {tag?.name ? tag.name : ''}
                                                        </span>
                                                    </span>
                                                    <span className={`align-middle user-home-task-details-modal-tags-button-close`} 
                                                    onClick={() => handleTagRemoval(index)}>
                                                        <IconX style={{width: "1.2rem"}}/>
                                                    </span>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                    width={260} dropdown={<TagsDropdownContent task={taskType && taskType[currentIndex]} taskType={taskType} setTaskType={setTaskType}
                                    idx={currentIndex} setCurrentTaskTags={setCurrentTaskTags} currentTaskTags={currentTaskTags} childDropdownOpened={childDropdownOpened} setChildDropdownOpened={setChildDropdownOpened} /> }
                                    isParent={true} childDropdownOpened={childDropdownOpened} position='bottom-start'
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

                    <TaskDeletionModal 
                        show={tagDeleteButtonClicked}
                        handleClose={onTagDeleteDropdownHide}
                        handleConfirmDeleteTagButtonClick={handleConfirmDeleteTagButtonClick}
                    />
                                        
                </div>
      </Modal>
    );
};

export default TaskDetailsModalNew;