import React, { useState, useEffect } from 'react';

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import {getTaskInfo} from './../../DataManagement/Tasks/getTasks';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import HomeHeader from '../Home/HomeHeader/homeHeader';
import HomeNavbar from './HomeNavbar/homeNavbar';
import TaskCard from './TaskCard/taskCard';
import ProjectCard from './ProjectCard/projectCard';
import HomeSidebar from './HomeSidebar/homeSidebar';
import MilestoneBlock from './MilestoneBlock/milestoneBlock';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

// import StatBlocks from './HomeHeader/StatBlocks/statBlocks';

import './newHome.css';

const NewHome = () => {
    const dayjs = require('dayjs');
    const [taskData, setTaskData] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [today, setToday] = useState(null);
    const [allTagData, setAllTagData] = useState([]);
    
    useEffect(() => {
        getTaskInfo(setTaskData);
        // setUpcomingTasks(taskData);
        var now = dayjs().format('YYYY-MM-DD');
            setToday(now);

            const todays_date = now;
            const upcoming = [];
            const overdue = [];
            const completed = [];
            // console.log(taskData);

            taskData.forEach((task) => {
                
                if ((task.dueDate == null || task.dueDate >= todays_date) && task.status !== 'Completed') {
                    upcoming.push(task);
                } else if (todays_date > task.dueDate && task.status !== 'Completed') {
                    overdue.push(task);
                }else if (task.status === 'Completed') {
                    completed.push(task);
                } 
            });
        setUpcomingTasks(upcoming);
        setOverdueTasks(overdue);
        setCompletedTasks(completed);
    }, [taskData,dayjs]);

    useEffect(() => {
        if (today) {
            setSelectedDate(dayjs(today));
            setNoEventScheduledDate(dayjs(today).format('MMM D, YYYY'));
        }
    }, [today,dayjs]);

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const [selectedDate, setSelectedDate] = useState(dayjs(today));
    const [noEventScheduledDate, setNoEventScheduledDate] = useState(dayjs(today).format('MMM D, YYYY'));
    const handleEventDateSelection = (date) => {
        setNoEventScheduledDate(dayjs(date).format('MMM D, YYYY'));
        setSelectedDate(date);
    };


    const[taskDataWithMatchingDates, setTaskDataWithMatchingDates] = useState([]);
    useEffect(() => {
        if(taskData) {
            setTaskDataWithMatchingDates(taskData.filter(taskRow =>
                dayjs(taskRow.dueDate).isSame(dayjs(selectedDate), 'day')
            ));
        }
    }, [taskData,selectedDate,dayjs])

    return (
        <>
            <HomeNavbar></HomeNavbar>
            <div className='container m-0 p-0'>
                <HomeSidebar className='user-home-sidebar p-0'
                openSidebarToggle={openSidebarToggle}
                setOpenSidebarToggle={setOpenSidebarToggle}
                />
            </div>

            <div className={`row user-home-all-content ${openSidebarToggle && 'open' }`}>
                <div className='d-flex align-items-center'>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke="#d3d3d3" strokeWidth="2"/>
                        <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke={`#d3d3d3`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className='ms-2 lato-font-600' style={{color: "#d3d3d3", fontSize: "1.3rem"}}>Home</span>
                </div>

                <HomeHeader />

                {/* <StatBlocks upcomingTasks={upcomingTasks} /> */}

                <div className='container' style={{width: "100%"}}>
                    <div className='row'>
                        <div className="col-xl-8 col-8">
                            
                            <div className='py-3'>
                                <div className='d-flex justify-content-between py-2'>
                                    <TaskCard taskData={taskData} setTaskData={setTaskData} today={today} 
                                    upcomingTasks={upcomingTasks} setUpcomingTasks={setUpcomingTasks} overdueTasks={overdueTasks} setOverdueTasks={setOverdueTasks}
                                    completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}
                                    allTagData={allTagData} setAllTagData={setAllTagData}/>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between py-2'>
                                <ProjectCard />
                            </div>
                        </div>

                        <div className="col-xl-4 col-12">
                            <div className='mt-4 d-md-block'>

                                <div className='pt-3 pb-4 px-4 mb-4' style={{ backgroundColor: "#222529", borderRadius: "10px",border: "2px solid #313234" }} >
                                    <div className='d-flex justify-content-between'>
                                        <div style={{color: "#fafafa", fontFamily: "Lato",fontWeight: "600", fontSize: "1.2rem"}}>
                                            Calendar
                                        </div>
                                        <div>
                                            <MoreHorizRoundedIcon style={{color: "#fafafa"}}/>
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className='d-flex justify-content-center '>

                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                                    <DemoItem >
                                                    <DateCalendar className='user-home-calendar-date-picker' style={{color: "#fafafa"}} 
                                                    value={selectedDate} suppressWarning onChange={handleEventDateSelection} />
                                                    </DemoItem>
                                                </DemoContainer>
                                                </LocalizationProvider>

                                        </div>
                                        {taskDataWithMatchingDates.length > 0 ? taskDataWithMatchingDates.map((item, index) => (
                                            <div
                                                key={item.name}
                                                className='d-flex mb-3 justify-content-between lato-font user-home-calendar-current-day-item'
                                            >  
                                                <div  className='d-flex justify-content-center'>
                                                    <CheckRoundedIcon className='user-home-task-check-icon' />
                                                    <span className='ps-2'>{item.name}</span>
                                                </div>
                                                <div className={`user-home-calendar-current-daytime-item ${dayjs(item.dueDate)>=dayjs(today) ? 'upcoming' : 'delayed'}`} >
                                                    {dayjs(item.dueDate).format('h:mm a')}
                                                </div>
                                            </div>
                                        )) : 
                                        <div style={{color: "#c8c8c8",padding: "16px 0px"}} className='d-flex lato-font justify-content-center mb-3' 
                                           >
                                            No events scheduled for {noEventScheduledDate}
                                        </div>
                                        }
                                        <div className='d-flex justify-content-center'>
                                            <button className='user-home-create-milestone-button-dark' >
                                                Create an event
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <MilestoneBlock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewHome;