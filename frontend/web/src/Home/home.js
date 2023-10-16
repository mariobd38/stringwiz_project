import React, { useState } from 'react';
import { useLocalState } from "../utils/useLocalStorage";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import logo from '../images/stringwiz_logo2.png';
import axios from 'axios';
import './home.css';



const Home = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const dayjs = require('dayjs');
    document.body.style.backgroundColor = "rgb(30,31,33)";
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [userEmail] = useLocalState("", "userEmail");
    const [userFullName] = useLocalState("", "userFullName");
    const [userPassword] = useLocalState("", "userPassword");
    
    var now = Intl.DateTimeFormat().resolvedOptions().timeZone;
    now = dayjs();
    const date = new Date(now.year(), now.month(), now.date());  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfWeek = date.toLocaleDateString('en-US',{weekday: 'long'});
    const todays_date = dayOfWeek + ", " + month + " " + date.getDate();

    let hour = now.hour();
    let minute = now.minute();
    let greeting = "Good ";
    const firstName = userFullName.split(' ')[0];
    const lastName = userFullName.split(' ')[1];
    const initials = firstName[0] + lastName[0];
    let timeEmoji = "";
    switch(true) {
        case (hour < 6):
            greeting += "night";
            timeEmoji = "😴";
            break;
        case (hour >= 18 && (hour <= 23 && minute <= 59)):
            greeting += "evening";
            timeEmoji = "🌙";
            break;
        case (hour >= 12):
            greeting += "afternoon";
            timeEmoji = "☀️";
            break;  
        default:
            greeting += "morning";
            timeEmoji = "🌅";
            break;
    }


    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
      };


    console.log("my jwt" + jwt);
    function createTask() {
        const taskData = {
            name: "Task Name",
            description: "Task Description",
            status: "Task Status",
            priority: "Task Priority",
        };
        // const userData = {
        //     email: userEmail
        // };
        fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
            // body: JSON.stringify(userData),
            // body: JSON.stringify(userDetails),
            // body: JSON.stringify(reqBody),
        }).then((response) => {
            console.log(jwt);
            console.log(response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Parse the response as JSON
            return response.json();
        })
        .then((data) => {
              // Process the JSON response
              console.log(data);
          })
          .catch((error) => {
            console.error(error); // Log any errors for debugging
          });
    };
    
    return (
        <>
        <Nav className="navbar navbar-expand-md">
            <Container fluid>

            <div className="img-fluid">
              <a className="navbar-brand m-auto fs-4 ps-3" href="/">
                <img
                  src={logo}
                  className="img-fluid-custom"
                  alt="Stringwiz"
                />
              </a>
            </div>

            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              onClick={toggleOffcanvas}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`sidebar w-100 offcanvas offcanvas-end ${
                isOffcanvasOpen ? 'show' : ''
              }`}
              tabIndex="-1"
            >
              {/* Offcanvas content */}
              <div className="offcanvas-content">
                <div className="offcanvas-header border-bottom">
                  <div className="img-fluid">
                    <a className="navbar-brand m-auto fs-4" href="/">
                      <img
                        src={logo}
                        className="img-fluid-custom"
                        alt="Stringwiz"
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-close shadow-none"
                    onClick={toggleOffcanvas}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column flex-md-row p-4 p-md-0">
                  <ul className=" flex-grow-1 ">
                  </ul>
                  <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 pe-4">
                    <div className='pe-md-5'>
                        <button className="btn nav-button px-1 py-1 user-button">
                                                {/* <NotificationsActiveRoundedIcon></NotificationsActiveRoundedIcon> */}

                            <div className='user-button m-auto' style={{backgroundColor: "#e7e7e7"}}>
                            <NotificationsActiveRoundedIcon className='m-auto notis'></NotificationsActiveRoundedIcon>

                                {/* <p className='m-auto text-white initials'>{initials}</p> */}
                            </div>
                        </button>
                    </div>
                  
                    
                    <button className="btn nav-button px-1 py-1 user-button" onClick={handleClick} aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
                        <div className='user-button m-auto'>
                            <p className='m-auto text-white initials'>{initials}</p>
                        </div>
                    </button>
                        

                    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
            <Avatar className="my-profile"/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

                  </div>
                </div>
              </div>
            </div>
        </Container>
    </Nav>        


    <Container className=''>
            {/* <div className='mt-3'>
                <button className='btn btn-success' onClick={() => createTask()} >Create new task</button>
            </div> */}
            <div className='pt-4 d-none d-sm-block'>
                <h2 className='text-white dashboard-text'>My Dashboard</h2>
                <hr className='text-white  '/>
            </div>
            <div className='pt-5 pt-sm-3 text-center'>
                <h2 className='text-white today'>{todays_date}</h2>
                <h2 className='text-white greeting pt-1'>{greeting}, <span>{firstName}</span> {timeEmoji}</h2> 
            </div>
            <div className='row'>
                <div className='pt-4 col-lg d-flex justify-content-center'>
                    <Card className=' pb-3 my-card text-center m-0' body><h4 className='tasks-text'>My Tasks</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>

                            <Tab  eventKey="homeKey" className="pt-3" title="Upcoming">
                                <div className='mt-2 outer'>
                                    <button className='btn text-white create-task-button ' onClick={() => createTask()} >
                                        <AddTaskRoundedIcon>
                                        </AddTaskRoundedIcon> <span className='ps-2 default-tab-text'>Create new task</span></button>
                                </div>
                            </Tab>
                            <Tab eventKey="overdueKey" className="pt-3 " title="Overdue">
                                <p className='default-tab-text m-auto'>
                                No overdue tasks! 🥳
                                </p>
                                </Tab>
                            <Tab eventKey="completedKey" className="pt-3 text-start ps-4 d-flex justify-content-center"title="Completed">

                                <ChecklistRtlRoundedIcon className='checklist-rtl-icon'/>
                                <p className='ps-4 mt-auto default-tab-text'>Your completed tasks will show up here!</p>
                            </Tab>
                        </Tabs>
                    </Card>
                </div>

                <div className='pt-4 col-lg d-flex justify-content-center'>
                    <Card className=' pb-3 my-card text-center m-0' body><h4 className='tasks-text'>My Projects</h4>
                        {/* <Tabs className='pt-3' defaultActiveKey="homeKey" justify> */}

                            {/* <Tab  eventKey="homeKey" className="pt-3" title="Upcoming"> */}
                                {/* <div className='mt-2'> */}
                                <div class="cc">
                                <button className='btn text-white create-task-button '  >
                                        <AddTaskRoundedIcon>
                                        </AddTaskRoundedIcon> <span className='ps-2 default-tab-text'>Create new project</span></button>
                                </div>
                                


                                {/* </div> */}
                            {/* </Tab> */}
                        {/* </Tabs> */}
                    </Card>
                </div>
            </div>
    
            {/* <Button variant="text" startIcon={<Accessibility />}>
                Add item
            </Button> */}
        </Container>
        </>
    );
};

export default Home;