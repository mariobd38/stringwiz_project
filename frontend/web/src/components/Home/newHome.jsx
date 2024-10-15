import React, { useState, useEffect,useCallback } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

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

import { getUserInfo } from '../../DataManagement/Users/getUserInfo';
import { getTaskInfo } from './../../DataManagement/Tasks/getTasks';
import { getGoogleTaskInfo } from '../../DataManagement/Tasks/getGoogleTasks';
import './newHome.css';

const NewHome = () => {
    const dayjs = require('dayjs');
    const [taskData, setTaskData] = useState([]);
    // const [upcomingTasks, setUpcomingTasks] = useState([]);
    // const [todaysTasks, setTodaysTasks] = useState([]);
    // const [unscheduledTasks, setUnscheduledTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [today, setToday] = useState(dayjs());

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
        const intervalId = setInterval(() => {
            const newDate = dayjs();
            // Check if the new date is different from the current state
            if (!newDate.isSame(today, 'day')) {
                setToday(newDate);
            }
        }, 1000 * 5); // Check every 5 seconds

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [today,dayjs]);

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

    const client = Stomp.client(import.meta.env.VITE_SERVER_BASE_URI + '/ws');
    //this works
    // client.connect({}, (frame) => {
    //     console.log('Connected: ' + frame);
    //     client.subscribe('/topic/messages', (message) => {
    //         console.log('Received message:', message.body);
    //         setMessages((prevMessages) => [...prevMessages, message.body]);
    //     });
    // }, (error) => {
    //     console.error('Error connecting to WebSocket:', error);
    // });
    
    // // Function to send a message
    // const sendMessage = () => {
    //     console.log('Client connected:', client.connected);
    //     if (client && client.connected) {
    //         client.send('/app/message', {}, JSON.stringify({ message: 'Hello!' }));
    //         setMessageToSend('');
    //     } else {
    //         console.error('Client is not connected.');
    //     }
    // };
    

    const processTaskData = useCallback((data) => {
        const now = dayjs();
        const overdue = [];
        const completed = [];
        const ongoing = [];

        taskData.forEach((task) => {
            const currentDueDate = task.dueDateTime ? dayjs(task.dueDateTime) : task.dueDate ? dayjs(task.dueDate) : null;
            
            if ((currentDueDate === null || currentDueDate.isAfter(now) || currentDueDate.isSame(now)) && task.status !== 'Completed') {
                ongoing.push(task);
            }
            else if (currentDueDate && currentDueDate.isBefore(now) && task.status !== 'Completed') {
                overdue.push(task);
            } else if (task.status === 'Completed') {
                completed.push(task);
            } 
        });
        setOngoingTasks(ongoing);
        setOverdueTasks(overdue);
        setCompletedTasks(completed);
    },[dayjs,taskData]);


    //this works for my use case
    //client.debug = () => {};
    // useEffect(() => {

    //     client.connect({}, () => {
    //     client.subscribe('/topic/tasks', (message) => {
    //         try {
    //             const tasks = JSON.parse(message.body);
    //             setTaskData(tasks);
    //             // processTaskData(tasks);
    //         } catch (e) {
    //             console.error('Error parsing message:', e);
    //         }
    //     });
        
    //     // if (client.connected) {
    //         client.send('/app/tasks', {}, {});
    //     // } else {
    //         // console.error('Client is not connected.');
    //     // }
    // }, (error) => {
    //     console.error('Error connecting to WebSocket:', error);
    // })
    // return () => {
    //     // Clean up the connection when the component is unmounted
    //     if (client.connected) {
    //         client.disconnect(() => {
    //             console.log('Disconnected from WebSocket');
    //         });
    //     }
    // };
    // },[client]);

    // useEffect(() => {
    //     processTaskData(taskData);
    //   }, [taskData, processTaskData]);

    
    useEffect(() => {
        getTaskInfo(setTaskData);
        // setUpcomingTasks(taskData);
        const now = dayjs();
        const overdue = [];
        const completed = [];
        const ongoing = [];

        taskData.forEach((task) => {
            const currentDueDate = task.dueDateTime ? dayjs(task.dueDateTime) : task.dueDate ? dayjs(task.dueDate) : null;
            
            if ((currentDueDate === null || currentDueDate.isAfter(now) || currentDueDate.isSame(now)) && task.status !== 'Completed') {
                ongoing.push(task);
            }
            else if (currentDueDate && currentDueDate.isBefore(now) && task.status !== 'Completed') {
                overdue.push(task);
            } else if (task.status === 'Completed') {
                completed.push(task);
            } 
        });
        setOngoingTasks(ongoing);
        setOverdueTasks(overdue);
        setCompletedTasks(completed);
    }, [taskData,dayjs]);

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const getGoogleTasks = () => {
        getGoogleTaskInfo();
    }

    return (
        <>
            {userFullName && 
            <HomeNavbar 
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