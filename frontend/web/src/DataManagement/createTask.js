
function createTaskInfo(
    dayjs,
    taskName, 
    taskDescription,
    taskStatus,
    taskPriority,
    taskDueDate,
    setMissingNameError,
    setTaskData,
    setUserTasks,
    setTaskName,
    setTaskDescription,
    setTaskStatus,
    setTaskPriority,
    setTaskDueDate,
    setCreateTaskModalOpen,
    jwt,
    taskData,
    userTasks) {
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
        status: taskStatus===null ? "To Do" : taskStatus,
        priority: taskPriority,
        dueDate: (taskDueDate !== null) ? `${monthString}/${dayString}/${yearString}` : ''
    };
    setTaskData([...taskData, taskTableInfo]);

    const taskInfo = {

        name: taskName,
        description: taskDescription,
        status: taskStatus===null ? "To Do" : taskStatus,
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
        return response.json();
    })
    .then((data) => {
        const createdTask = {
            id: data.id, 
            name: data.name,
            description: data.description,
            status: data.status,
            priority: data.priority,
            dueDate: data.dueDate,
            dateCreated: data.createdOn,
            dateUpdated: data.lastUpdatedOn,
        };
        setTaskData([...taskData, createdTask]);


        let taskList = userTasks;
        if(taskList === "") taskList = [];
        taskList.push(taskTableInfo);
        setUserTasks(JSON.parse(JSON.stringify(taskList)))
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
export {createTaskInfo}