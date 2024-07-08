import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {getTaskInfo} from './../../DataManagement/Tasks/getTasks';

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

const NewHome = () => {
    const dayjs = require('dayjs');
    const [taskData, setTaskData] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [today, setToday] = useState(null);
    const [allTagData, setAllTagData] = useState([]);

    const location = useLocation();

    const passedUserInfo = location.state?.userInfo;
    const [userFullName, setUserFullName] = useState(passedUserInfo?.fullName || '');
    const [userEmail, setUserEmail] = useState(passedUserInfo?.email || '');
    const [userProfilePicture, setUserProfilePicture] = useState('');
    const [userInfo, setUserInfo] = useState(passedUserInfo || null);

    // useEffect(() => {
    //     if (!passedUserInfo) {
    //         getUserInfo().then(data => {
    //             setUserInfo(data);
    //             setUserFullName(data.fullName);
    //             setUserEmail(data.email);
    //             setUserProfilePicture(data.profilePicture);
    //         });
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log(userFullName);
    // }, );

    useEffect(() => {
        const fetchData = async () => {
            if (!passedUserInfo) {
                const data = await getUserInfo(setUserInfo);
                console.log(data);
                if (data) {
                    setUserInfo(data);
                    setUserFullName(data.fullName);
                    setUserEmail(data.email);
                    setUserProfilePicture(data.profilePicture);
                }
            }
        };
        fetchData();
    }, [passedUserInfo]);

    useEffect(() => {
        console.log(userFullName);
    }, [userFullName]);
    
    // console.log(userFullName);
    
    useEffect(() => {
        getTaskInfo(setTaskData);
        // setUpcomingTasks(taskData);
        var now = dayjs().format('YYYY-MM-DD');
            setToday(now);

            const todays_date = now;
            const upcoming = [];
            const overdue = [];
            const completed = [];

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

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    return (
        <>
            {userFullName && <HomeNavbar 
                userFullName={userFullName}
                userEmail={userEmail}
            />}
            <div className='container m-0 p-0'>
                {userFullName &&
                <HomeSidebar className='user-home-sidebar p-0'
                    userFullName={userFullName}
                    openSidebarToggle={openSidebarToggle}
                    setOpenSidebarToggle={setOpenSidebarToggle}
                />}
            </div>

            <div className={`row user-home-all-content ${openSidebarToggle && 'open' }`}>
                <HomeHeader />

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
                                    upcomingTasks={upcomingTasks} overdueTasks={overdueTasks}
                                    completedTasks={completedTasks}
                                    allTagData={allTagData} setAllTagData={setAllTagData}/>}
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