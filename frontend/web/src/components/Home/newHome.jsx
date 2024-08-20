import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HomeHeader from '../Home/HomeHeader/homeHeader';
import HomeNavbar from './HomeNavbar/homeNavbar';
import TaskCard from './TaskCard/taskCard';
import ProjectCard from './ProjectCard/projectCard';
import HomeSidebar from './HomeSidebar/homeSidebar';
import CalendarBlock from './CalendarBlock/calendarBlock';
import MilestoneBlock from './MilestoneBlock/milestoneBlock';

// import StatBlocks from './HomeHeader/StatBlocks/statBlocks';

import './newHome.css';
import { getUserInfo } from '../../DataManagement/Users/getUserInfo';
import { getTaskInfo } from './../../DataManagement/Tasks/getTasks';

const NewHome = () => {
    const dayjs = require('dayjs');
    const [taskData, setTaskData] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [todaysTasks, setTodaysTasks] = useState([]);
    const [unscheduledTasks, setUnscheduledTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [today, setToday] = useState(null);

    const location = useLocation();

    const passedUserInfo = location.state?.userInfo;
    const [userFullName, setUserFullName] = useState(passedUserInfo?.fullName || '');
    const [userEmail, setUserEmail] = useState(passedUserInfo?.email || '');
    const [userProfilePicture, setUserProfilePicture] = useState('');
    const [userProfileDto, setUserProfileDto] = useState('');
    // const [userInfo, setUserInfo] = useState(passedUserInfo || null);

    useEffect(() => {
        const fetchData = async () => {
            if (!passedUserInfo) {
                const data = await getUserInfo(passedUserInfo || null);
                if (data) {
                    // setUserInfo(data);
                    setUserFullName(data.fullName);
                    setUserEmail(data.email);
                    setUserProfilePicture(data.picture);
                    setUserProfileDto(data.profileDto);
                }
            }
        };
        fetchData();
    }, [passedUserInfo]);
    
    useEffect(() => {
        getTaskInfo(setTaskData);
        // setUpcomingTasks(taskData);
        var now = dayjs().format('YYYY-MM-DD');
            setToday(now);

            const todays_date = now;
            const ongoing = [];
            const unscheduled = [];
            const today = [];
            const overdue = [];
            const completed = [];
            taskData.forEach((task) => {
                const currentDueDate = task.dueDate ? dayjs(task.dueDate).format('YYYY-MM-DD') : null;
                // console.log(currentDueDate);
                if (currentDueDate === todays_date && task.status !== 'Completed') {
                    today.push(task);
                } else if ((currentDueDate >= todays_date) && task.status !== 'Completed') {
                    ongoing.push(task);
                } 
                else if (currentDueDate === null && task.status !== 'Completed') {
                    unscheduled.push(task);
                } 
                else if (todays_date > currentDueDate && task.status !== 'Completed') {
                    overdue.push(task);
                } else if (task.status === 'Completed') {
                    completed.push(task);
                } 
            });
            // console.log(today);
        setTodaysTasks(today);
        setOngoingTasks(ongoing);
        setUnscheduledTasks(unscheduled);
        setOverdueTasks(overdue);
        setCompletedTasks(completed);
    }, [taskData,dayjs]);
    // console.log(todaysTasks);

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    return (
        <>
            {userFullName && <HomeNavbar 
                userFullName={userFullName}
                userEmail={userEmail}
                userProfilePicture={userProfilePicture}
                userProfileDto={userProfileDto}
            />}
            <div className='container m-0 p-0'>
                {userFullName &&
                <HomeSidebar className='user-home-sidebar p-0'
                    userFullName={userFullName}
                    userEmail={userEmail}
                    openSidebarToggle={openSidebarToggle}
                    setOpenSidebarToggle={setOpenSidebarToggle}
                />}
            </div>

            <div className={`row user-home-all-content ${openSidebarToggle && 'open' }`}>
                <HomeHeader 
                    openSidebarToggle={openSidebarToggle}
                    setOpenSidebarToggle={setOpenSidebarToggle}
                />

                <div className='container' style={{width: "100%"}}>
                    <div className='row'>
                        <div className="col-lg-8 task-card-parent">
                            
                            <div className='py-3'>
                                <div className='d-flex justify-content-between py-2'>
                                    {userFullName &&
                                    <TaskCard 
                                    userFullName={userFullName}
                                    userEmail={userEmail}
                                    taskData={taskData} setTaskData={setTaskData} today={today} 
                                    ongoingTasks={ongoingTasks} 
                                    todaysTasks={todaysTasks}
                                    unscheduledTasks={unscheduledTasks}
                                    overdueTasks={overdueTasks}
                                    completedTasks={completedTasks}
                                    userProfileDto={userProfileDto}
                                    userProfilePicture={userProfilePicture}
                                    />}
                                    
                                </div>
                            </div>

                            <div className='d-flex justify-content-between py-2'>
                                <ProjectCard 
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-12 user-home-right-side-block">
                            <div className='mt-4 d-md-block col-12'>
                                <div className="row">
                                    <div className='col-lg-12 calendar-block-parent'>
                                        <CalendarBlock 
                                            taskData={taskData}
                                            today={today}
                                        />
                                    </div>
                                    <div className='col-lg-12 milestone-block-parent'>
                                        <MilestoneBlock />

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewHome;