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
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import FlagIcon from '@mui/icons-material/Flag';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Fade from '@mui/material/Fade';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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
import HomeHeader from './HomeHeader/homeHeader';
import './home.css';



const Home = () => {
    const dayjs = require('dayjs');

    // document.body.style.backgroundColor = "#1e1f21";
    // document.body.style.backgroundColor = "";


    const [jwt] = useLocalState("", "jwt");
    const [userTasks, setUserTasks] = useLocalState([], "userTasks");
 
    const [taskName, setTaskName] = useState(null);
    const [taskDescription, setTaskDescription] = useState(null);
    const [taskStatus, setTaskStatus] = useState(null);
    const [taskPriority, setTaskPriority] = useState(null);
    const [taskDueDate, setTaskDueDate] = useState(null);
    
    const [missingNameError, setMissingNameError] = useState(false);
    const [taskCreated, setTaskCreated] = useState(false);

    const [isCheckIconVisible, setCheckIconVisible] = useState(false);


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

    const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);
    const handleCreateTaskModalOpen = () => setCreateTaskModalOpen(true);
    const [currentTaskName, setCurrentTaskName] = useState('');
    const [currentTaskDescription, setCurrentTaskDescription] = useState('');
    const [currentTaskStatus, setCurrentTaskStatus] = useState('');

    const handleCreateTaskModalClose = () => {
        setCreateTaskModalOpen(false);
        setMissingNameError(false); 
    };

    const [moreTaskmodalOpen, setMoreTaskModalOpen] = useState(false);
    const handleMoreTaskModalOpen = (taskName, taskDescription, taskStatus) => {
        setCurrentTaskName(taskName);
        setCurrentTaskDescription(taskDescription);
        setCurrentTaskStatus(taskStatus)
        setMoreTaskModalOpen(true);
    };
    const handleMoreTaskModalClose = () => {
        setMoreTaskModalOpen(false);
    };


    //status popovers
    const [statusPopoverAnchorEl, setStatusPopoverAnchorEl] = useState(null);

    const handleStatusPopoverClick = (event, index) => {
        setStatusPopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
    };

    const handleStatusPopoverClose = () => {
        setStatusPopoverAnchorEl(null);
    };

    const openStatusPopover = Boolean(statusPopoverAnchorEl);
    const statusPopOverId = openStatusPopover ? 'simple-popover' : undefined;

    //priority popovers
    const [priorityPopoverAnchorEl, setProrityPopoverAnchorEl] = useState(null);

    const handlePriorityPopoverClick = (event, index) => {
        setProrityPopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
    };

    const handlePriorityPopoverClose = () => {
        setProrityPopoverAnchorEl(null);
    };

    const openPriorityPopover = Boolean(priorityPopoverAnchorEl);
    const priorityPopOverId = openPriorityPopover ? 'simple-popover' : undefined;

    //due date popovers
    const [currentIndex, setCurrentIndex] = useState(null);

    const [dueDatePopoverAnchorEl, setDueDatePopoverAnchorEl] = useState(null);

    const handleDueDatePopoverClick = (event, index) => {
        setDueDatePopoverAnchorEl(event.currentTarget);
        setCurrentIndex(index);
    };

    const [selectedDate, setSelectedDate] = useState(null);


    const handleDueDatePopoverClose = () => {
        setDueDatePopoverAnchorEl(null);
        setSelectedDate(false);
    };

    const openDueDatePopover = Boolean(dueDatePopoverAnchorEl);
    const dueDatePopOverId = openDueDatePopover ? 'simple-popover' : undefined;


  


    const handleDateSelection = (date) => {
        setSelectedDate(date);
      };

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
            status: taskStatus===null ? "To Do " : taskStatus,
            priority: taskPriority,
            dueDate: (taskDueDate !== null) ? `${monthString}/${dayString}/${yearString}` : ''
        };
        setTaskData([...taskData, taskTableInfo]);
        // console.log("mydate " + myDate);

        const taskInfo = {

            name: taskName,
            description: taskDescription,
            status: taskStatus===null ? "To Do " : taskStatus,
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
            const createdTask = {
                id: data.id, 
                name: taskName,
                description: taskDescription,
                status: data.status,
                priority: taskPriority,
                dueDate: myDate
            };
            setTaskData([...taskData, createdTask]);


            let taskList = userTasks;
            if(taskList === "") taskList = [];
            taskList.push(taskTableInfo);
            setUserTasks(JSON.parse(JSON.stringify(taskList)))
            setTaskCreated(true);
            setTaskName(null);
            setTaskDescription(null);
            setTaskStatus(null);
            setTaskPriority(null);
            setTaskDueDate(null);
            setCreateTaskModalOpen(false);
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
            // console.log('Data below');
            // console.log(data);
            setTaskData(data);
        })
        .catch((error) => {
            console.error(error); 
        });
    }

    const updateTaskInfo = (task, event) => {
        const targetClassList = event.currentTarget.className.split(' ');

        if (targetClassList.includes('date-calendar-btn') && selectedDate !== null) {
            const newDayString = selectedDate.format('D');
            const newMonthString = selectedDate.format('M');
            const newYearString = selectedDate.format('YYYY');
            const newDate = dayjs(`${newYearString}-${newMonthString}-${newDayString}`).toDate();
            task.dueDate = newDate;

            setCheckIconVisible(true);

            setTimeout(function () {
                setCheckIconVisible(false);

                handleDueDatePopoverClose();

            }, 1800);
        } else if (targetClassList.includes('priority-list-item-btn')) {
            task.priority = event.target.textContent;
            setCheckIconVisible(true);
            setTimeout(function () {
                setCheckIconVisible(false);

                handlePriorityPopoverClose();

            }, 1800);
        } else if (targetClassList.includes('status-list-item-btn')) {
            task.status = event.target.textContent;
            setCheckIconVisible(true);


            setTimeout(function () {
                setCheckIconVisible(false);

                handleStatusPopoverClose();

            }, 1800);
        }



        const taskInfo = {
            id: task.id,
            name: task.name,
            description: task.description,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate
        };

        fetch("/api/tasks/put", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
            body: JSON.stringify(taskInfo),
        }).then((response) => {
            console.log("task id is " + task.id);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Parse the response as JSON
            return response.json();
        })
        .catch((error) => {
            console.error(error); 
        });
    }

    useEffect(() => {
        getTaskInfo();
      }, []);

      const completeTask = (index) => {
        let updatedTaskData = [...taskData];
        updatedTaskData[index].status = 'Completed';
        console.log('completed')

        setTaskData(updatedTaskData);

        setTimeout(function() {
            const newTaskData = updatedTaskData.filter((task, i) => i !== index);

            setTaskData(newTaskData);

          }, 600);
      };

    const updateTaskInfoFunc = (event) => {
        updateTaskInfo(taskData[currentIndex], event);
    }

    return (
        <>
        <HomeNavbar></HomeNavbar>    
        <Container >
            <HomeHeader></HomeHeader>
            
            <div className='row pb-5'>
                <div className='pt-4 col-xl d-flex justify-content-center'>
                    <Card className=' pb-3 my-card  m-0' body><h4 className='tasks-text text-center'>My Tasks</h4>
                        <Tabs className='pt-3' defaultActiveKey="homeKey" justify>
                            <Tab eventKey="homeKey" className="" title="Upcoming">
                                <div className="table-container-wrapper">
                                    <TableContainer className="table-container" >
                                        <Table sx={{ }} aria-label="simple table">
                                        <TableBody>
                                            {taskData.map((row, index) => (
                                            <TableRow key={index} className='table-row'>
                                                <TableCell component="th" scope="row" className='default-tab-text d-flex align-items-center justify-content-between table-cell'>
                                                    <div className='d-flex align-items-center'>
                                                        <CheckCircleIcon className='ps-1 pb-1 mt-1 task-check table-cell-icon' onClick={() => completeTask(index)} />
                                                        <button className='task-name-link' onClick={() => handleMoreTaskModalOpen(row.name, row.description, row.status)}><span /*contentEditable={true}*/ className={`ps-2 taskName-text ${row.status === 'Completed' ? ' strikethrough' : ''}`}>{row.name}</span> </button>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <Tooltip title="Set status" arrow className='status-tooltip'>
                                                            <AssignmentIcon className='table-cell-icon status-icon mx-1' variant="contained" onClick={(event) => handleStatusPopoverClick(event, index)}></AssignmentIcon>
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

                                                            <List disablePadding className='update-list-menu'>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'Stuck')}>
                                                                    <ListItemText primary="Stuck" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'To Do')}>
                                                                    <ListItemText primary="To Do" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                    </svg>
                                                                </div>

                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'In Progress')}>
                                                                    <ListItemText primary="In Progress" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`status-list-item-btn ${isCheckIconVisible ? 'status-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'Completed')}>
                                                                    <ListItemText primary="Completed" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>


                                                        <Tooltip title="Set priority" arrow className='priority-tooltip'>
                                                            <FlagIcon  className='table-cell-icon priority-icon mx-1' variant="contained"  onClick={(event) => handlePriorityPopoverClick(event, index)}></FlagIcon>
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
                                                            className='poopover'
                                                        >
                                                            <List disablePadding className='update-list-menu'>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={` priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'Critical')}>
                                                                    <ListItemText primary="Critical" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'High')}>
                                                                    <ListItemText primary="High" className='text-center'/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                    </svg>
                                                                </div>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'Medium')}>
                                                                    <ListItemText primary="Medium" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                                <ListItem disablePadding>
                                                                    <ListItemButton className={`priority-list-item-btn ${isCheckIconVisible ? 'priority-item-hide' : ''}`} onClick={(event) => updateTaskInfoFunc(event, 'Low')}>
                                                                    <ListItemText primary="Low" className='text-center' />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            </List>
                                                        </Popover>
                                                        <Tooltip title="Set due date" arrow className='due-date-tooltip '>
                                                            <AccessTimeIcon className='table-cell-icon due-date-icon mx-1' variant="contained" onClick={(event) => handleDueDatePopoverClick(event, index)}></AccessTimeIcon>
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
                                                                <DateCalendar onChange={handleDateSelection} className={`${isCheckIconVisible ? 'calendar-hide' : ''}`}/>
                                                                <div className={`wrapper d-flex justify-content-center ${isCheckIconVisible ? '' : 'd-none'}`}>
                                                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                                                    </svg>
                                                                </div>
                                                                <div className={`  pb-2 d-flex justify-content-around ${isCheckIconVisible ? 'calendar-hide' : ''}`}> 
                                                                    <Button className='date-calendar-btn' onClick={handleDueDatePopoverClose}>CANCEL</Button>
                                                                    <Button className='date-calendar-btn' onClick={updateTaskInfoFunc} disabled={!selectedDate} >OK</Button>
                                                                </div>
                                                                
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
                                        {/* <div className='main-modal'> */}
                                            
                                        <Modal
                                            show={moreTaskmodalOpen}
                                            onHide={handleMoreTaskModalClose}
                                        >
                                        <div className='modal-parent row ' >
                                            <nav className='mt-3'>
                                                <Button className='ms-2'>{currentTaskStatus} </Button> | 
                                                
                                                <FlagIcon  className='more-task-priority-btn priority-icon mx-1' variant="contained" ></FlagIcon>

                                            </nav>
                                            <div className='modal-wrapper col-xl'>
                                                <div className="row" >
                                                    <div className='mt-2 mx-2 mb-2 pt-2' contentEditable={true} suppressContentEditableWarning={true}>
                                                        <p className='update-modal-task-name'>{currentTaskName}</p>
                                                    </div>

                                                    <div className='mt-2 pt-2 mx-2 w-100 tt' contentEditable={true} suppressContentEditableWarning={true}>
                                                        <p className='update-modal-task-name' placeholder='n'>{currentTaskDescription}</p>
                                                        
                                                    </div>
                                                </div>
                                                
                                                {/* <Modal.Dialog className='custom-width-modal'>
                                                    <Modal.Header closeButton className='modal-header'>
                                                        <Modal.Title className='default-tab-text'>{modalTitle} - {modalDescription}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className='d-flex justify-content-center align-items-center'>
                                                        <h2
                                                            contentEditable={true}
                                                            suppressContentEditableWarning={true}
                                                            style={{ maxWidth: '100%', textAlign: 'center' }}
                                                        >
                                                            {modalTitle}
                                                        </h2>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button
                                                        variant="primary"
                                                        className='default-tab-text create-task-btn'
                                                        >
                                                        <AddCircleRoundedIcon className='' />
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal.Dialog> */}
                                            </div>
                                            <div className='modal-wrapper col-xl'>
                                                <Modal.Dialog className='custom-width-modal'>
                                                <Modal.Header closeButton className='modal-header'>
                                                    <Modal.Title className='default-tab-text'>{currentTaskName} - {currentTaskDescription}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                    <h2
                                                        contentEditable={true}
                                                        suppressContentEditableWarning={true}
                                                        style={{ maxWidth: '100%', textAlign: 'center' }}
                                                    >
                                                        {currentTaskName}
                                                    </h2>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button
                                                    variant="primary"
                                                    className='default-tab-text create-task-btn'
                                                    >
                                                    <AddCircleRoundedIcon className='' />
                                                    </Button>
                                                </Modal.Footer>
                                                </Modal.Dialog>
                                            </div>
                                        </div>
                                        
                                        </Modal>
                                        {/* </div> */}
                                        

                                </TableBody> 
                                {/* } */}
                            </Table> 
                            </TableContainer>
                        </div>
                                <div className="mt-1 d-flex justify-content-center">
                                    <button className="btn create-task-button" onClick={handleCreateTaskModalOpen}>
                                        <AddTaskRoundedIcon className='add-task-icon'>
                                        </AddTaskRoundedIcon> 
                                        <span className='ps-2 default-tab-text'>Create new task</span>
                                    </button>
                                        {/* <Button variant="primary" onClick={getTaskInfo} className='btn default-tab-text create-task-btn'>
                                            Get task info
                                        </Button> */}
                                    
                                    <Modal show={createTaskModalOpen} onHide={handleCreateTaskModalClose}>
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
                                                        className=''
                                                        >
                                                        {/* <div> */}
                                                        <MenuItem value={'Stuck'} className='bg-stuck text-white status-item'>Stuck</MenuItem>
                                                        <MenuItem value={'To do'} className='bg-todo text-white status-item'>To do</MenuItem>
                                                        <MenuItem value={'In Progress'} className='bg-inprogress text-white status-item'>In Progress</MenuItem>
                                                        <MenuItem value={'Completed'} className='bg-completed text-white status-item'>Completed</MenuItem>
                                                        {/* </div> */}
                                                        
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
                            <div className="projects-div">
                                <button className='btn  create-task-button'  >
                                        <AddTaskRoundedIcon></AddTaskRoundedIcon> 
                                        <span className='ps-2 default-tab-text'>Create new project</span>
                                </button>
                            </div>     
                    </Card>
                </div>
            </div>
        </Container>
        </>
    );
};

export default Home;