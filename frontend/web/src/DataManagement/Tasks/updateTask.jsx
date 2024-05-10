function UpdateTaskInfo  (
        currentRowIndex,
        event,
        taskType,
        setTaskType,
        selectedDate,
        dayjs,
        setCurrentTaskDueDate,
        setCurrentTaskDueDateTime,
        completedTasks,
    ) {
        // console.log({ ...taskType[currentRowIndex] });
        let dueDateRelated = false;
        let task = { ...taskType[currentRowIndex] };
        let targetClassList = null;

        if (event === "clear date time") {
            task.dueDateTime = null;
            // setCurrentTaskDueDate(null);
            dueDateRelated=true;
            setCurrentTaskDueDateTime(null);
        } else if (event === "clear date") {
            task.dueDate = null;
            task.dueDateTime = null;
            setCurrentTaskDueDate(null);
            dueDateRelated=true;
            setCurrentTaskDueDateTime(null);

        } else if (event !== "due date" && event !== "due time") {
            if (event.currentTarget.classList.length > 1) {
                targetClassList = event.currentTarget.getAttribute("class").split(' ');
            } else {
                targetClassList = event.currentTarget.getAttribute("class");
            }
        } else if (event !== "due date") {
            //
            task.dueDate = dayjs(selectedDate);
            task.dueDateTime = dayjs(selectedDate);
            setCurrentTaskDueDate(dayjs(task.dueDate));
            setCurrentTaskDueDateTime(dayjs(task.dueDateTime));
            dueDateRelated=true;
        } else {
            console.log(task.dueDateTime);
            //update task due date
            task.dueDate =  (task.dueDateTime) ? dayjs(selectedDate) : dayjs(selectedDate).endOf('day');
            // task.dueDate = dayjs(selectedDate).endOf('day');
            // task.dueDate = dayjs(selectedDate);

            setCurrentTaskDueDate(dayjs(task.dueDate));
            dueDateRelated=true;
        }

        if (!dueDateRelated) {
            if (targetClassList.includes('user-home-task-details-modal-name')) {
                task.name = event.currentTarget.textContent;
            }
            //remove task due date 
            if (targetClassList.includes('user-home-task-details-modal-due-date-remove')) {
                task.dueDate = null;
                task.dueDateTime = null;
                setCurrentTaskDueDate(null);
                setCurrentTaskDueDateTime(null);
            }
            //update task description
            else if (targetClassList.includes('user-home-task-details-modal-description-textarea')) {
                task.description = event.target.value;
            } 
            
            //update task status (from dropdown)
            else if (targetClassList.includes('model-dropdown-item-status-menu-button')) {
                task.status = event.currentTarget.textContent;

                if(task.status === 'Completed') {
                    setTaskType([...completedTasks]);
                }
            }
            //update task status (from 'next' status)
            else if (targetClassList.includes('user-home-task-details-modal-next-status-btn')) {
                let statuses = ['To Do', 'In Progress', 'Completed'];
                if (statuses.indexOf(task.status) === statuses.length - 1) {
                    task.status = statuses[0];
                } else {
                    task.status = statuses[statuses.indexOf(task.status)+1];
                }
            }
            //clear task priority
            else if (targetClassList.includes('model-dropdown-item-menu-button-clear')) {
                task.priority = null;
            }
            //update task priority
            else if (targetClassList.includes('model-dropdown-item-priority-menu-button')) {
                task.priority = event.currentTarget.textContent;
            } else if (targetClassList.includes('user-home-task-set-complete')) {
                task.status = 'Completed';
            }
        }
        console.log(task.dueDate);
        console.log(task.dueDateHasTime);

        const taskInfo = {
            id: task.id,
            name: task.name,
            description: task.description,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate,
            dueDateTime: task.dueDateTime,
        };

        return new Promise((resolve, reject) => {
            fetch("/api/tasks/put", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskInfo),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((newData) => {
                let updatedTaskType = [...taskType];
                console.log(newData);
                updatedTaskType[currentRowIndex] = newData;
                setTaskType(updatedTaskType); 
                resolve();
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
}

export {UpdateTaskInfo}