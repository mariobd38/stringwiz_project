import React, { useState, useEffect } from 'react';
import { useLocalState } from "../../utils/useLocalStorage";
import { useCookies } from "../../utils/useCookies";

import Button from '@mui/material/Button';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';

import {getTaskInfo} from './../../DataManagement/Tasks/getTasks';

import milestones from '../../assets/milestones.png';

import HomeHeader from '../Home/HomeHeader/homeHeader';
import HomeNavbar from './HomeNavbar/homeNavbar';
import TaskCard from './TaskCard/taskCard';
import ProjectCard from './ProjectCard/projectCard';

import './newHome.css';

const NewHome = () => {
    const dayjs = require('dayjs');
    // const [month, setMonth] = useState(dayjs().format('MMMM'));
    // const [dayOfWeek, setDayOfWeek] = useState(dayjs().format('dddd'));
    const [jwt] = useLocalState("", "jwt");
    const [taskData, setTaskData] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [today, setToday] = useState(null);
    const [tagData, setTagData] = useState([]);
    const [allTagData, setAllTagData] = useState([]);

    useEffect(() => {
        const fetchAndSetTabs = async () => {
            // setMonth(dayjs().format('MMMM'));
            // setDayOfWeek(dayjs().format('dddd'));

            // var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
            var now = dayjs().format('YYYY-MM-DD');
            setToday(now);

            const todays_date = now;
            const upcoming = [];
            const completed = [];

            taskData.forEach((task) => {
                
                if ((task.dueDate == null || task.dueDate >= todays_date) && task.status !== 'Completed') {
                    upcoming.push(task);
                } else if (todays_date > task.dueDate && task.status !== 'Completed') {
                    upcoming.push(task);
                }else if (task.status === 'Completed') {
                    completed.push(task);
                } 
            });

                // setUpcomingTasks(upcoming);
            };
        fetchAndSetTabs();
        
    }, [dayjs, taskData, upcomingTasks]);
    
    useEffect(() => {
        getTaskInfo(jwt, setTaskData, setUpcomingTasks);
        setUpcomingTasks(taskData);
    }, [jwt, taskData]);


    return (
        <>
            <HomeNavbar></HomeNavbar>
            <div className="row mx-5  user-home-all-content">
                <HomeHeader />

                <div className='row pt-3 d-flex px-0 justify-content-around m-auto' style={{width: "85%"}}> 
                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center pb-4 pb-xxl-0">
                        <div className='home-header-stat-block'>
                            <div className='d-flex justify-content-between home-header-stat-block-top'>
                                <div className='ms-3 home-header-stat-block-num pt-1'><span>0</span></div>
                                <div className='me-3 home-header-stat-block-text pt-3'><FolderOpenRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex align-items-start pt-1 bg-secondary home-header-stat-block-bottom'>
                                <div className='ms-3'><span className='home-header-stat-block-text'>Active projects</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                        <div className='home-header-stat-block'>
                            <div className='d-flex justify-content-between home-header-stat-block-top'>
                                <div className='ms-3 home-header-stat-block-num pt-1'><span>{upcomingTasks.length}</span></div>
                                <div className='me-3 home-header-stat-block-text pt-3'><PublishedWithChangesRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex align-items-start pt-1 bg-secondary home-header-stat-block-bottom'>
                                <div className='ms-3'><span className='home-header-stat-block-text'>Ongoing tasks</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 d-flex justify-content-center pb-4 pb-xxl-0">
                        <div className='home-header-stat-block'>
                            <div className='d-flex justify-content-between home-header-stat-block-top'>
                                <div className='ms-3 home-header-stat-block-num pt-1'><span>0</span></div>
                                <div className='me-3 home-header-stat-block-text pt-3'><CheckRoundedIcon className='home-header-in-progress-icon'/></div>
                            </div>
                            <div className='d-flex align-items-start pt-1 bg-secondary home-header-stat-block-bottom'>
                                <div className='ms-3'><span className='home-header-stat-block-text'>Tasks completed</span></div>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className='container' style={{width: "85%"}}>
                    <div className='row'>
                        <div className="col-xl-8 col-8 p-0">
                            <div className=' py-3'>
                                <div className='d-flex justify-content-between py-2'>
                                    <TaskCard taskData={taskData} setTaskData={setTaskData} today={today} upcomingTasks={upcomingTasks} setUpcomingTasks={setUpcomingTasks} tagData={tagData} setTagData={setTagData}
                                    allTagData={allTagData} setAllTagData={setAllTagData}/>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between py-2'>
                                <ProjectCard />
                            </div>
                        </div>

                        <div className="col-xl-4 col-12 p-0">
                            <div className=' mt-4  d-md-block'>
                                <div className='pt-3 pb-5 px-4 user-home-milestones-block' style={{ backgroundColor: "#222529", borderRadius: "10px" }} >
                                    <div className='d-flex justify-content-between'>
                                        <div className='home-header-stat-block-text'>
                                            Milestones
                                        </div>
                                        <div>
                                            <EmojiEventsRoundedIcon className='home-header-in-progress-icon'/>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center pt-5'>
                                        <div className='fafafa-color user-home-milestones-description text-center nunito-sans-font' style={{ backgroundColor: "#2d3034", width: "80%" }}>
                                            <div className=''>
                                                <img src={milestones} className="illustration-home-page-milestones  pb-2 " alt="" style={{ width: "10rem" }} />
                                            </div>
                                            <div className='m-auto' style={{ fontWeight: "600", fontSize: "1rem", fontFamily: "Lato", width: "90%" }}>
                                                Turn dreams into accomplishments
                                            </div>
                                            <div className='pt-3'>
                                                <Button className='user-home-create-task-button-dark' style={{ color: "#919191" }}>
                                                    <AddRoundedIcon className='me-1' style={{ width: "1rem", marginBottom: ".09rem" }}/>
                                                    <span className='me-1' style={{ fontSize: '0.95rem' }}>Add milestone</span>
                                                </Button>
                                            </div>
                                        </div>
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