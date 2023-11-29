
function addExistingTagInfo(
    jwt, existingTag, tagData, setTagData, currentTask) {
    
    const taskId = currentTask.id;

    fetch("/api/tags/addTag?taskId=" + taskId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
        body: JSON.stringify(existingTag),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const addedTag = {
            id: data.id, 
            name: data.name,
            description: data.description,
            dateCreated: data.createdOn,
            color: data.color,
        };
        setTagData([...tagData, addedTag]);
      })
      .catch((error) => {
        console.error(error); 
      }); 
}
export {addExistingTagInfo}