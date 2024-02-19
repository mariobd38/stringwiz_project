
// function createTagInfo(
//     jwt, taskData, setTaskData, updateTaskTags, currentIndex, tagName, tagData, setTagData, allTagData, setAllTagData) {
    
//     const tagInfo = {
//         name: tagName,
//         color: null
//     };
//     const task = taskData[currentIndex];

//     fetch(`/api/tags/create?taskId=${task.id}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: 'Bearer ' + jwt
//         },
//         body: JSON.stringify(tagInfo),
//     }).then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         const createdTag = {
//             id: data.id, 
//             name: data.name,
//             dateCreated: data.createdOn,
//             color: data.color,
//         };

//         const updatedTags = [...taskData[currentIndex].tags, createdTag];
//         updateTaskTags(updatedTags);

//         taskData[currentIndex].tags = updatedTags;
//         console.log(updatedTags);

//         // Update local tag data state
//         const newTagData = [...tagData, createdTag];
//         setTagData(newTagData);
//         setAllTagData([...allTagData, createdTag]);
//       })
//       .catch((error) => {
//         console.error(error); 
//       }); 
// }
// export {createTagInfo}

async function createTagInfo(jwt, taskId, tagName) {
    const tagInfo = {
        name: tagName,
        color: null
    };

    try {
        const response = await fetch(`/api/tags/create?taskId=${taskId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
            body: JSON.stringify(tagInfo),
        });

        if (!response.ok) {

            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const createdTag = {
            id: data.id,
            name: data.name,
            dateCreated: data.createdOn,
            color: data.color,
        };

        return createdTag;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export {createTagInfo}