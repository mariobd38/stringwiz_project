import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';

import { DatePicker, DatesProvider } from '@mantine/dates';
import { Indicator } from '@mantine/core';

import './calendarBlock.css';

const CalendarBlock = (props) => {

    const { taskData,today } = props;
    const[taskDataWithMatchingDates, setTaskDataWithMatchingDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(dayjs(today));

    useEffect(() => {
        if(taskData) {
            // setTaskDataWithMatchingDates(taskData.filter(taskRow =>
            //     dayjs(taskRow.dueDate).isSame(dayjs(selectedDate), 'day')
            // ));
            const tasks = taskData.filter(taskRow =>
                dayjs(taskRow.dueDate).isSame(dayjs(selectedDate), 'day')
            );
            const sortedTasks = [...tasks].sort((a, b) => {
                if (a.status === 'Completed' && b.status !== 'Completed') {
                    return 1; // a should come before b
                } else if (a.status !== 'Completed' && b.status === 'Completed') {
                    return -1; // b should come before a
                } else {
                    return 0;
                }
            });
            setTaskDataWithMatchingDates(sortedTasks);
        }
    }, [taskData,selectedDate]);

    const [noEventScheduledDate, setNoEventScheduledDate] = useState(dayjs(today).format('MMM D, YYYY'));
    const handleEventDateSelection = (date) => {
        setNoEventScheduledDate(dayjs(date).format('MMM D, YYYY'));
        setSelectedDate(date);
    };

    useEffect(() => {
        if (today) {
            setSelectedDate(dayjs(today));
            setNoEventScheduledDate(dayjs(today).format('MMM D, YYYY'));
        }
    }, [today]);
    const [datePickerSize, setDatePickerSize] = useState(window.innerWidth < 700 ? 'xs' : 'sm');
    useEffect(() => {
        const handleResize = () => {
            setDatePickerSize(window.innerWidth < 600 ? 'xs' : 'sm');
        };
    
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);


    return (
        <div className='pt-3 pb-4 px-4 mb-4' style={{ backgroundColor: "#222529", borderRadius: "10px",border: "2px solid #313234" }} >
            <div className='d-flex justify-content-between pb-3'>
                <div className='user-home-calendar-text'>
                    Calendar
                </div>
                <div>
                    <MoreHorizRoundedIcon style={{color: "#fafafa"}}/>
                </div>
            </div>
            <div className='pt-2'>
                <div className='d-flex justify-content-center mb-3'>
                    <DatesProvider>
                        <DatePicker size={datePickerSize} value={selectedDate} onChange={handleEventDateSelection} className='user-home-calendar-date-picker' 
                        renderDay={(date) => {
                            const day = date.getDate();
                            const isDisabled = dayjs(date).format('YYYY-MM-DD') !== dayjs(selectedDate).format('YYYY-MM-DD');
                            
                            return (
                                taskDataWithMatchingDates.length > 0 ? 
                                <Indicator className='user-home-calendar-date-picker-indicator' inline size={20} color="red" offset={-8} label={taskDataWithMatchingDates.length} disabled={isDisabled}>
                                    <div>{day}</div>
                                </Indicator> : 
                                <div>{day}</div>
                            );
                          }}
                        style={{color: "#fafafa"}}/>
                    </DatesProvider>
                </div>

                <div className='d-flex flex-column' style={{maxHeight: "6.5rem", overflow: "auto"}}>
                {taskDataWithMatchingDates.length > 0 ? taskDataWithMatchingDates.map((item, index) => (
                    <div
                        key={item.name}
                        className='my-1 gap-2 user-home-calendar-current-day-item'
                    >  
                        <div className='d-flex flex-row justify-content-between'>

                            <div className='d-flex align-items-center' style={{width: item.dueDateTime ? "calc(100% - 120px)" : "calc(100% - 20px)"}}>
                                {item.status === 'Completed' ? 
                                    <CheckCircleRoundedIcon style={{color: "#048a66"}} className='user-home-task-check-icon' /> :
                                    <CheckCircleOutlineRoundedIcon className='user-home-task-check-icon' />
                                }
                                <div style={{width: "100%"}}>
                                    <div className='ps-1 user-home-calendar-item-name'>{item.name}</div>
                                </div>
                            </div>
                            {item.dueDateTime &&
                            <span className={`user-home-calendar-current-daytime-item`} >
                                <AccessTimeRoundedIcon className='me-1' style={{width:"1rem"}}/>{dayjs(item.dueDateTime).format('h:mm a')}
                            </span>}
                        </div>
                        <hr style={{margin: "0.05rem 0"}}/>
                        <div className='d-flex flex-column' style={{width: "fit-content"}}>
                            <div className='d-flex flex-row gap-1'>
                            <span className='user-home-calendar-current-day-item-name-button'>Task</span>
                            {item.priority &&
                            <span className={`user-home-calendar-current-day-item-priority-name-button ${item.priority.toLowerCase()}`}>
                                <TourRoundedIcon className='me-1' style={{width:"1rem"}}/>
                                <span>{item.priority}</span>
                            </span>
                            }
                            </div>
                        </div>
                    </div>
                ))
                 : 
                <div style={{color: "#c8c8c8",padding: "16px 0px"}} className='d-flex lato-font justify-content-center text-center' >
                    No events or tasks scheduled for {noEventScheduledDate}
                </div>
                }
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <button className='user-home-create-milestone-button-dark' >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalendarBlock;