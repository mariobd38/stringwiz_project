import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import HomeHeader from '../Home/HomeHeader/homeHeader';
import HomeNavbar from './HomeNavbar/homeNavbar';
import TaskCard from './TaskCard/taskCard';
import ProjectCard from './ProjectCard/projectCard';
import QuickActions from './QuickActions/quickActions';
import HomeSidebar from './HomeSidebar/homeSidebar';
import CalendarBlock from './CalendarBlock/calendarBlock';
import MilestoneBlock from './MilestoneBlock/milestoneBlock';

// import StatBlocks from './HomeHeader/StatBlocks/statBlocks';

import './newHome.css';
import { getUserInfo } from '../../DataManagement/Users/getUserInfo';
import { getTaskInfo } from './../../DataManagement/Tasks/getTasks';
import { getGoogleTaskInfo } from '../../DataManagement/Tasks/getGoogleTasks';

const NewHome = () => {
    const dayjs = require('dayjs');
    const [taskData, setTaskData] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [todaysTasks, setTodaysTasks] = useState([]);
    const [unscheduledTasks, setUnscheduledTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [today, setToday] = useState(null);

    const location = useLocation();

    const passedUserInfo = location.state?.userInfo;
    const [userFullName, setUserFullName] = useState(passedUserInfo?.fullName || '');
    const [userEmail, setUserEmail] = useState(passedUserInfo?.email || '');
    const [userProfilePicture, setUserProfilePicture] = useState('');
    const [userProfileDto, setUserProfileDto] = useState('');
    // const [userEmail] = useLocalState('', 'userEmail');
    const [initials, setInitials] = useState(passedUserInfo?.fullName || '');
    // const [userInfo, setUserInfo] = useState(passedUserInfo || null);

    useEffect(() => {
        const fetchData = async () => {
            if (!passedUserInfo) {
                const data = await getUserInfo(passedUserInfo || null);
                if (data) {
                    setUserFullName(data.fullName);
                    setInitials((data.fullName.split(' ')[0][0] + data.fullName.split(' ')[1][0]).toUpperCase());
                    setUserEmail(data.email);
                    setUserProfilePicture(data.picture);
                    setUserProfileDto(data.profileDto);
                }
            }
        };
        fetchData();
    }, [passedUserInfo]);
    
    useEffect(() => {
        // const socket = new WebSocket('wss://your-websocket-url');
  
        // socket.onmessage = (event) => {
        //     const updatedTasks = JSON.parse(event.data);
        //     setTasks(updatedTasks); // Update state with new tasks
        // };
        
        // return () => socket.close();
        getTaskInfo(setTaskData);
        // setUpcomingTasks(taskData);
        var now = dayjs().format('YYYY-MM-DD');
            setToday(now);

            const todays_date = now;
            const upcoming = [];
            const unscheduled = [];
            const today = [];
            const overdue = [];
            const completed = [];
            const ongoing = [];

            taskData.forEach((task) => {
                const currentDueDate = task.dueDate ? dayjs(task.dueDate).format('YYYY-MM-DD') : null;
                // console.log(currentDueDate);
                // if (currentDueDate === todays_date && task.status !== 'Completed') {
                //     today.push(task);
                // } else if ((currentDueDate >= todays_date) && task.status !== 'Completed') {
                //     upcoming.push(task);
                // } 
                // else if (currentDueDate === null && task.status !== 'Completed') {
                //     unscheduled.push(task);
                // } 
                if ((currentDueDate === null || currentDueDate >= todays_date) && task.status !== 'Completed') {
                    ongoing.push(task);
                }
                else if (todays_date > currentDueDate && task.status !== 'Completed') {
                    overdue.push(task);
                } else if (task.status === 'Completed') {
                    completed.push(task);
                } 
            });
            // console.log(today);
        setOngoingTasks(ongoing);
        setTodaysTasks(today);
        setUpcomingTasks(upcoming);
        setUnscheduledTasks(unscheduled);
        setOverdueTasks(overdue);
        setCompletedTasks(completed);
    }, [taskData,dayjs]);
    // console.log(todaysTasks);

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const getGoogleTasks = () => {
        getGoogleTaskInfo();
    }

    return (
        <>
            {userFullName && <HomeNavbar 
                userFullName={userFullName}
                initials={initials}
                userEmail={userEmail}
                userProfilePicture={userProfilePicture}
                userProfileDto={userProfileDto}
                openSidebarToggle={openSidebarToggle}
                setOpenSidebarToggle={setOpenSidebarToggle}
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

                <HomeHeader />

                <div  style={{width: "100%"}}>
                    {/* ONLY FOR GOOGLE OAUTH USERS */}
                    {/* {userProfilePicture && <Button onClick={getGoogleTasks}>Access Google tasks</Button>} */}


                    <div className='row mb-5'>
                        <QuickActions />

                        <div className="task-card-parent">
                            
                            <div className='user-home-all-content-left-spacing'>
                                <div className=''>
                                    {userFullName &&
                                    <TaskCard 
                                    userFullName={userFullName}
                                    initials={initials}
                                    userEmail={userEmail}
                                    taskData={taskData} 
                                    setTaskData={setTaskData} 
                                    today={today} 
                                    ongoingTasks={ongoingTasks}
                                    overdueTasks={overdueTasks}
                                    completedTasks={completedTasks}
                                    userProfileDto={userProfileDto}
                                    userProfilePicture={userProfilePicture}
                                    />}
                                    
                                </div>
                            </div>

                            {/* <div className='d-flex justify-content-between py-2 user-home-all-content-left-spacing'>
                                <ProjectCard 
                                />
                            </div> */}
                        </div>

                        {/* <div className="user-home-right-side-block">
                            <div className='d-md-block col-12 user-home-all-content-left-spacing'>
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
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewHome;