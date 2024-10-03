import React from 'react';

import { Tooltip,Breadcrumbs, Anchor,Divider,Text, Button } from '@mantine/core';

import Icons from '../../../icons/icons';

import './taskDetailsModalHeader.css';

const TaskDetailsModalHeader = (props) => {
    const {userFullName,handleTaskDetailsModalClose} = props;

    const breadcrumbItems = [
    { title: `${userFullName.split(" ")[0]}'s Workspace`, href: '#' },
    { title: `My Tasks`, href: '#' },
    ].map((item, index) => (
    <Anchor href={item.href} key={index} className='user-home-task-details-modal-breadcrumbs'>
        {item.title}
    </Anchor>
    ));

    return (
        <div className='d-flex justify-content-between user-home-task-details-modal-header-parent'>
            <div className='user-home-task-details-modal-header'>
                <Text >
                    <Breadcrumbs separator={Icons('IconChevronRight',13,13,'#c8cacc')} >
                        {breadcrumbItems}
                    </Breadcrumbs>
                </Text>
                <Divider size="xs" orientation="vertical" ms={13} me={13} m='auto' h={25} bd='.1px solid #676869' />
                <span className='gap-2 d-flex'>

                    <Anchor href='/home'> {Icons('IconSquareChevronUp',24,24)}</Anchor>
                    <Anchor href='/home'> {Icons('IconSquareChevronDown',24,24)}</Anchor>
                </span>
            </div>
            <div className='d-flex justify-content-end'>
                <div className='m-auto d-flex gap-1 my-3 my-sm-1'>
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
                        <Button className='user-home-task-details-modal-share-btn mx-sm-2' m='auto' mx='1'>
                            <div className='d-flex align-items-center'>
                                <div className='me-2'>
                                    {Icons('IconShare',18,18)}
                                </div>
                                <span>Share</span>
                            </div>
                        </Button>
                    </div>
                    <div className='user-home-task-details-modal-header-right-btn'>
                    <div className='mx-1 mx-sm-2 m-auto'>
                            {Icons('IconBookmark',24,24)}
                        </div>
                    </div>
                    <div className='user-home-task-details-modal-header-right-btn'>
                        <div className='mx-1 mx-sm-2 m-auto'>
                            {Icons('IconDots',24,24)}
                        </div>
                    </div>  
                    <div className='user-home-task-details-modal-header-right-btn' onClick={handleTaskDetailsModalClose}>
                        <div className='mx-1 mx-sm-2 m-auto'>
                            {Icons('IconX',24,24,'#fafafa')}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default TaskDetailsModalHeader;