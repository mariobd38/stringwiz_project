function getTagInfo  (jwt, tagData, setTagData, currTaskId) {
    console.log("current task id" + currTaskId)
    fetch("/api/tags/get?taskId=" + currTaskId, {
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
        // console.log(data);
        setTagData(data);
        
        // setTaskData([...taskData, data]);
    })
    .catch((error) => {

        console.error(error); 
    });
}

export {getTagInfo}