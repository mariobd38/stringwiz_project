
function deleteTagInfo(
    jwt,currentTaskTags,setCurrentTaskTags,tagDeleteButtonClickedIndex) {
    const tagId = currentTaskTags[tagDeleteButtonClickedIndex].id;
    fetch(`/api/tags/delete?tagId=${tagId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        if (response.status === 204) {
            // No content in response (successful deletion)
            const updatedTaskTagsData = currentTaskTags.filter((_, index) => index !== tagDeleteButtonClickedIndex);
            setCurrentTaskTags(updatedTaskTagsData);    
            // console.log("Deleted item from task array!");
        }
    })
    .catch((error) => {
        console.error(error); 
    });
}
export {deleteTagInfo}