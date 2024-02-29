
async function addExistingTagInfo(
    jwt, taskId, tagId) {
    
    try {
        const response = await fetch(`/api/tags/addTag?taskId=${taskId}&tagId=${tagId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
        // body: JSON.stringify(requestPayload),
        });
            
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const addedTag = {
            id: data.id, 
            name: data.name,
            dateCreated: data.createdOn,
            color: data.color,
        };
    //     setTagData([...tagData, addedTag]);
        console.log(data);
        return addedTag;
    
    } catch(error) {
        console.error(error); 
        return null;
    }; 
}
export {addExistingTagInfo}