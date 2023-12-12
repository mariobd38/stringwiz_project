
function addExistingTagInfo(
    jwt, existingTag, tagData, setTagData, currentTask) {
    
    const requestPayload = {
        task: currentTask,
        tagInfo: existingTag
    }

    fetch("/api/tags/addTag", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
        body: JSON.stringify(requestPayload),
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