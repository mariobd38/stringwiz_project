import React, { useState, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';
// import { Popover } from '@mantine/core';
import { DatesProvider, DatePicker } from '@mantine/dates';
import { Popover } from 'antd';


import { Space, TimePicker } from 'antd';

import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

import {UpdateTaskInfo} from './../../DataManagement/Tasks/updateTask';

import './newHomeDueDatePopover.css';

const NewHomeDueDatePopover = (props) => {

    const {popoverTarget, currentTaskDueDate, setCurrentTaskDueDate, today, 
        setDueDatePopoverIsOpen,currentIndex,taskType,setTaskType} = props;

    const [todayIsActive, setTodayIsActive] = useState(false);
    const [currentTaskDueTime, setCurrentTaskDueTime] = useState(null);
    


    const handleDueDateIsToday = () => {
        setTodayIsActive(true);
        handleDueDateChange(dayjs(today).endOf('day').toDate());
        
    }
    
    const handleDueDateChange = (date) => {
        // setCurrentTaskDueDate(dayjs(date).endOf('day').toDate());
        setCurrentTaskDueDate(dayjs(date));
        console.log(date);
        UpdateTaskInfo(
            currentIndex, 
            "due date",
            taskType,
            setTaskType,
            dayjs(date),
            dayjs,
            true,
            setCurrentTaskDueDate,
        );
    }

    const handleDueDateClear = (event) => {
        UpdateTaskInfo(
            currentIndex, 
            event,
            taskType,
            setTaskType,
            null,
            dayjs,
            false,
            setCurrentTaskDueDate,
        );
        setCurrentTaskDueDate(null)
    }


    const handleDueDateTimeChange = (time) => {
        const updatedDateTime = dayjs(currentTaskDueDate).set('hour', dayjs(time).format('h')).set('minute', dayjs(time).format('m'));
        UpdateTaskInfo(
            currentIndex, 
            "due time",
            taskType,
            setTaskType,
            updatedDateTime,
            dayjs,
            true,
            setCurrentTaskDueDate,
        );
        
    }


    useEffect(() => {
        if (dayjs(today).format('MMM D, YYYY') === dayjs(currentTaskDueDate).format('MMM D, YYYY')) {
            setTodayIsActive(true);
        } else {
            setTodayIsActive(false);
        }
        // console.log(timeInput);
    });

    // useEffect(() => {
    //     console.log(currentTaskDueDate);
    // })

    const content = (
        <div>
            <Space className='pb-2 mx-2 d-flex justify-content-end align-items-center'>
                {currentTaskDueDate &&
                <span className='fafafa-color pe-2 lato-font-600 d-flex align-items-center'>
                    <CalendarTodayRoundedIcon className='me-2' style={{width: "14px"}}/>
                    {dayjs(currentTaskDueDate).format('MM/DD/YYYY')}
                </span>}
                <TimePicker placeholder='Add time' disabled={!currentTaskDueDate} defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate, 'HH:mm') : undefined}
                style={{backgroundColor: "#222529"}} className='user-home-calendar-time-picker' use12Hours 
                format="h:mm a" autoFocus={false} onChange={handleDueDateTimeChange} />
            </Space>
            <DatesProvider >
                    
                <DatePicker value={currentTaskDueDate} onChange={handleDueDateChange} className='user-home-calendar-date-picker pb-0 fafafa-color p-1'  />
                    {/* <hr className='fafafa-color'/> */}
                <div className='d-flex justify-content-between align-items-center mx-2 pt-3'>
                    
                    <button className={`lato-font user-home-calendar-today ${todayIsActive && 'clicked'} `}
                    onClick={handleDueDateIsToday}>
                        Today
                    </button>
                    <button className='lato-font user-home-calendar-clear' onClick={handleDueDateClear}>
                        Clear
                    </button>
                    
                </div>
            </DatesProvider> 
        </div>
    );

    const mergedArrow = useMemo(() => {
        return false;
    }, []);


    return (
        <div>
            <Space wrap>
            <Popover arrow={mergedArrow} content={content} trigger="click" style={{borderRadius: "10px",backgroundColor: "#222529", border: "none", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
            {popoverTarget}
            </Popover>
        </Space>
        </div>
        // <Popover trapFocus width={300} position="bottom" shadow="md" onOpen={handlePopoverOpen} onClose={() => setDueDatePopoverIsOpen(false)}
        //     style={{ zIndex: 9999 }}>
        //     <Popover.Target>
        //         {popoverTarget}
        //     </Popover.Target>
        //     <Space >
        //             <TimePicker style={{backgroundColor: "#222529"}} className='user-home-calendar-time-picker' use12Hours format="h:mm a" autoFocus={false} onChange={(event) => event.stopPropagation()}/>
        //         </Space>

        //     <Popover.Dropdown style={{borderRadius: "10px",backgroundColor: "#222529", border: "none", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
        //         <Space >
        //             <TimePicker style={{backgroundColor: "#222529"}} className='user-home-calendar-time-picker' use12Hours format="h:mm a" autoFocus={false} onChange={(event) => event.stopPropagation()}/>
        //         </Space>
        //         <DatesProvider >
                    
        //             <DatePicker value={currentTaskDueDate} onChange={handleDueDateChange} className='user-home-calendar-date-picker pb-0 fafafa-color p-1'  />
        //                 <hr className='fafafa-color'/>
        //                 <div className='d-flex justify-content-between align-items-center mx-2 pt-3'>
        //                     <button className={`lato-font user-home-calendar-today ${todayIsActive && 'clicked'} `}
        //                     onClick={handleDueDateIsToday}>
        //                         Today
        //                     </button>
        //                     <div className='d-flex'>
        //                         <TimeInput disabled={currentTaskDueDate === null}
        //                             className='user-home-calendar-date-time-picker fafafa-color ' defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate).format('hh:mm') : undefined}
        //                             leftSection={<AccessTimeRoundedIcon style={{width: "1.2rem"}} className='fafafa-color'/>}
        //                             onChange={handleDueDateTimeChange} 
        //                         />
                                
                                    
        //                     </div> 
                            
        //                 </div>
        //             </DatesProvider> 
        //     </Popover.Dropdown>
        // </Popover>

        



        // <Popover
        //     autoFocus={false}
        //     id={dueDatePopOverId}
        //     open={openDueDatePopover}
        //     anchorEl={dueDatePopoverAnchorEl}
        //     onClose={handleDueDatePopoverClose}
        //     anchorOrigin={{
        //         vertical: 'top',
        //         horizontal: 'left',
        //     }} 
        //     >
        //         <DatePicker className='py-3 px-2 user-home-calendar-date-picker' style={{color: "#fafafa"}}/>

        // </Popover>
    );
};

export default NewHomeDueDatePopover;