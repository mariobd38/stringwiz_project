import React, { useMemo, useState, useRef, useEffect } from 'react';

import dayjs from 'dayjs';
import { Popover } from '@mantine/core';
import { DatesProvider, DatePicker, TimeInput } from '@mantine/dates';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import {UpdateTaskInfo} from './../../DataManagement/Tasks/updateTask';

import './newHomeDueDatePopover.css';

const NewHomeDueDatePopover = (props) => {

    const {popoverTarget, currentTaskDueDate, setCurrentTaskDueDate, today, 
        selectedDate, setSelectedDate,setDueDatePopoverIsOpen,currentIndex,taskType,setTaskType} = props;

    const handleDateSelection = useMemo(() => (date) => {
        console.log(date);
        setSelectedDate(date);
    }, [setSelectedDate]);
    
    const handleTimeSelection = useMemo(() => (time) => {
        const currentlySelectedDate = (selectedDate !== null && selectedDate !== false) ? dayjs(selectedDate) : (currentTaskDueDate !== null) ? dayjs(currentTaskDueDate) : dayjs(today);
        
        console.log(currentlySelectedDate.hour(time.hour()).minute(time.minute()));
        setSelectedDate(currentlySelectedDate.hour(time.hour()).minute(time.minute()));
        
    }, [setSelectedDate, selectedDate, currentTaskDueDate, today]);

    //new
    const timeInputRef = useRef(null);
    const [todayIsActive, setTodayIsActive] = useState(false);
    const handlePopoverOpen = () => {
        setDueDatePopoverIsOpen(true);
        setTodayIsActive(false);
        if (timeInputRef.current) {
            timeInputRef.current.blur();
        }
    };

    const handleDueDateIsToday = () => {
        setTodayIsActive(true);
        handleDueDateChange(dayjs(today).endOf('day'));
    }
    
    const handleDueDateChange = (date) => {
        setCurrentTaskDueDate(dayjs(date).endOf('day'));
        console.log(date);
        UpdateTaskInfo(
            currentIndex, 
            "due date",
            taskType,
            setTaskType,
            dayjs(date),
            dayjs,
            false,
            setCurrentTaskDueDate,
        );
    }
    const[currentTaskDueTime, setCurrentTaskDueTime] = useState(null);

    useEffect(() => {
        if (dayjs(today).format('MMM D, YYYY') === dayjs(currentTaskDueDate).format('MMM D, YYYY')) {
            setTodayIsActive(true);
        } else {
            setTodayIsActive(false);

        }
    },[today,currentTaskDueDate]);


    return (
        <Popover trapFocus width={300} position="bottom" shadow="md" onOpen={handlePopoverOpen} onClose={() => setDueDatePopoverIsOpen(false)}
            style={{ zIndex: 9999 }}>
            <Popover.Target>
                {popoverTarget}
            </Popover.Target>

            <Popover.Dropdown style={{borderRadius: "10px",backgroundColor: "#222529", border: "none", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <DatesProvider >
                    <DatePicker value={currentTaskDueDate} onChange={handleDueDateChange} className='user-home-calendar-date-picker pb-0 fafafa-color p-1'  />
                        <hr className='fafafa-color'/>
                        <div className='d-flex justify-content-between align-items-center mx-2'>
                            <button className={`lato-font user-home-calendar-today ${todayIsActive && 'clicked'} `}
                            onClick={handleDueDateIsToday}>
                                Today
                            </button>
                            <div className='d-flex'>

                                <TimeInput ref={timeInputRef} 
                                    className='user-home-calendar-date-time-picker fafafa-color '
                                    rightSection={<AccessTimeRoundedIcon style={{width: "1.2rem"}} className='fafafa-color'/>}
                                />
                                    
                            </div> 
                            
                        </div>
                        
                        {/* <div className='d-flex justify-content-between align-items-center px-4 pb-4'>
                            <TimeInput ref={timeInputRef}
                                className='user-home-calendar-date-time-picker fafafa-color w-50'
                            />
                            <div className='due-date-popover-update-datetime'>
                                <CheckRounded style={{padding: "2px"}}/>
                            </div>
                        </div> */}
                    </DatesProvider> 
            </Popover.Dropdown>
        </Popover>
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