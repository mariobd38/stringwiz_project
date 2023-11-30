
function createTagInfo(
    jwt, tagName, currTaskId, tagData, setTagData, allTagData, setAllTagData) {
    
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
        const createdTag = {
            id: data.id, 
            name: data.name,
            description: data.description,
            dateCreated: data.createdOn,
            color: data.color,
        };
        setTagData([...tagData, createdTag]);
        setAllTagData([...allTagData, createdTag]);

        // let taskList = userTasks;
        // if(taskList === "") taskList = [];
        // taskList.push(taskTableInfo);
      })
      .catch((error) => {
        console.error(error); 
      }); 
}
export {createTagInfo}