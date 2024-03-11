function updateTagInfo  (jwt, event, allTagData,currentTaskTags,tagNameRenameButtonClickedIndex,
    oldTagName,newTagName) {
    
    const tag = allTagData.find(tag => tag.name === oldTagName);

    const existingTag = allTagData.find(tag => tag.name === newTagName.trim());
    if ((newTagName.trim() === '') || (tag !== existingTag && existingTag !== undefined)) { //todo: if tag already exists, add an error snackbar
        event.preventDefault();
        return;
    }

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
        currentTaskTags[tagNameRenameButtonClickedIndex] = newData;
    })
    .catch((error) => {
        console.error(error); 
    });
}

export {updateTagInfo}
