import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import { Breadcrumbs, Link, Typography } from '@mui/material';

import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import './taskDetailsModal.css';

import NewHomeDueDatePopover from '../newHomeDueDatePopover';
import { updateTaskInfo } from '../../../DataManagement/Tasks/updateTask';
import { removeTagInfo } from '../../../DataManagement/Tags/removeTag';
import { ModelDropdown } from '../../models/modelDropdown';
import { ProfileCard } from './ProfileCard/profileCard';

import { Tooltip } from 'react-tooltip';

function handleBreadcrumbClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const TaskDetailsModal = (props) => {
    const { 
            currentIndex, currentTaskName, currentTaskPriority, currentTaskDueDate, currentTaskStatus, currentTaskCreationDate, currentTaskDescription, currentTaskLastUpdatedOn,
            setCurrentTaskDueDate, setCurrentIndex, setCurrentTaskPriority, setSelectedDate, currentTaskTags, setCurrentTaskTags,
            upcomingTasks, selectedDate, jwt, today,
            onHide, show, setModalShow, allTagData,handleTagCreation } = props;

    const [userFullName] = useLocalState("", "userFullName");
    const [firstName, lastName] = userFullName.split(' ');
    const initials = (firstName[0] + lastName[0]).toUpperCase();

    const navigate = useNavigate();
    const location = useLocation();

    const breadcrumbs = [
        <Link underline="none" key="1" color="#dedede" href="/" onClick={handleBreadcrumbClick}>
            Personal Workspace
        </Link>,
        <Typography key="3" color="#dedede">
            <span className='d-flex align-items-center' style={{fontSize: "1rem"}}>
                My tasks
                <LockIcon className='ms-1' style={{ width: "1rem" }}/>
            </span>
        </Typography>,
    ];

    const currentTaskDateFormatter = (dateString) => {
        if (dateString === null)
            return 'None';
        if (dayjs(dateString).year() === dayjs().year()) {
            return `${dayjs(dateString).format('MMM D, h:mm a')}`;
        } else {
            return `${dayjs(dateString).format('MMM D[,] YYYY')}`;
        }
    }

    const handleTaskDetailsModalClose = () => {
        const modalBackdrop = document.querySelector('.modal-dialog');
        if (modalBackdrop) {
            modalBackdrop.remove();
        }

        onHide();
        navigate(-1);
    }

    useEffect(() => {
        if (location.pathname === '/home/modal' && !show) {
            // const newUrl = '/home';
            // window.history.replaceState(null, null, newUrl);

            const timeout = setTimeout(() => {
                const newUrl = '/home';
                window.history.replaceState(null, null, newUrl);
                // setModalShow(true);
            }, 300); // Adjust the delay as needed
            return () => clearTimeout(timeout);
        }
    }, [location.pathname, show, setModalShow]);

    //task description
    const handleTaskUpdate = (event) => {
        updateTaskInfo(
            currentIndex, 
            event,
            upcomingTasks,
            selectedDate,
            dayjs,
            false,
            handleDueDatePopoverClose,
            setCurrentTaskDueDate,
            jwt,
            null
        );
    }

    //task due date
    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);
    const [dueDateClockIsOpen, setDueDateClockIsOpen] = useState(false);

    const handleDueDatePopoverClick = (event, index) => {
        setDueDatePopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
        setCurrentTaskDueDate(upcomingTasks[index].dueDate);
        setDueDateClockIsOpen(false);
    };

    const handleDueDatePopoverClose = (event) => {
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false); 
        console.log("within due date close");
        console.log(upcomingTasks);
        setCurrentTaskDueDate(upcomingTasks[currentIndex].dueDate);
        setDueDateClockIsOpen(false);
    };

    //assignee profile card
    const [openAssigneeProfileCard, setOpenAssigneeProfileCard] = useState(false);
    const hoverTimeoutRef = useRef(null);

    const handleAssigneeProfileCardHover = (isHovering) => {
        clearTimeout(hoverTimeoutRef.current); // Clear any existing timeout
    
        if (isHovering) {
            // Show the profile card after a slight delay
            const hoverTimeout = setTimeout(() => {
                setOpenAssigneeProfileCard(true);
            }, 850); 
            hoverTimeoutRef.current = hoverTimeout;
        } else {
            setOpenAssigneeProfileCard(false);
        }
    };

    const assigneeContent = (
        <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
            <div className='me-2 user-home-task-details-modal-assignee-initials-circle'>
                <CircleRoundedIcon className="assignee-circle-icon-hider" />
                    <CancelRoundedIcon className="assignee-circle-icon-remove"/>
                {initials}

            </div>
            <span className='lato-font'>
                {userFullName}
            </span>
        </div>
    );

    const handleTagRemoval = (currentTagIndex) => {
        console.log("delete!");
        console.log(currentTaskTags[currentTagIndex]);
        // console.log(upcomingTasks[currentIndex]);
        removeTagInfo(jwt,currentTaskTags[currentTagIndex].id,upcomingTasks[currentIndex].id,currentTaskTags, setCurrentTaskTags);
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleTaskDetailsModalClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='resizable-modal-container d-flex align-items-center'
            >
                <div className='d-flex justify-content-between user-home-task-details-modal-header-parent'>
                    <Modal.Header style={{ backgroundColor: 'red !important' }} className='user-home-task-details-modal-header'>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <Breadcrumbs separator="›" className='lato-font user-home-task-details-modal-breadcrumbs d-none d-sm-flex' aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Modal.Title>
                    </Modal.Header>
                    <div className='d-flex justify-content-end'>
                        <div className='m-auto d-flex me-3 my-3 my-sm-1'>
                            <div className='d-flex align-items-center flex-column d-none d-md-flex mx-2 lato-font'>
                                <div data-tooltip-id="my-tooltip-multiline" className='m-auto' 
                                    data-tooltip-html={`Created by  ${userFullName} on ${currentTaskDateFormatter(currentTaskCreationDate)}<br />
                                                        Last Updated on ${currentTaskDateFormatter(currentTaskLastUpdatedOn)}`}>
                                    <div className='m-auto user-home-task-details-created-on d-flex align-items-center'>Created on {currentTaskDateFormatter(currentTaskCreationDate)}</div>
                                </div>
                                <Tooltip id="my-tooltip-multiline" className='task-details-modal-tooltip' style={{backgroundColor: "#4700b2", color: "#fafafa", fontSize: "0.8rem", borderRadius: "10px" }}/>

                            </div>
                            <div className='divider m-auto mx-2 d-none d-md-flex'></div>
                            <div className='d-flex align-items-center'>
                                <Button className='user-home-task-details-modal-share-btn m-auto mx-1 mx-sm-2'>Share</Button>
                            </div>
                            <div className='user-home-task-details-modal-header-right-btn d-flex align-items-center'>
                                <BookmarkBorderRoundedIcon className='mx-1 mx-sm-2 m-auto'/>
                            </div>
                            <div className='user-home-task-details-modal-header-right-btn d-flex align-items-center'>
                                <MoreHorizRoundedIcon className='mx-1 mx-sm-2 m-auto'/>
                            </div>  
                        </div>
                        <div className='m-auto d-none d-sm-flex'>
                            <CloseRoundedIcon className='user-home-task-details-modal-close-btn me-3' onClick={handleTaskDetailsModalClose}/>
                        </div>
                    </div>
                </div>
                
                <Modal.Body className='user-home-task-details-modal-body'>
                    <div className='d-flex justify-content-between pb-4' style={{height: "auto"}}>
                        <div style={{width: "100%"}}>
                            <h2 className='py-3 nunito-sans-600-font user-home-task-details-modal-name' suppressContentEditableWarning={true} contentEditable={true} style={{fontSize: "2.5rem", width: "80%"}} onInput={handleTaskUpdate}>
                                {currentTaskName}
                            </h2>

                                <div className='d-flex gap-3 my-3'>
                                    <ModelDropdown 
                                        items={[
                                            { name: "Task", icon: <ChecklistRtlRoundedIcon />, isActualOption: true },
                                            { name: "Milestone", icon: <EmojiEventsRoundedIcon />, isActualOption: true },
                                            { name: "Event", icon: <EventRoundedIcon />, isActualOption: true },
                                            { name: 'Item types', icon: <ExtensionRoundedIcon />, isActualOption: false }
                                        ]}
                                        initialNameValue={"Task"} initialIconValue={<ChecklistRtlRoundedIcon />}
                                        handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-item-type-property"}
                                        hasArrow={true} hasHeaderDescText={true} hasItemTypesOption={true}
                                        upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                                    />
                                    <div data-tooltip-id="my-tooltip" data-tooltip-content={`Add tags`}>
                                    <ModelDropdown 
                                        // items={[{}]}
                                        items={allTagData ? allTagData.map((tag) => ({ name: tag.name, icon: null })) : { name: "Task", icon: null, isActualOption: true }}
                                        handleTagCreation={handleTagCreation}
                                        initialNameValue={""} initialIconValue={<SellRoundedIcon />}
                                        handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-item-type-property"}
                                        hasSearchBar={true} 
                                        upcomingTasks={upcomingTasks} currentIndex={currentIndex} jwt={jwt} allTagData={allTagData} currentTaskTags={currentTaskTags} setCurrentTaskTags={setCurrentTaskTags}
                                    />
                                    </div>
                                    <Tooltip id="my-tooltip" className='task-details-modal-tooltip' style={{backgroundColor: "#2454d6", color: "#fafafa", fontSize: "0.8rem", borderRadius: "10px" }}/>


                                    {!currentTaskPriority &&
                                    <div data-tooltip-id="my-tooltip" data-tooltip-content={`Add priority`}>
                                        <ModelDropdown 
                                            items={[
                                                { name: "Critical", icon: <TourRoundedIcon /*style={{color: "#c90825"}}*//>, isActualOption: true },
                                                { name: "High", icon: <TourRoundedIcon /*style={{color: "gold"}}*//>, isActualOption: true },
                                                { name: "Medium", icon: <TourRoundedIcon /*style={{color: "#0976d6"}}*//>, isActualOption: true },
                                                { name: "Low", icon: <TourRoundedIcon />, isActualOption: true },
                                                { name: "Clear", icon: <NotInterestedRoundedIcon />, isActualOption: false },
                                            ]}
                                            initialNameValue={currentTaskPriority} initialIconValue={<TourRoundedIcon />}
                                            handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-priority-property"}
                                            hasClearBtn={true}
                                            isPriorityDropdown={true} setCurrentTaskPriority={setCurrentTaskPriority}
                                            upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                                        />
                                    </div>}
                                    <Tooltip id="my-tooltip" className='task-details-modal-tooltip' style={{backgroundColor: "#2454d6", color: "#fafafa", fontSize: "0.8rem", borderRadius: "10px" }}/>

                                </div>

                            <div className='d-flex flex-wrap column-gap-5 row-gap-2 lato-font'>
                                <div className='example d-flex flex-column' style={{ fontSize: "1.06rem"}} >
                                    <span className='user-home-task-details-modal-head-text'>Assignee</span>
                                    <div
                                        onMouseEnter={() => handleAssigneeProfileCardHover(true)}
                                        onMouseLeave={() => handleAssigneeProfileCardHover(false)}
                                    >
                                        <ProfileCard
                                            showProfileCard={openAssigneeProfileCard}
                                            assigneeContent={assigneeContent}
                                            initials={initials}
                                            userFullName={userFullName}
                                        />
                                    </div>
                                </div>

                                <div className='d-flex flex-column' style={{ fontSize: "1.06rem"}}>
                                    <span className='user-home-task-details-modal-head-text ps-2 me-3'>Due Date</span>
                                        <div className='d-flex align-items-center user-home-task-details-modal-due-date-div' onClick={(event) => handleDueDatePopoverClick(event, currentIndex)}>
                                            <span className='lato-font user-home-task-details-modal-due-date-actual'>
                                                {currentTaskDateFormatter(currentTaskDueDate)}
                                            </span>
                                            {currentTaskDateFormatter(currentTaskDueDate) !== 'None' &&
                                            <span className='user-home-task-details-modal-due-date-remove d-flex justify-content-center ms-4 me-3' onClick={(event) => { event.stopPropagation(); handleTaskUpdate(event); }}>
                                                <CloseRoundedIcon className='user-home-task-details-modal-due-date-remove-icon'/>
                                            </span>}
                                    </div>

                                    <NewHomeDueDatePopover 
                                        currentTaskDueDate={currentTaskDueDate} dueDatePopoverAnchorEl={dueDatePopoverAnchorEl} handleDueDatePopoverClose={handleDueDatePopoverClose} today={today} 
                                        handleTaskUpdate={handleTaskUpdate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setDueDateClockIsOpen={setDueDateClockIsOpen} 
                                        dueDateClockIsOpen={dueDateClockIsOpen}
                                    />
                                </div>

                                <div className='me-3 d-flex flex-column' style={{ fontSize: "1.06rem" }}>
                                    <div className=' user-home-task-details-modal-head-text' style={{width: "7rem"}}>Status</div>
                                    <div>
                                        <span className='lato-font d-flex align-items-center' style={{marginLeft: "0.45rem"}}>

                                            <ModelDropdown 
                                                items={[
                                                    { name: "To Do", icon: <RadioButtonCheckedRoundedIcon />, isActualOption: true },
                                                    { name: "In Progress", icon: <RadioButtonCheckedRoundedIcon />, isActualOption: true },
                                                    { name: "Completed", icon: <CheckRoundedIcon />, isActualOption: true },
                                                ]}
                                                initialNameValue={currentTaskStatus} initialIconValue={<RadioButtonCheckedRoundedIcon />}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-status-property"}
                                                hasSearchBar={true} isStatusBtn={true}
                                                upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                                            />

                                    
                                            <Button className='ms-2 user-home-task-details-modal-status-set-complete-btn'>
                                                <CheckRoundedIcon style={{width: "1.7rem", height: "1.7rem", color: "#989898"}}/>
                                            </Button>
                                        </span>
                                    </div>
                                </div>

                                {currentTaskPriority &&
                                <div className='d-flex flex-column' style={{ fontSize: "1.06rem" }}>
                                    <div className='me-3 user-home-task-details-modal-head-text d-flex align-items-center'>Priority</div>
                                    <div>
                                        <span className='lato-font d-flex align-items-center' style={{marginLeft: "0.45rem"}}>
                                            
                                            <ModelDropdown 
                                                items={[
                                                    { name: "Critical", icon: <TourRoundedIcon /*style={{color: "#c90825"}}*//>, isActualOption: true },
                                                    { name: "High", icon: <TourRoundedIcon /*style={{color: "gold"}}*//>, isActualOption: true },
                                                    { name: "Medium", icon: <TourRoundedIcon /*style={{color: "#0976d6"}}*//>, isActualOption: true },
                                                    { name: "Low", icon: <TourRoundedIcon />, isActualOption: true },
                                                    { name: "Clear", icon: <NotInterestedRoundedIcon />, isActualOption: false },
                                                ]}
                                                initialNameValue={currentTaskPriority} initialIconValue={<TourRoundedIcon />}
                                                handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-priority-property"}
                                                hasClearBtn={true}
                                                isPriorityDropdown={true} setCurrentTaskPriority={setCurrentTaskPriority}
                                                upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                                            />
                                        </span>
                                    </div>
                                </div>}

                                {currentTaskTags !== null && currentTaskTags !== undefined && currentTaskTags.length > 0 &&
                                <div className='d-flex flex-column' style={{ fontSize: "1.06rem" }}>
                                    <div className='me-3 user-home-task-details-modal-head-text d-flex align-items-center' style={{width: "5rem"}}>
                                        Tags
                                    </div>

                                    <div>
                                        <span className='lato-font d-flex align-items-center user-home-task-details-modal-tags-group'>
                                            {currentTaskTags.map((tag, index) => (
                                                <Button key={index} className='mx-1 user-home-task-details-modal-tags-button'>
                                                    <span className='d-flex'><SellRoundedIcon className='pe-2'/><span className="align-middle user-home-task-details-modal-tags-button-text">{tag.name}</span></span>
                                                    <span className='user-home-task-details-modal-tags-button-options'><MoreHorizRoundedIcon style={{width: "1.2rem"}}/></span>
                                                    <span className='user-home-task-details-modal-tags-button-close' onClick={() => handleTagRemoval(index)}><CloseRoundedIcon style={{width: "1.2rem"}}/></span>
                                                </Button>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                }
                            </div>
                        
                        </div>
                    </div> 

                    <div className='mt-3'>
                        <div className="user-home-task-details-modal-description m-0 p-0">
                            <TextareaAutosize
                                placeholder='Write a description for your task'
                                className='form-control user-home-task-details-modal-description-textarea'
                                onChange={handleTaskUpdate}
                                defaultValue={`${currentTaskDescription !== null ? currentTaskDescription : ''}`}
                            />
                        </div>
                    </div>   

                                        
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default TaskDetailsModal;