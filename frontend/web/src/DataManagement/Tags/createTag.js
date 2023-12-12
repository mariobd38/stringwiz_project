
function createTagInfo(
    jwt, taskData, currentIndex, tagName, currTask, tagData, setTagData, allTagData, setAllTagData) {
    
    const tagInfo = {
        name: tagName
    };

    const requestPayload = {
        task: currTask,
        tagInfo: tagInfo
    }

    fetch("/api/tags/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
        // body: JSON.stringify(tagInfo),
        body: JSON.stringify(requestPayload),
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
        const newTagData = [...tagData, createdTag]
        setTagData(newTagData);
        setAllTagData([...allTagData, createdTag]);

        taskData[currentIndex].tags = newTagData;
      })
      .catch((error) => {
        console.error(error); 
      }); 
}
export {createTagInfo}