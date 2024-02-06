import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import { Breadcrumbs, Link, Tooltip, Typography } from '@mui/material';

import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
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

function handleBreadcrumbClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const TaskDetailsModal = (props) => {
    const { currentIndex, currentTaskIdNumber, currentTaskName, currentTaskPriority, currentTaskDueDate, currentTaskStatus, upcomingTasks, selectedDate, 
        currentTaskCreationDate, currentTaskDescription, currentTaskFormattedLastUpdatedOn, jwt,
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
            null,
            null,
            jwt,
            null
        );
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

                    {/* <div cl> */}

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
                                isPriorityDropdown={false} isModalOnRightSide={false}
                            />
                            <span className=' user-home-task-details-modal-tag d-flex align-items-center' >
                                <SellRoundedIcon />
                            </span>
                        </div>
                    
                    {/* </div> */}


                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
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

                            <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                                <span className='user-home-task-details-modal-head-text ps-2 me-3'>Due Date</span>
                                <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
                                    <span className='lato-font'>
                                        {currentTaskDateFormatter(currentTaskDueDate)}
                                    </span>
                                </div>
                            </div>

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
                                            isPriorityDropdown={false} isModalOnRightSide={false}
                                        />
                                
                                        <Button className='ms-2 user-home-task-details-modal-status-set-complete-btn'>
                                            <CheckRoundedIcon style={{width: "1.7rem", height: "1.7rem"}}/>
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
                                            isPriorityDropdown={true} isModalOnRightSide={false}
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