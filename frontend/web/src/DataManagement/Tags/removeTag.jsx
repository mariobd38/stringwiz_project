
async function removeTagInfo(
    jwt, currentTagId, currentTaskId, currentTaskTags, setCurrentTaskTags) {

    try {
        const response = await fetch(`/api/tags/remove?taskId=${currentTaskId}&tagId=${currentTagId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
    });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        if (response.status === 204) { 
            const updatedTaskTags = currentTaskTags.filter(tag => tag.id !== currentTagId);
            setCurrentTaskTags(updatedTaskTags);
        }
    } catch(error) {
        console.error(error); 
    };
}
export {removeTagInfo}