function updateTaskInfo  (
        currentRowIndex, 
        event,
        taskData,
        selectedDate,
        dayjs,
        moreTaskmodalOpen,
        setCheckIconVisible,
        handleDueDatePopoverClose,
        setCurrentTaskDueDate,
        handlePriorityPopoverClose,
        handleStatusPopoverClose,
        jwt,
        setOpenSnackbar,
        setUpdatedTaskValue,
        setUpdatedTaskAttribute
        ) {
        let task = taskData[currentRowIndex];
        let targetClassList = null;
        if (event.currentTarget.classList.length > 1) {
            targetClassList = event.currentTarget.getAttribute("class").split(' ');
        } else {
            targetClassList = event.currentTarget.getAttribute("class");
        }
        
        console.log(targetClassList);
        
        if (targetClassList.includes('date-calendar-btn') && selectedDate !== null) {
            console.log("inside date calendar");
            const newDayString = selectedDate.format('D');
            const newMonthString = selectedDate.format('M');
            const newYearString = selectedDate.format('YYYY');
            const newDate = dayjs(`${newYearString}-${newMonthString}-${newDayString}`).toDate();
            task.dueDate = newDate;

            if (!moreTaskmodalOpen) {
                setCheckIconVisible(true);
                
                setTimeout(function () {
                    setCheckIconVisible(false);

                    handleDueDatePopoverClose();
                    

                }, 1800);

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
        } else if (targetClassList.includes('priority-list-item-btn')) {
            task.priority = event.target.textContent;
            setOpenSnackbar(false);
            
            setTimeout(function () {
                setUpdatedTaskValue(task.priority);
                setUpdatedTaskAttribute('Priority')
                setOpenSnackbar(true);
                handlePriorityPopoverClose();

            }, 230);
        } else if (targetClassList.includes('status-list-item-btn')) {
            task.status = event.target.textContent;
            setOpenSnackbar(false);

            setTimeout(function () {
                setUpdatedTaskValue(task.status);
                setUpdatedTaskAttribute('Status')
                setOpenSnackbar(true);
                handleStatusPopoverClose();

            }, 230);
        } else if (targetClassList.includes('remove-due-date-btn')) {
            task.dueDate = null;
        } else if (targetClassList.includes('menu-change-status-btn')) {
            task.status = event.target.innerText;
        } else if (targetClassList.includes('set-task-complete-btn')) {
            task.status = 'Completed';
        } else if (targetClassList.includes('menu-change-priority-btn')) {
            task.priority = event.currentTarget.innerText;
        }
        else if (targetClassList.includes('more-task-description')) {
            task.description = event.target.value;
        } else if (targetClassList.includes('update-task-name-content')) {
            // console.log("inside tc: " + event.currentTarget.textContent);
            task.name = event.currentTarget.textContent;
            // console.log("My task name " + task.name)
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
            taskData[currentRowIndex] = newData;
            // setTaskData(newData);    
            console.log("updated task array!");
        })
        .catch((error) => {
            console.error(error); 
        });
}

export {updateTaskInfo}