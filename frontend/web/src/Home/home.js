import {React, useState } from 'react';
import { useLocalState } from "../utils/useLocalStorage";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import logo from '../images/stringwiz_logo2.png';
import './home.css';



const Home = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const dayjs = require('dayjs');
    document.body.style.backgroundColor = "rgb(30,31,33)";
    const [jwt] = useLocalState("", "jwt");
    const [userEmail] = useLocalState("", "userEmail");
    const [userFullName] = useLocalState("", "userFullName");
    
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



    function createTask() {
        fetch("/tasks",{
            headers: {
                "Content-Type": "application/json",
                "Authentication": `Bearer ${jwt}`
            },
            method: "POST",
        }).then(response => {
            if (response.status === 200) 
                return response.json();
        }).then(data => {
            console.log(data);
        });
    }
    
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
                  <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                    {/* <li className="nav-item mx-2">
                      <a className="nav-link disabled" href="/">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link disabled" href="/">
                        Teams
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link disabled" href="/">
                        Resources
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link disabled" href="/">
                        Enterprise
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link disabled" href="/">
                        Pricing
                      </a>
                    </li> */}
                  </ul>
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 pe-4">
                    <button className="btn nav-button px-1 py-1 user-button">
                        <div className='user-button m-auto'>
                            <p className='m-auto initials'>{initials}</p>
                        </div>
                    </button>
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
            <div className='pt-4 text-center'>
                <h2 className='text-white today'>{todays_date}</h2>
                <h2 className='text-white greeting pt-1'>{greeting}, <span>{firstName}</span> {timeEmoji}</h2> 
            </div>
            <div className='row'>
                <div className='pt-4 col-lg d-flex justify-content-center'>
                    <Card className=' pb-3 my-card text-center' body><h4 className='tasks-text'>My Tasks</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>

                            <Tab  eventKey="homeKey" className="pt-3" title="Upcoming">
                                <div className='mt-2'>
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
                    <Card className=' pb-3 my-card text-center' body><h4 className='tasks-text'>My Projects</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>

                            <Tab  eventKey="homeKey" className="pt-3" title="Upcoming">
                                <div className='mt-2'>
                                    <button className='btn text-white create-task-button ' onClick={() => createTask()} >
                                        <AddTaskRoundedIcon>
                                        </AddTaskRoundedIcon> <span className='ps-2 default-tab-text'>Create new task</span></button>
                                </div>
                            </Tab>
                        </Tabs>
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