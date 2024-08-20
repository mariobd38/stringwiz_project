import React, { useState, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DatesProvider, DatePicker } from '@mantine/dates';

import { Popover, Space, TimePicker } from 'antd';
import { DatePicker as AntDatePicker }  from 'antd';

import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

import { UpdateTaskInfo } from './../../DataManagement/Tasks/updateTask';

import './newHomeDueDatePopover.css';

const NewHomeDueDatePopover = (props) => {

    const {popoverTarget, currentTaskDueDate, setCurrentTaskDueDate, today, currentTaskDueDateTime, setCurrentTaskDueDateTime,
        currentIndex,taskType,setTaskType, dueDatePopoverIsOpen, setDueDatePopoverIsOpen} = props;

    const [todayIsActive, setTodayIsActive] = useState(false);
    const [initialDueDate, setInitialDueDate] = useState(dayjs(currentTaskDueDate));

    // console.log(currentTaskDueDate);
    const handleDueDateIsToday = () => {
        setTodayIsActive(true);
        handleDueDateChange(dayjs(today).endOf('day').toDate());
    }
    useEffect(() => {
        if (currentTaskDueDate) {
            setInitialDueDate(dayjs(currentTaskDueDate));
        }
    }, [currentTaskDueDate]);
    
    const handleDueDateChange = (date) => {
        // setCurrentTaskDueDate(dayjs(date).endOf('day').toDate());

        // if (date[0] !== null && date[1] === null) {
        //     setDate((current) => new Date(current.getFullYear() + 1, 1));
        // }
        // if (!dayjs(date).isSame(dayjs(currentTaskDueDate), 'day')) {
        if (date === null) {
            UpdateTaskInfo(
                currentIndex, 
                "clear date",
                taskType,
                setTaskType,
                null,
                dayjs,
                setCurrentTaskDueDate,
                setCurrentTaskDueDateTime
            );
            setCurrentTaskDueDate(null)
        } else {

            // setCurrentTaskDueDate(dayjs(date).toDate());
            // setCurrentTaskDueDateTime(null);
            let updatedDateTime = null;
            if (currentTaskDueDateTime)
                updatedDateTime = dayjs(date).set('hour', dayjs(currentTaskDueDateTime).format('HH')).set('minute', dayjs(currentTaskDueDateTime).format('m'));
            else
                updatedDateTime = dayjs(date).endOf('day').toDate();
            
            UpdateTaskInfo(
                currentIndex, 
                "due date",
                taskType,
                setTaskType,
                dayjs(updatedDateTime),
                dayjs,
                setCurrentTaskDueDate,
                setCurrentTaskDueDateTime
            );
        }
    }

    const handleDueDateTimeChange = (time) => {
        let updatedDateTime = null;
        if (currentTaskDueDate && !time) {
            updatedDateTime = dayjs(currentTaskDueDate);
            setCurrentTaskDueDateTime(null);
            UpdateTaskInfo(
                currentIndex, 
                "clear date time",
                taskType,
                setTaskType,
                updatedDateTime,
                dayjs,
                setCurrentTaskDueDate,
                setCurrentTaskDueDateTime
            );
        } else {
            updatedDateTime = dayjs(currentTaskDueDate).set('hour', dayjs(time).format('HH')).set('minute', dayjs(time).format('m'));
            setCurrentTaskDueDateTime(updatedDateTime);
            UpdateTaskInfo(
                currentIndex, 
                "due time",
                taskType,
                setTaskType,
                updatedDateTime,
                dayjs,
                setCurrentTaskDueDate,
                setCurrentTaskDueDateTime
            );
        }
    }

    useEffect(() => {
        if (dayjs(today).format('MMM D, YYYY') === dayjs(currentTaskDueDate).format('MMM D, YYYY')) {
            setTodayIsActive(true);
        } else {
            setTodayIsActive(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    dayjs.extend(customParseFormat);
    const dateFormatList = ['YYYY-MM-DD', 'M-D-YY', 'M-D-YYYY', 'MM-DD-YY', 'MM-DD-YYYY'];
    const [open, setOpen] = useState(false);
    const handleDatePickerClick = () => {
        setOpen(false);
    };
    const handleDueDateInputChange = (event) => {
        let input = event.target.value;
        if (event.key === 'Enter') {
            input = dayjs(input).format('MMMM D YY');
            if (input !== 'Invalid Date') {
                setCurrentTaskDueDate(input);
                let updatedDateTime = null;
                if (currentTaskDueDateTime)
                    updatedDateTime = dayjs(input).set('hour', dayjs(currentTaskDueDateTime).format('HH')).set('minute', dayjs(currentTaskDueDateTime).format('m'));
                else
                    updatedDateTime = dayjs(input).endOf('day').toDate();
                UpdateTaskInfo(
                    currentIndex, 
                    "due date",
                    taskType,
                    setTaskType,
                    dayjs(updatedDateTime),
                    dayjs,
                    setCurrentTaskDueDate,
                    setCurrentTaskDueDateTime
                );
            }
        }
    }

    const content = (
        <div>
            <Space className='pb-2 mx-2 d-flex justify-content-end align-items-center h-100'>
                <AntDatePicker 
                    defaultValue={currentTaskDueDate ? dayjs(currentTaskDueDate) : undefined}
                    value={currentTaskDueDate ? dayjs(currentTaskDueDate) : undefined}
                    placeholder={'Select date'} 
                    className='user-home-calendar-date-input user-home-calendar-time-picker' 
                    open={open}
                    variant="filled"
                    onClick={handleDatePickerClick} 
                    style={{backgroundColor: "#323539"}} 
                    onKeyDown={handleDueDateInputChange}
                    format={dateFormatList[4]} 
                    suffixIcon={<CalendarTodayRoundedIcon style={{width: "15px"}}/>} 
                    onChange={handleDueDateChange}
                />

                <TimePicker 
                    placeholder='Add time' 
                    disabled={!currentTaskDueDate} 
                    defaultValue={currentTaskDueDateTime ? dayjs(currentTaskDueDateTime) : undefined}
                    //value={currentTaskDueDateTime ? dayjs(currentTaskDueDateTime) : undefined}
                    style={{backgroundColor: "#323539", border: "none"}} 
                    variant="filled"
                    className='user-home-calendar-time-picker' 
                    use12Hours
                    format="h:mm a" 
                    autoFocus={false} 
                    onChange={handleDueDateTimeChange}
                    //onChange={(time) => setCurrentTaskDueDateTime(time)}
                />
            </Space>
            <DatesProvider >
                    
                {/* <DatePicker 
                    date={currentTaskDueDate}
                    onDateChange={setCurrentTaskDueDate}
                    value={currentTaskDueDate} 
                    onChange={handleDueDateChange} 
                    className='user-home-calendar-date-picker pb-0 fafafa-color p-1'  
                /> */}
                <DatePicker
                    defaultDate={currentTaskDueDate ? new Date(dayjs(currentTaskDueDate).format('YYYY'), dayjs(currentTaskDueDate).format('MM')-1) : undefined}
                    date={!dayjs(currentTaskDueDate).isSame(initialDueDate, 'day') ? undefined : currentTaskDueDate}
                    defaultValue={currentTaskDueDate ? new Date(dayjs(currentTaskDueDate).format('YYYY'), dayjs(currentTaskDueDate).format('MM')) : undefined}
                    value={currentTaskDueDate} 
                    onChange={handleDueDateChange} 
                    className='user-home-calendar-date-picker pb-0 fafafa-color p-1'  
                />

                {/* <div className='d-flex justify-content-center align-items-center mx-2 pt-2'>
                    <button className={`lato-font user-home-calendar-today ${todayIsActive && 'clicked'} `}
                    onClick={handleDueDateIsToday}>
                        Today
                    </button>
                    
                </div> */}
            </DatesProvider> 
        </div>
    );

    const mergedArrow = useMemo(() => {
        return false;
    }, []);

    return (
        <div>
            <Space wrap className='due-date-popover-space-parent h-100'>
                <Popover arrow={mergedArrow} content={content} trigger="click" opened={dueDatePopoverIsOpen} onOpenChange={() => setDueDatePopoverIsOpen((o) => !o)}
                className='h-100'
                style={{borderRadius: "10px",backgroundColor: "#222529", border: "none", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                    {popoverTarget}
                </Popover>
                
            </Space>
        </div>
    );
};

export default NewHomeDueDatePopover;