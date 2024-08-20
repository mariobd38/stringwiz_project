import React from 'react';

import Button from 'react-bootstrap/Button';

import { Tooltip,Breadcrumbs, Anchor,Divider,Text } from '@mantine/core';

import {
    IconChevronRight,IconX,IconBookmark,IconShare,IconSquareChevronUp,IconSquareChevronDown,IconDots
  } from '@tabler/icons-react';


import './taskDetailsModalHeader.css';

const TaskDetailsModalHeader = (props) => {
    const {userFullName,handleTaskDetailsModalClose} = props;

    const breadcrumbItems = [
    { title: `${userFullName.split(" ")[0]}'s Workspace`, href: '#' },
    // { title: 'Mantine hooks', href: '#' },
    ].map((item, index) => (
    <Anchor href={item.href} key={index} className='user-home-task-details-modal-breadcrumbs'>
        {item.title}
    </Anchor>
    ));

    return (
        <div className='d-flex justify-content-between user-home-task-details-modal-header-parent'>
            <div className='user-home-task-details-modal-header'>
                <Text >
                    <Breadcrumbs separator={<IconChevronRight width={18} color='#c8cacc' />} >
                        {breadcrumbItems}
                    </Breadcrumbs>
                </Text>
                <Divider size="xs" orientation="vertical" ms={13} me={13} m='auto' h={25} bd='.1px solid #676869' />
                <span className='gap-2 d-flex'>
                    <Anchor href='/home'> <IconSquareChevronUp /></Anchor>
                    <Anchor href='/home'> <IconSquareChevronDown /></Anchor>
                </span>
            </div>
            <div className='d-flex justify-content-end'>
                <div className='m-auto d-flex me-3 my-3 my-sm-1'>
                    {/* <div className='d-flex align-items-center flex-column d-none d-md-flex mx-2 lato-font'>
                        
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
                    </div> */}
                    {/* <div className='divider m-auto mx-2 d-none d-md-flex'></div> */}
                    <div className='d-flex align-items-center'>
                        <Button className='user-home-task-details-modal-share-btn m-auto mx-1 mx-sm-2'><IconShare width={18} className='me-1' />Share</Button>
                    </div>
                    <div className='user-home-task-details-modal-header-right-btn d-flex align-items-center'>
                        <IconBookmark className='mx-1 mx-sm-2 m-auto'/>
                    </div>
                    <div className='user-home-task-details-modal-header-right-btn d-flex align-items-center'>
                        <IconDots className='mx-1 mx-sm-2 m-auto'/>
                    </div>  
                </div>
                <div className='m-auto d-none d-sm-flex'>
                    <IconX className='user-home-task-details-modal-close-btn me-3' onClick={handleTaskDetailsModalClose}/>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailsModalHeader;