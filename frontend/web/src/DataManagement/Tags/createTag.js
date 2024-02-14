
function createTagInfo(
    jwt, taskData, currentIndex, tagName, tagData, setTagData, allTagData, setAllTagData) {
    
    const tagInfo = {
        name: tagName,
        color: null
    };
    const task = taskData[currentIndex];

    fetch(`/api/tags/create?taskId=${task.id}`, {
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
            dateCreated: data.createdOn,
            color: data.color,
        };
        const newTagData = [...tagData, createdTag]
        setTagData(newTagData);
        setAllTagData([...allTagData, createdTag]);

        taskData[currentIndex].tags = newTagData;
        console.log(taskData[currentIndex].tags);
      })
      .catch((error) => {
        console.error(error); 
      }); 
}
export {createTagInfo}