function updateTaskInfo  (
        currentRowIndex, 
        event,
        upcomingTasks,
        selectedDate,
        dayjs,
        moreTaskmodalOpen,
        handleDueDatePopoverClose,
        setCurrentTaskDueDate,
        setOpenSnackbar,
        ) {
        let task = upcomingTasks[currentRowIndex];
        let targetClassList = null;
        if (event.currentTarget.classList.length > 1) {
            targetClassList = event.currentTarget.getAttribute("class").split(' ');
        } else {
            targetClassList = event.currentTarget.getAttribute("class");
        }
        // console.log(targetClassList);
        // console.log(selectedDate + " is the selected date");

        if (targetClassList.includes('user-home-task-details-modal-name')) {
            task.name = event.currentTarget.textContent;
        }
        //update task due date
        else if (targetClassList.includes('date-calendar-btn') && selectedDate !== null) {
            // console.log(dayjs(selectedDate));
            // const newDate = dayjs(`${newYearString}-${newMonthString}-${newDayString}`).toDate();
            const newDate = dayjs(selectedDate);
            task.dueDate = newDate;

            if (!moreTaskmodalOpen) {
                // setTimeout(function () {
                    handleDueDatePopoverClose();

                // }, 1800);

            } else {
                setCurrentTaskDueDate(dayjs(task.dueDate).format(`MMM D`));
                // console.log(dayjs(task.dueDate).format(`MMM D`));
                handleDueDatePopoverClose();
            }
        }
        //remove task due date 
        if (targetClassList.includes('user-home-task-details-modal-due-date-remove')) {
            task.dueDate = null;
            setCurrentTaskDueDate(null);
            // handleDueDatePopoverClose();
        }
        //update task description
        else if (targetClassList.includes('user-home-task-details-modal-description-textarea')) {
            task.description = event.target.value;
        } 
        
        //update task status (from dropdown)
        else if (targetClassList.includes('model-dropdown-item-status-menu-button')) {
            task.status = event.currentTarget.textContent;
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
        }

        const taskInfo = {
            id: task.id,
            name: task.name,
            description: task.description,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate,
        };

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
            upcomingTasks[currentRowIndex] = newData;
            // setTaskData(newData);    
            // console.log("updated task array!");
        })
        .catch((error) => {
            console.error(error); 
        });
}

export {updateTaskInfo}