function updateTaskInfo  (
        currentRowIndex, 
        event,
        upcomingTasks,
        selectedDate,
        dayjs,
        moreTaskmodalOpen,
        handleDueDatePopoverClose,
        setCurrentTaskDueDate,
        jwt,
        setOpenSnackbar,
        ) {
        let task = upcomingTasks[currentRowIndex];
        let targetClassList = null;
        if (event.currentTarget.classList.length > 1) {
            targetClassList = event.currentTarget.getAttribute("class").split(' ');
        } else {
            targetClassList = event.currentTarget.getAttribute("class");
        }
        
        console.log(targetClassList);
        console.log(selectedDate + " is the selected date");

        //update task due date
        if (targetClassList.includes('date-calendar-btn') && selectedDate !== null) {
            console.log(dayjs(selectedDate));
            // const newDate = dayjs(`${newYearString}-${newMonthString}-${newDayString}`).toDate();
            const newDate = dayjs(selectedDate);
            task.dueDate = newDate;

            if (!moreTaskmodalOpen) {
                // setTimeout(function () {
                    handleDueDatePopoverClose();

                // }, 1800);

            } else {
                setCurrentTaskDueDate(dayjs(task.dueDate).format(`MMM D`));
                console.log(dayjs(task.dueDate).format(`MMM D`));
                handleDueDatePopoverClose();
            }
        }
        else if (targetClassList.includes('date-calendar-btn2') && selectedDate !== null) {
            const newDayString = selectedDate.format('D');
            const newMonthString = selectedDate.format('M');
            const newYearString = selectedDate.format('YYYY');
            const newDate = dayjs(`${newYearString}-${newMonthString}-${newDayString}`).toDate();
            task.dueDate = newDate;

            setCurrentTaskDueDate(dayjs(task.dueDate).format(`MMM D`));
            console.log(dayjs(task.dueDate).format(`MMM D`));
            handleDueDatePopoverClose();
        } 
        //update task description
        else if (targetClassList.includes('user-home-task-details-modal-description-textarea')) {
            task.description = event.target.value;
        } 
        //update task status
        else if (targetClassList.includes('dropdown-status-property')) {
            task.status = event.currentTarget.textContent;
        }
        //update task priority
        else if (targetClassList.includes('model-dropdown-item-menu-button-clear')) {
            task.priority = null;
        }
        else if (targetClassList.includes('dropdown-priority-property')) {
            task.priority = event.currentTarget.textContent;
        }

        // else if (targetClassList.includes('priority-list-item-btn')) {
        //     task.priority = event.target.textContent;
        //     setOpenSnackbar(false);
            
        //     setTimeout(function () {
        //         setUpdatedTaskValue(task.priority);
        //         setUpdatedTaskAttribute('Priority')
        //         setOpenSnackbar(true);
        //         handlePriorityPopoverClose();

        //     }, 230);
        // } else if (targetClassList.includes('status-list-item-btn')) {
        //     task.status = event.target.textContent;
        //     setOpenSnackbar(false);

        //     setTimeout(function () {
        //         setUpdatedTaskValue(task.status);
        //         setUpdatedTaskAttribute('Status')
        //         setOpenSnackbar(true);
        //         handleStatusPopoverClose();

        //     }, 230);
        // } else if (targetClassList.includes('remove-due-date-btn')) {
        //     task.dueDate = null;
        // } else if (targetClassList.includes('menu-change-status-btn')) {
        //     task.status = event.target.innerText;
        // } else if (targetClassList.includes('set-task-complete-btn')) {
        //     task.status = 'Completed';
        // } else if (targetClassList.includes('menu-change-priority-btn')) {
        //     task.priority = event.currentTarget.innerText;
        // }
        // else if (targetClassList.includes('more-task-description')) {
        //     task.description = event.target.value;
        // } else if (targetClassList.includes('update-task-name-content')) {
        //     task.name = event.currentTarget.textContent;
        // }


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
                Authorization: 'Bearer ' + jwt
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
            console.log("updated task array!");
        })
        .catch((error) => {
            console.error(error); 
        });
}

export {updateTaskInfo}