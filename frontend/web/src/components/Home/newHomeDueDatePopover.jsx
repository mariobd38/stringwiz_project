import React, { useMemo } from 'react';

import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

import './newHomeDueDatePopover.css';

const NewHomeDueDatePopover = ({currentTaskDueDate, dueDatePopoverAnchorEl, handleDueDatePopoverClose, today, handleTaskUpdate, selectedDate, setSelectedDate, setDueDateClockIsOpen, dueDateClockIsOpen}) => {

    const openDueDatePopover = Boolean(dueDatePopoverAnchorEl);
    const dueDatePopOverId = openDueDatePopover ? 'simple-popover' : undefined;

    const handleDateSelection = useMemo(() => (date) => {
        console.log(date);
        setSelectedDate(date);
    }, [setSelectedDate]);
    
    const openDueDateCalendar = (event) => {
        setDueDateClockIsOpen(false);
    }
    const openDueDateClock = (event) => {
        setDueDateClockIsOpen(true);
    }

    const handleTimeSelection = useMemo(() => (time) => {
        const currentlySelectedDate = (selectedDate !== null && selectedDate !== false) ? dayjs(selectedDate) : (currentTaskDueDate !== null) ? dayjs(currentTaskDueDate) : dayjs(today);
        
        console.log(currentlySelectedDate.hour(time.hour()).minute(time.minute()));
        setSelectedDate(currentlySelectedDate.hour(time.hour()).minute(time.minute()));
        

    }, [setSelectedDate, selectedDate, currentTaskDueDate, today]);


    return (
        <Popover
            id={dueDatePopOverId}
            open={openDueDatePopover}
            anchorEl={dueDatePopoverAnchorEl}
            onClose={handleDueDatePopoverClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }} 
            >
                {!dueDateClockIsOpen ?
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar suppressWarning onChange={handleDateSelection} className='user-home-date-picker' defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate) : dayjs(today)} style={{backgroundColor: "#121212", borderTopColor: "#121212", color: "#fafafa"}}/>
                    <div className={`pb-2 d-flex justify-content-around m-auto`} style={{backgroundColor: "#121212"}}> 
                        <div className='m-auto'>
                            <AccessTimeRoundedIcon className='date-time-picker-btn' onClick={openDueDateClock}/>
                        </div>
                        <div className='mx-5 me-4'>
                            <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                            <Button className='date-calendar-btn' onClick={handleTaskUpdate}  >OK</Button>
                    
                        </div>
                    </div>
                    
                </LocalizationProvider> : 
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    
                    <StaticTimePicker onChange={handleTimeSelection} className='user-home-time-picker' defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate) : undefined}/>
                    <div className={`pb-2 d-flex justify-content-around m-auto`} style={{backgroundColor: "#121212"}}> 
                        <div className='m-auto'>
                            <CalendarTodayRoundedIcon className='date-time-picker-btn' onClick={openDueDateCalendar}/>
                        </div>
                        <div className='mx-5 me-4'>
                            <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                            <Button className='date-calendar-btn'  onClick={handleTaskUpdate} >OK</Button>
                    
                        </div>
                    </div>
                </LocalizationProvider>

                }
        </Popover>
    );
};

export default NewHomeDueDatePopover;