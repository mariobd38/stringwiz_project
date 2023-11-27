
function createTagInfo(
    jwt, tagName, currTaskId) {
    
        const tagInfo = {
            name: tagName
        };

    fetch("/api/tags/create?taskId=" + currTaskId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
        body: JSON.stringify(tagInfo),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // const createdTask = {
        //     id: data.id, 
        //     name: data.name,
        //     description: data.description,
        //     status: data.status,
        //     priority: data.priority,
        //     dueDate: data.dueDate,
        //     dateCreated: data.createdOn,
        //     dateUpdated: data.lastUpdatedOn,
        //     taskIdNumber: data.taskIdNumber,
        // };
        // setTaskData([...taskData, createdTask]);


        // let taskList = userTasks;
        // if(taskList === "") taskList = [];
        // taskList.push(taskTableInfo);
      })
      .catch((error) => {
        console.error(error); 
      }); 
}
export {createTagInfo}