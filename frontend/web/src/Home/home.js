import React, { useState, useEffect } from 'react';
import { useLocalState } from "../utils/useLocalStorage";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import FlagIcon from '@mui/icons-material/Flag';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Popper from '@mui/material/Popper';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import HomeNavbar from './HomeNavbar/homeNavbar';
import './home.css';



const Home = () => {
    const dayjs = require('dayjs');

    document.body.style.backgroundColor = "rgb(30,31,33)";
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [userFullName] = useLocalState("", "userFullName");
    const [userTasks, setUserTasks] = useLocalState([], "userTasks");
    
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
    const [taskName, setTaskName] = useState(null);
    const [taskDescription, setTaskDescription] = useState(null);
    const [taskStatus, setTaskStatus] = useState(null);
    const [taskPriority, setTaskPriority] = useState(null);
    const [taskDueDate, setTaskDueDate] = useState(null);
    
    const [missingNameError, setMissingNameError] = useState(false);
    const [taskCreated, setTaskCreated] = useState(false);
    

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    };
    const handleTaskStatusChange = (event) => {
        setTaskStatus(event.target.value);
    };

    const handleTaskPriorityChange = (event) => {
        setTaskPriority(event.target.value);
    };

    const handleTaskDueDateChange = (date) => {
        setTaskDueDate(date);
    };

    const [taskData, setTaskData] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
        setModalOpen(false);
        setMissingNameError(false); 
    };

    const [moreTaskmodalOpen, setMoreTaskModalOpen] = useState(false);
    const handleMoreTaskModalOpen = () => setMoreTaskModalOpen(true);
    const handleMoreTaskModalClose = () => {
        setMoreTaskModalOpen(false);
    };


  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleMoreTaskClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };



    //status popovers
    const [statusPopoverAnchorEl, setStatusPopoverAnchorEl] = useState(null);

    const handleStatusPopoverClick = (event) => {
        setStatusPopoverAnchorEl(event.currentTarget);
    };

    const handleStatusPopoverClose = () => {
        setStatusPopoverAnchorEl(null);
    };

    const openStatusPopover = Boolean(statusPopoverAnchorEl);
    const statusPopOverId = openStatusPopover ? 'simple-popover' : undefined;

    //priority popovers
    const [priorityPopoverAnchorEl, setProrityPopoverAnchorEl] = useState(null);

    const handlePriorityPopoverClick = (event) => {
        setProrityPopoverAnchorEl(event.currentTarget);
    };

    const handlePriorityPopoverClose = () => {
        setProrityPopoverAnchorEl(null);
    };

    const openPriorityPopover = Boolean(priorityPopoverAnchorEl);
    const priorityPopOverId = openPriorityPopover ? 'simple-popover' : undefined;

    //due date popovers
    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);

    const handleDueDatePopoverClick = (event) => {
        setDueDatePopoverAnchorEl(event.currentTarget);
    };

    const handleDueDatePopoverClose = () => {
        setDueDatePopoverAnchorEl(null);
    };

    const openDueDatePopover = Boolean(dueDatePopoverAnchorEl);
    const dueDatePopOverId = openDueDatePopover ? 'simple-popover' : undefined;
  
    function createTaskInfo() {
        if (!taskName) {
            setMissingNameError(true);
            return;
        } else {
            setMissingNameError(false);
        }
        let myDate = null;
        let dayString = null;
        let monthString = null;
        let yearString = null;
        if (taskDueDate !== null) {
            dayString = taskDueDate.format('DD');
            monthString = taskDueDate.format('MM');
            yearString = taskDueDate.format('YYYY');
            myDate = dayjs(`${yearString}-${monthString}-${dayString}`).toDate();
        }
        
        
        const taskTableInfo = {
            name: taskName,
            description: taskDescription,
            status: taskStatus,
            priority: taskPriority,
            dueDate: (taskDueDate !== null) ? `${monthString}/${dayString}/${yearString}` : ''
        };
        setTaskData([...taskData, taskTableInfo]);


        const taskInfo = {
            name: taskName,
            description: taskDescription,
            status: taskStatus,
            priority: taskPriority,
            dueDate: myDate
        };


        fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
            body: JSON.stringify(taskInfo),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Parse the response as JSON
            return response.json();
        })
        .then((data) => {
            let taskList = userTasks;
            if(taskList === "") taskList = [];

            console.log("task list before: " + taskList);
            taskList.push(taskTableInfo);
            console.log("task list after: " + taskList);
            setUserTasks(JSON.parse(JSON.stringify(taskList)))
            console.log(JSON.parse(JSON.stringify(taskList)));
            setTaskCreated(true);
            setTaskName(null);
            setTaskDescription(null);
            setTaskStatus(null);
            setTaskPriority(null);
            setTaskDueDate(null);
            setModalOpen(false);
          })
          .catch((error) => {
            console.error(error); 
          }); 
    }

    const getTaskInfo = () => {
        fetch("/api/tasks/get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Parse the response as JSON
            return response.json();
        })
        .then((data) => {
            console.log('Data below');
            console.log(data);
            setTaskData(data);
        })
        .catch((error) => {
            console.error(error); 
        });
    }

    useEffect(() => {
        getTaskInfo();
      }, []);

      const sayHello = (index) => {

        // Create a copy of the task data array
        let updatedTaskData = [...taskData];
        // Toggle a property like 'completed' for the task at the given index
        // updatedTaskData[index].completed = !updatedTaskData[index].completed;
        updatedTaskData[index].status = 'Completed';
        // Set the updated data

        setTaskData(updatedTaskData);

        setTimeout(function() {
            // updatedTaskData = updatedTaskData.splice(index, 1);
            // console.log(updatedTaskData);
            // setTaskData(updatedTaskData);
            const newTaskData = updatedTaskData.filter((task, i) => i !== index);

            setTaskData(newTaskData);

          }, 400);

      };
    
    return (
        <>
        <HomeNavbar></HomeNavbar>    
        <Container className=''>
            <div className='pt-4 d-none d-sm-block'>
                <div className='d-flex justify-content-between'>
                    <h2 className='text-white home-text pt-2 m-0'> My Home</h2>
                    
                    <Button className='customize-bg'>
                    <DashboardCustomizeIcon></DashboardCustomizeIcon><span className='ps-1'>Customize</span>
                    </Button>
                </div>
                {/* <h2 className='text-white home-text'>My Home</h2> */}
                <hr className='text-white '/>
            </div>
            <div className='pt-5 pt-sm-3 text-center'>
                <h2 className='text-white today'>{todays_date}</h2>
                <h2 className='text-white greeting pt-1'>{greeting}, <span>{firstName}</span> {timeEmoji}</h2> 
            </div>
            
            <div className='row pb-5'>
                <div className='pt-4 col-xl d-flex justify-content-center'>
                    <Card className=' pb-3 my-card  m-0' body><h4 className='tasks-text text-center'>My Tasks</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>
                            <Tab eventKey="homeKey" className="" title="Upcoming">
                        <TableContainer >
                          <Table sx={{ }} aria-label="simple table">
                            <TableBody>
                                 {taskData.map((row, index) => (
                                    <TableRow key={index} className='table-row'>
                                        <TableCell component="th" scope="row" className='default-tab-text d-flex align-items-center justify-content-between table-cell'>
                                            <div className='d-flex align-items-center'>
                                                <CheckCircleIcon className='ps-1 pb-1 mt-1 task-check table-cell-icon' onClick={() => sayHello(index)} />
                                                <span contentEditable={true} className={`ps-2 taskName-text ${row.status === 'Completed' ? ' strikethrough' : ''}`}>{row.name}</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                            <Tooltip title="Set status" arrow className='status-tooltip'>
                                                <AssignmentIcon className='table-cell-icon status-icon mx-1' variant="contained" onClick={handleStatusPopoverClick}></AssignmentIcon>
                                            </Tooltip>

                                            <Popover
                                                id={statusPopOverId}
                                                open={openStatusPopover}
                                                anchorEl={statusPopoverAnchorEl}
                                                onClose={handleStatusPopoverClose}
                                                anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                                }}
                                            >
                                                <List disablePadding>
                                                    <ListItem disablePadding >
                                                        <ListItemButton className='status-list-item-btn'>
                                                        <ListItemText primary="Stuck" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemButton className='status-list-item-btn'>
                                                        <ListItemText primary="To Do"  />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemButton className='status-list-item-btn'>
                                                        <ListItemText primary="In Progress" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemButton className='status-list-item-btn'>
                                                        <ListItemText primary="Completed"/>
                                                        </ListItemButton>
                                                    </ListItem>
                                                </List>
                                            </Popover>


                                            <Tooltip title="Set priority" arrow className='priority-tooltip'>
                                                <FlagIcon  className='table-cell-icon priority-icon mx-1' variant="contained"  onClick={handlePriorityPopoverClick}></FlagIcon>
                                            </Tooltip>
                                                                                    
                                            <Popover
                                                id={priorityPopOverId}
                                                open={openPriorityPopover}
                                                anchorEl={priorityPopoverAnchorEl}
                                                onClose={handlePriorityPopoverClose}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }}
                                            >
                                                <List disablePadding>
                                                    <ListItem disablePadding>
                                                        <ListItemButton className='pe-5 priority-list-item-btn'>
                                                        <ListItemText primary="Critical"/>
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding >
                                                        <ListItemButton className='priority-list-item-btn'>
                                                        <ListItemText primary="High" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemButton className='priority-list-item-btn'>
                                                        <ListItemText primary="Medium"  />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemButton className='priority-list-item-btn'>
                                                        <ListItemText primary="Low" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </List>
                                            </Popover>
                                            <Tooltip title="Set due date" arrow className='due-date-tooltip '>
                                                <AccessTimeIcon className='table-cell-icon due-date-icon mx-1' variant="contained" onClick={handleDueDatePopoverClick}></AccessTimeIcon>
                                            </Tooltip>

                                            <Popover
                                                id={dueDatePopOverId}
                                                open={openDueDatePopover}
                                                anchorEl={dueDatePopoverAnchorEl}
                                                onClose={handleDueDatePopoverClose}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }}
                                            >
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DateCalendar />
                                                </LocalizationProvider>
                                            </Popover>

                                                {/* <MoreHorizRoundedIcon onClick={handleMoreTaskClick('right')} className='more-horiz'></MoreHorizRoundedIcon> */}
                                            </div>
                                        </TableCell>

                                        {/* <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">{row.status}</TableCell>
                                        <TableCell align="left">{row.priority}</TableCell>
                                        <TableCell align="left">{row.dueDate}</TableCell> */}
                                    </TableRow>
                                    
                                )) }

                                    <Modal show={moreTaskmodalOpen} onHide={handleMoreTaskModalClose} className='more-task-modal'>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='default-tab-text'>Create a task</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>

                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="primary" onClick={createTaskInfo} className='default-tab-text create-task-btn'>
                                            <AddCircleRoundedIcon className=''></AddCircleRoundedIcon>
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>



                                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                                    {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper className='ms-3 me-2 mt-5'>
                                        <Button className='w-100 p-2 popper-btn'>Edit</Button>

                                        {/* <Typography sx={{ p: 1 }}>The content of the Popper.</Typography> */}
                                        {/* <Typography sx={{ p: 1.2 }}> */}
                                            <Button className='w-100 popper-btn p-1'>Reminder</Button>
                                            
                                            {/* </Typography> */}
                                        </Paper>
                                    </Fade>
                                    )}
                                </Popper>
                            </TableBody> 
                             {/* } */}
                        </Table> 
                        </TableContainer>

                                <div className="mt-1 d-flex justify-content-center">
                                    <button className="btn create-task-button" onClick={handleModalOpen}>
                                        <AddTaskRoundedIcon className='add-task-icon'>
                                        </AddTaskRoundedIcon> 
                                        <span className='ps-2 default-tab-text'>Create new task</span>
                                    </button>
                                        {/* <Button variant="primary" onClick={getTaskInfo} className='btn default-tab-text create-task-btn'>
                                            Get task info
                                        </Button> */}
                                    
                                    <Modal show={modalOpen} onHide={handleModalClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='default-tab-text'>Create a task</Modal.Title>
                                        </Modal.Header>
                                    <Modal.Body>
                                        <Alert severity="error" className='w-75 mb-3'>Task Name is required</Alert>
                                        {missingNameError && <p className="pt-2 error-message default-tab-text">Please enter a name for your task</p>}

                                            <div className='pt-2'>
                                                <TextField
                                                id="outlined-basic"
                                                label="Name"
                                                value={taskName}
                                                autoComplete='off'
                                                className='pb-4 w-75'
                                                defaultValue={null}
                                                onChange={handleTaskNameChange}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                className='w-75'
                                                label="Description"
                                                value={taskDescription}
                                                autoComplete='off'
                                                defaultValue={null}
                                                onChange={handleTaskDescriptionChange}
                                                />
                                            </div>
                                            <div className='pt-4 w-75'>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={taskStatus}
                                                        defaultValue={null}
                                                        label="Status"
                                                        onChange={handleTaskStatusChange}
                                                        >
                                                        <MenuItem value={'Stuck'} className='bg-stuck text-white status-item'>Stuck</MenuItem>
                                                        <MenuItem value={'To do'} className='bg-todo text-white status-item'>To do</MenuItem>
                                                        <MenuItem value={'In Progress'} className='bg-inprogress text-white status-item'>In Progress</MenuItem>
                                                        <MenuItem value={'Completed'} className='bg-completed text-white status-item'>Completed</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            <div className='pt-4'>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={taskPriority}
                                                    defaultValue={null}
                                                    label="Priority"
                                                    onChange={handleTaskPriorityChange}
                                                    >
                                                    <MenuItem value={'Critical'} className='bg-dark bg-critical text-white priority-item'>Critical</MenuItem>
                                                    <MenuItem value={'High'} className='bg-high text-white priority-item'>High</MenuItem>
                                                    <MenuItem value={'Medium'} className='bg-medium text-white priority-item'>Medium</MenuItem>
                                                    <MenuItem value={'Low'} className='bg-low text-white priority-item'>Low</MenuItem>
                                                    {/* <MenuItem value={'20'}>Twenty</MenuItem> */}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className='pt-3 w-100' >
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DateField']}
                                                        label="Due Date" 
                                                        className='w-100'>
                                                            <DateField 
                                                                label="Due Date" 
                                                                className='w-100' 
                                                                value={taskDueDate}
                                                                onChange={handleTaskDueDateChange}
                                                            />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="primary" onClick={createTaskInfo} className='default-tab-text create-task-btn'>
                                            <AddCircleRoundedIcon className=''></AddCircleRoundedIcon>
                                        </Button>
                                    </Modal.Footer>
                                    </Modal>
                                </div>
                            </Tab>
                            <Tab eventKey="overdueKey" className="pt-3" title="Overdue">
                                <p className='default-tab-text m-auto text-center pt-3'>No overdue tasks! 🥳</p>
                            </Tab>
                            <Tab eventKey="completedKey" className="pt-3 text-start ps-4 d-flex justify-content-center"title="Completed">
                                <ChecklistRtlRoundedIcon className='checklist-rtl-icon'/>
                                <p className='ps-4 mt-auto default-tab-text'>Your completed tasks will show up here!</p>
                            </Tab>
                        </Tabs>
                    </Card>
                </div>

                <div className='pt-4 col-lg d-flex justify-content-center'>
                    <Card className=' pb-3 my-card text-center' body>
                        <h4 className='tasks-text'>My Projects</h4>
                            <div class="cc">
                            <button className='btn  create-task-button '  >
                                    <AddTaskRoundedIcon>
                                    </AddTaskRoundedIcon> <span className='ps-2 default-tab-text'>Create new project</span></button>
                            </div>     
                    </Card>
                </div>
            </div>
        </Container>
        </>
    );
};

export default Home;