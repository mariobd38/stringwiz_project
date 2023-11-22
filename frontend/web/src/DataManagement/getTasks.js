function getTaskInfo  (jwt, setTaskData) {
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
        return response.json();
    })
    .then((data) => {
        console.log("got data!");
        setTaskData(data);
        // setTaskData([...taskData, data]);
    })
    .catch((error) => {

        console.error(error); 
    });
}

export {getTaskInfo}