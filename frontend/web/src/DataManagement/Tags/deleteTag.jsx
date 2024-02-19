
function deleteTagInfo(
    jwt, tagToDelete, tagData, setTagData, allTagData, setAllTagData) {
    fetch("/api/tags/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
        body: JSON.stringify(tagToDelete),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        if (response.status === 204) {
            // No content in response (successful deletion)
            // const updatedTaskData = taskData.filter((_, index) => index !== currentRowIndex);
            // setTaskData(updatedTaskData);    
            // console.log("Deleted item from task array!");
        }
    })
    .catch((error) => {
        console.error(error); 
    });
}
export {deleteTagInfo}