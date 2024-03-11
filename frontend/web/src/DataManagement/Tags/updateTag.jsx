function updateTagInfo  (jwt, event, allTagData,currentTaskTags,tagNameRenameButtonClickedIndex,
    oldTagName,newTagName) {
    
    let tag = allTagData.find(tag => tag.name === oldTagName);
    let tagIndex = allTagData.findIndex(tag => tag.name === oldTagName);

    console.log(oldTagName === newTagName.trim());

    if (oldTagName !== newTagName.trim()) {
        tag.name = newTagName;
    }

    const tagInfo = {
        id: tag.id,
        name: tag.name,
        color: tag.color
    }

    fetch("/api/tags/update", {
        method: "PUT",
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
    .then((newData) => {
        console.log(newData);
        // allTagData[tagIndex] = newData;
        currentTaskTags[tagNameRenameButtonClickedIndex] = newData;
        // upcomingTasks[currentRowIndex] = newData;
    })
    .catch((error) => {
        console.error(error); 
    });
}

export {updateTagInfo}
