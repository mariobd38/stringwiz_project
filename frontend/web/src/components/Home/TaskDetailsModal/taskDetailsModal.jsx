import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalState } from "../../../utils/useLocalStorage";

import dayjs from 'dayjs';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import { Breadcrumbs,Divider, Link, ListItemText, 
    ListItemIcon, Menu, MenuList, MenuItem, Tooltip, Typography } from '@mui/material';


import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import { updateTaskInfo } from '../../../DataManagement/Tasks/updateTask';

import './taskDetailsModal.css';
import StatusDropdown from './statusDropdown/statusDropdown';
import PriorityDropdown from './priorityDropdown/priorityDropdown';
import ItemOptionDropdown from './itemOptionDropdown/itemOptionDropdown';


function handleBreadcrumbClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const TaskDetailsModal = (props) => {
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

        props.onHide();
        navigate(-1);
    }

    useEffect(() => {
        if (location.pathname === '/home/modal' && !props.show) {
            const newUrl = '/home';
            window.history.replaceState(null, null, newUrl);
        }
    }, [location.pathname, props.show]);

    //task type
    const [taskOptionMenuAnchorEl, setTaskOptionMenuAnchorEl] = React.useState(null);
    const openTaskOptionMenu = Boolean(taskOptionMenuAnchorEl);
    const handleTaskOptionMenuClick = (event) => {
        setTaskOptionMenuAnchorEl(event.currentTarget);
    };
    const handleTaskOptionMenuClose = () => {
        setTaskOptionMenuAnchorEl(null);
    };

    //task id number
    const handleTaskIdNumberClick = (event) => {
        navigator.clipboard.writeText(props.currentTaskIdNumber);
        const originalCurrentTaskIdNumber = event.target.innerText
        event.target.innerText = "Copied!";
        setTimeout(() => {
            if (event.target.innerText === "Copied!") {
                event.target.innerText = originalCurrentTaskIdNumber;
            }
        }, 1500); 
    }

    //task description
    const handleTaskDescriptionChange = (event) => {
        updateTaskInfo(
            props.currentIndex, 
            event,
            props.upcomingTasks,
            props.selectedDate,
            dayjs,
            false,
            null,
            null,
            props.jwt,
            null
        );
    }

    return (
        <>
            <Modal
                show={props.show}
                onHide={handleTaskDetailsModalClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='resizable-modal-container'
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
                                <Tooltip title={<span className=' created-date-tooltip-text lato-font'>{[`Created by  ${userFullName} on ${currentTaskDateFormatter(props.currentTaskCreationDate)}`,<br />,`Last Updated on ${currentTaskDateFormatter(props.currentTaskFormattedLastUpdatedOn)}`]}</span>} arrow className='text-center menu-tooltip'>
                                    <div className='m-auto user-home-task-details-created-on'>Created on {currentTaskDateFormatter(props.currentTaskCreationDate)}</div>
                                </Tooltip>
                            </div>
                            <div className='divider m-auto mx-2 d-none d-md-flex'></div>
                            <div className='d-flex align-items-center'>
                                <Button className='user-home-task-details-modal-share-btn m-auto mx-1 mx-sm-2'>Share</Button>
                            </div>
                            <div className='user-home-task-details-modal-header-right-btn d-flex align-items-center'>
                                <FavoriteBorderRoundedIcon className='mx-1 mx-sm-2 m-auto'/>
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
                
                <Modal.Body>
                    <h2 className='py-2 nunito-sans-600-font' style={{fontSize: "2.5rem"}}>{props.currentTaskName}</h2>


                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                                <span style={{width: "8rem"}}>Assignee</span>
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
                                <span style={{width: "8rem"}}>Due Date</span>
                                <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
                                    <span className='lato-font'>
                                        {currentTaskDateFormatter(props.currentTaskDueDate)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                                <span style={{width: "8rem"}}>Status</span>
                                <div>
                                    <span className='lato-font d-flex align-items-center'>
                                        <button class="user-home-task-details-modal-status-btn " data-bs-toggle="dropdown" aria-expanded="false">
                                            {props.currentTaskStatus}
                                        </button>

                                        <StatusDropdown 
                                            currentTaskStatus={props.currentTaskStatus}
                                        />
                                
                                        <Button className='user-home-task-details-modal-status-set-complete-btn'>
                                            <CheckRoundedIcon />
                                        </Button>
                                    </span>
                                </div>
                            </div>



                            <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                                <span style={{width: "8rem"}}>Priority</span>
                                
                                <div>
                                    <span className='lato-font d-flex align-items-center'>
                                        {props.currentTaskPriority ?
                                            <button className="user-home-task-details-modal-status-btn " data-bs-toggle="dropdown" aria-expanded="false">
                                                {props.currentTaskPriority}
                                            </button>
                                            :
                                            <button className='user-home-task-details-modal-no-status-btn' data-bs-toggle="dropdown" aria-expanded="false">
                                                <TourRoundedIcon />
                                            </button>
                                        }

                                        <PriorityDropdown 
                                        currentTaskPriority={props.currentTaskPriority}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                        <span style={{width: "8rem"}}>Assignee</span>
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
                        <span style={{width: "8rem"}}>Due Date</span>
                        <div className='d-flex align-items-center user-home-task-details-modal-assignee-div'>
                            <span className='lato-font'>
                                {currentTaskDateFormatter(props.currentTaskDueDate)}
                            </span>
                        </div>
                    </div> */}

                    {/* <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                        <span style={{width: "8rem"}}>Status</span>
                        <div>
                            <span className='lato-font d-flex align-items-center'>
                                <button class="user-home-task-details-modal-status-btn " data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.currentTaskStatus}
                                </button>
                                <ul className="dropdown-menu mt-1 user-home-task-details-modal-status-menu-item">
                                    <div className='d-flex align-items-center' style={{borderBottom: "1px solid #898989"}}>
                                        <form className="user-home-task-details-modal-status-search me-3 ms-1" role="search">
                                            <input
                                                className="form-control user-home-task-details-modal-status-search-input me-2"
                                                type="text"
                                                placeholder="Search"                                                
                                                aria-label="Search"
                                            />
                                        </form>
                                    </div>
                                    <li className='user-home-task-details-modal-status-menu-item'>
                                        <button className="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#898989"}}/>
                                            To Do
                                            {
                                                props.currentTaskStatus === 'To Do' && <CheckRoundedIcon  className='ms-auto'/>
                                            }
                                            </span>
                                        </button>
                                    </li>
                                    <li className='user-home-task-details-modal-status-menu-item d-flex align-items-center'>
                                    <button class="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#6e34da"}}/>
                                                In Progress
                                                {
                                                props.currentTaskStatus === 'In Progress' && <CheckRoundedIcon  className='ms-auto'/>
                                                }
                                            </span>
                                        </button>
                                    </li>
                                    <li className='user-home-task-details-modal-status-menu-item'>
                                    <button class="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#198a17"}}/>
                                                Completed
                                                {
                                                props.currentTaskStatus === 'Completed' && <CheckRoundedIcon  className='ms-auto'/>
                                                }
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                                
                                <Button className='user-home-task-details-modal-status-set-complete-btn'>
                                    <CheckRoundedIcon />
                                </Button>
                            </span>
                        </div>
                    </div>



                    <div className='d-flex align-items-center mb-3 lato-font' style={{fontSize: "1.06rem"}}>
                        <span style={{width: "8rem"}}>Priority</span>
                        
                        <div>
                            <span className='lato-font d-flex align-items-center'>
                                {props.currentTaskPriority ?
                                    <button className="user-home-task-details-modal-status-btn " data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.currentTaskPriority}
                                    </button>
                                    :
                                    <button className='user-home-task-details-modal-no-status-btn' data-bs-toggle="dropdown" aria-expanded="false">
                                        <TourRoundedIcon />
                                    </button>
                                }
                                <ul className="dropdown-menu mt-1 user-home-task-details-modal-status-menu-item">
                                    <li className='user-home-task-details-modal-status-menu-item'>
                                        <button className="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#c90825"}}/>
                                                Urgent
                                                {
                                                    props.currentTaskPriority === 'Urgent' && <CheckRoundedIcon  className='ms-auto'/>
                                                }
                                            </span>
                                        </button>
                                    </li>
                                    <li className='user-home-task-details-modal-status-menu-item d-flex align-items-center'>
                                        <button class="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "gold"}}/>
                                                High
                                                {
                                                props.currentTaskPriority === 'High' && <CheckRoundedIcon  className='ms-auto'/>
                                                }
                                            </span>
                                        </button>
                                    </li>
                                    <li className='user-home-task-details-modal-status-menu-item'>
                                        <button class="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#222fe3"}}/>
                                                Normal
                                                {
                                                props.currentTaskPriority === 'Normal' && <CheckRoundedIcon  className='ms-auto'/>
                                                }
                                            </span>
                                        </button>
                                    </li>
                                    <li className='user-home-task-details-modal-status-menu-item'>
                                        <button class="dropdown-item" type="button">
                                            <span className='d-flex align-items-center'><RadioButtonCheckedIcon className='me-2' style={{color: "#999999"}}/>
                                                Low
                                                {
                                                props.currentTaskPriority === 'Low' && <CheckRoundedIcon  className='ms-auto'/>
                                                }
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div> */}

                    <div className='d-flex'>
                        
                        <Button
                            id="demo-customized-button"
                            aria-controls={openTaskOptionMenu ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openTaskOptionMenu ? 'true' : undefined}
                            variant="contained"
                            className='user-home-task-details-modal-task-options-btn p-1'
                            disableElevation
                            onClick={handleTaskOptionMenuClick}
                        >
                            <ChecklistRtlRoundedIcon className='me-1'/> Task
                            <span className='m-auto ps-1'><KeyboardArrowDownIcon /></span>
                        </Button>
                        
                        <ItemOptionDropdown 
                            taskOptionMenuAnchorEl={taskOptionMenuAnchorEl}
                            openTaskOptionMenu={openTaskOptionMenu}
                            handleTaskOptionMenuClose={handleTaskOptionMenuClose}
                        />

                        <Button className='mx-3 user-home-task-details-modal-taskIdNumber' onClick={handleTaskIdNumberClick}>
                            {props.currentTaskIdNumber}
                        </Button>

                        <span className=' user-home-task-details-modal-tag d-flex align-items-center' >
                            <SellRoundedIcon />
                        </span>
                    </div>

                    <div className='mt-3'>
                        <div class="user-home-task-details-modal-description m-0 p-0">
                            <TextareaAutosize
                                placeholder='Write a description for your task'
                                className='form-control user-home-task-details-modal-description-textarea'
                                onChange={handleTaskDescriptionChange}
                                // onFocus={handleFocus}
                                // onBlur={handleBlur}
                                // onChange={handleInputTaskDescriptionChange}
                                defaultValue={`${props.currentTaskDescription !== null ? props.currentTaskDescription : ''}`}
                            />
                        </div>
                    </div>
                    
                </Modal.Body>
                
            </Modal>
        </>
    );
};

export default TaskDetailsModal;