import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Breadcrumbs, Link, Typography } from '@mui/material';

import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import { Tooltip } from '@mantine/core';

import './taskDetailsModalHeader.css';

function handleBreadcrumbClick(event) {
    event.preventDefault();
}

const TaskDetailsModalHeader = (props) => {
    const {userFullName,currentTaskDateFormatter,currentTaskCreationDate,currentTaskLastUpdatedOn,handleTaskDetailsModalClose} = props;

    const breadcrumbs = [
        <Link underline="none" key="1" color="#dedede" href="/" onClick={handleBreadcrumbClick}>
            Personal Workspace
        </Link>,
        <Typography key="3" color="#dedede">
            <span className='d-flex align-items-center' style={{fontSize: "1rem"}}>
                My tasks
                <LockIcon className='ms-1 ' style={{ width: "0.9rem" }}/>
            </span>
        </Typography>,
    ];

    return (
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
                    
                    <Tooltip multiline
                        position="bottom"
                        withArrow
                        transitionProps={{ duration: 200 }}
                        label={<>
                            Created by {userFullName} on {currentTaskDateFormatter(currentTaskCreationDate)}
                            <br />
                            Last Updated on {currentTaskDateFormatter(currentTaskLastUpdatedOn)}
                        </>}
                        offset={8} openDelay={400} className='text-center fafafa-color lato-font' style={{backgroundColor: "#338b6f", borderRadius: "6px"}}> 
                        <div className='m-auto user-home-task-details-created-on d-flex align-items-center'>Created on {currentTaskDateFormatter(currentTaskCreationDate)}</div>
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
    );
};

export default TaskDetailsModalHeader;