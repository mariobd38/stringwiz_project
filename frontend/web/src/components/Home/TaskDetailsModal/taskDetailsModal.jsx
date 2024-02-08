import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import { Breadcrumbs, Link, Tooltip, Typography } from '@mui/material';

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

import { updateTaskInfo } from '../../../DataManagement/Tasks/updateTask';

import './taskDetailsModal.css';
import { ModelDropdown } from '../../models/modelDropdown';
import NewHomeDueDatePopover from '../newHomeDueDatePopover';
// import ProfileCard from './ProfileCard/ProfileCard.jsx';
import { ProfileCard } from './ProfileCard/profileCard';

function handleBreadcrumbClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const TaskDetailsModal = (props) => {
    const { 
            currentIndex, currentTaskIdNumber, currentTaskName, currentTaskPriority, currentTaskDueDate, currentTaskStatus, currentTaskCreationDate, currentTaskDescription, currentTaskFormattedLastUpdatedOn,
            setCurrentTaskDueDate, setCurrentIndex, setSelectedDate,
            upcomingTasks, selectedDate, jwt, today,
            onHide, show } = props;

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
            const newUrl = '/home';
            window.history.replaceState(null, null, newUrl);
        }
    }, [location.pathname, show]);

    //task id number
    const handleTaskIdNumberClick = (event) => {
        navigator.clipboard.writeText(currentTaskIdNumber);
        const originalCurrentTaskIdNumber = event.target.innerText
        event.target.innerText = "Copied!";
        setTimeout(() => {
            if (event.target.innerText === "Copied!") {
                event.target.innerText = originalCurrentTaskIdNumber;
            }
        }, 1500); 
    }

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
        console.log(dueDateClockIsOpen);
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
            }, 0); 
            hoverTimeoutRef.current = hoverTimeout;
        } else {
            setOpenAssigneeProfileCard(false);
        }
    };

    const assigneeContent = (
        // <div className='example d-flex align-items-center lato-font' style={{ fontSize: "1.06rem" }}>
        //     <span className='user-home-task-details-modal-head-text ps-2 p-auto me-3'>Assignee</span>
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
        // </div>
    );

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
                                <Tooltip title={<span className=' created-date-tooltip-text lato-font'>{[`Created by  ${userFullName} on ${currentTaskDateFormatter(currentTaskCreationDate)}`,<br />,`Last Updated on ${currentTaskDateFormatter(currentTaskFormattedLastUpdatedOn)}`]}</span>} arrow className='text-center menu-tooltip'>
                                    <div className='m-auto user-home-task-details-created-on'>Created on {currentTaskDateFormatter(currentTaskCreationDate)}</div>
                                </Tooltip>
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
                    
                    <h2 className='py-2 nunito-sans-600-font' style={{fontSize: "2.5rem"}}>{currentTaskName}</h2>

                    {/* <div > */}

                        <div className='d-flex gap-3 mb-3'>
                            <ModelDropdown 
                                items={[
                                    { name: "Task", icon: <ChecklistRtlRoundedIcon />, isActualOption: true },
                                    { name: "Milestone", icon: <EmojiEventsRoundedIcon />, isActualOption: true },
                                    { name: "Event", icon: <EventRoundedIcon />, isActualOption: true },
                                    { name: 'Item types', icon: <ExtensionRoundedIcon />, isActualOption: false }
                                ]}
                                initialNameValue={"Task"} initialIconValue={<ChecklistRtlRoundedIcon />}
                                handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-item-type-property"}
                                hasArrow={true} hasSearchBar={false} hasHeaderDescText={true} hasItemTypesOption={true} hasClearBtn={false}
                                isPriorityDropdown={false} isModalOnRightSide={false} isStatusBtn={false}
                                upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                            />
                            <span className=' user-home-task-details-modal-tag d-flex align-items-center' >
                                <SellRoundedIcon />
                            </span>
                        </div>
                    
                    {/* </div> */}


                    <div className='d-flex justify-content-between'>
                        <div>
                            {/* <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}} 
                                onMouseEnter={(e) => handleAssigneeProfileCardHover(true)}
                                onMouseLeave={(e) => handleAssigneeProfileCardHover(false)}>
                                <span className='user-home-task-details-modal-head-text ps-2 p-auto me-3'>Assignee</span>
                                <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
                                    <div className=' me-2 user-home-task-details-modal-assignee-initials-circle'>
                                        {initials}
                                    </div>
                                    <span className='lato-font'>
                                        {userFullName}
                                    </span>
                                </div>
                            </div>

                            <ProfileCard
                                showProfileCard={openAssigneeProfileCard}
                            /> */}
                            <div className='example mb-3 d-flex align-items-center lato-font' style={{ fontSize: "1.06rem" }}>
                                <span className='user-home-task-details-modal-head-text ps-2 p-auto me-3'>Assignee</span>
                                <div
                                    className=''
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

                            {/* <div
                                className='mb-3'
                                onMouseEnter={() => handleAssigneeProfileCardHover(true)}
                                onMouseLeave={() => handleAssigneeProfileCardHover(false)}
                            >
                                <ProfileCard
                                    showProfileCard={openAssigneeProfileCard}
                                    assigneeContent={assigneeContent}
                                />
                            </div> */}

                            <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                                <span className='user-home-task-details-modal-head-text ps-2 me-3'>Due Date</span>
                                <div className='d-flex align-items-center user-home-task-details-modal-assignee-div' onClick={(event) => handleDueDatePopoverClick(event, currentIndex)}>
                                    <span className='lato-font'>
                                        {currentTaskDateFormatter(currentTaskDueDate)}
                                    </span>
                                </div>
                            </div>

                            <NewHomeDueDatePopover 
                                currentTaskDueDate={currentTaskDueDate} dueDatePopoverAnchorEl={dueDatePopoverAnchorEl} handleDueDatePopoverClose={handleDueDatePopoverClose} today={today} 
                                handleTaskUpdate={handleTaskUpdate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} setDueDateClockIsOpen={setDueDateClockIsOpen} 
                                dueDateClockIsOpen={dueDateClockIsOpen}
                            />

                            <div className='mb-3 d-flex me-4 lato-font' style={{fontSize: "1.06rem"}}>
                                <div className='me-3 user-home-task-details-modal-head-text d-flex align-items-center'>Status</div>
                                <div>
                                    <span className='lato-font d-flex align-items-center'>

                                        <ModelDropdown 
                                            items={[
                                                { name: "To Do", icon: <RadioButtonCheckedRoundedIcon />, isActualOption: true },
                                                { name: "In Progress", icon: <RadioButtonCheckedRoundedIcon />, isActualOption: true },
                                                { name: "Completed", icon: <CheckRoundedIcon />, isActualOption: true },
                                            ]}
                                            initialNameValue={currentTaskStatus} initialIconValue={<RadioButtonCheckedRoundedIcon />}
                                            handleTaskUpdate={(event) => handleTaskUpdate(event)} menuItemProperty={"dropdown-status-property"}
                                            hasArrow={false} hasSearchBar={true} hasHeaderDescText={false} hasItemTypesOption={false} hasClearBtn={false}
                                            isPriorityDropdown={false} isModalOnRightSide={false} isStatusBtn={true}
                                            upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                                        />

                                        {/* <Button className='user-home-task-details-modal-next-status-btn d-flex justify-content-center' onClick={handleTaskUpdate}>
                                            <PlayArrowRoundedIcon style={{width: "1.45rem", height: "1.7rem", color: "#989898"}}/>
                                        </Button> */}
                                
                                        <Button className='ms-2 user-home-task-details-modal-status-set-complete-btn'>
                                            <CheckRoundedIcon style={{width: "1.7rem", height: "1.7rem", color: "#989898"}}/>
                                        </Button>
                                    </span>
                                </div>
                            </div>

                            <div className='d-flex align-items-start lato-font' style={{fontSize: "1.06rem"}}>
                                <div className='me-3 user-home-task-details-modal-head-text d-flex align-items-center'>Priority</div>
                                <div>
                                    <span className='lato-font d-flex align-items-center'>

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
                                            hasArrow={false} hasSearchBar={false} hasHeaderDescText={false} hasItemTypesOption={false} hasClearBtn={true}
                                            isPriorityDropdown={true} isModalOnRightSide={false} isStatusBtn={false}
                                            upcomingTasks={upcomingTasks} currentIndex={currentIndex}
                                        />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className='d-flex'>

                        <Button className='mx-3 user-home-task-details-modal-taskIdNumber' onClick={handleTaskIdNumberClick}>
                            {props.currentTaskIdNumber}
                        </Button>
                            
                    </div> */}

                    <div className='mt-3'>
                        <div class="user-home-task-details-modal-description m-0 p-0">
                            <TextareaAutosize
                                placeholder='Write a description for your task'
                                className='form-control user-home-task-details-modal-description-textarea'
                                onChange={handleTaskUpdate}
                                // onFocus={handleFocus}
                                // onBlur={handleBlur}
                                // onChange={handleInputTaskDescriptionChange}
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