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
        jwt
        ) {
    let task = taskData[currentRowIndex];

        const targetClassList = event.currentTarget.getAttribute("class").split(' ');
        console.log(targetClassList);

        
        if (targetClassList.includes('date-calendar-btn') && selectedDate !== null) {
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
                handleDueDatePopoverClose();
            }
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
        } else if (targetClassList.includes('remove-due-date-btn')) {
            task.dueDate = null;
        } else if (targetClassList.includes('menu-change-status-btn')) {
            task.status = event.target.innerText;
        } else if (targetClassList.includes('set-task-complete-btn')) {
            task.status = 'Completed';
        } else if (targetClassList.includes('menu-change-priority-btn')) {

            task.priority = event.currentTarget.innerText;
            // setCurrentTaskPriority(task.priority);

            console.log("the text content is " + event.currentTarget.textContent)
            console.log("heloooo");
            console.log(task.priority + "task");
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