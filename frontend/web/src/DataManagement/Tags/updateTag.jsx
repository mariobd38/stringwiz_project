function updateTagInfo  (jwt, event, allTagData,currentTaskTags,tagNameRenameButtonClickedIndex,
    oldTagName,newTagName,newTagColor,actualTag) {
    
    if(newTagColor === null) {

        const existingTag = allTagData.find(tag => tag.name === newTagName.trim());
        if ((newTagName.trim() === '') || (actualTag !== existingTag && existingTag !== undefined)) { //todo: if tag already exists, add an error snackbar
            event.preventDefault();
            return;
        }

        if (oldTagName !== newTagName.trim()) {
            actualTag.name = newTagName;
        }
    } else {
        actualTag.color = newTagColor;
    }
   
    const tagInfo = {
        id: actualTag.id,
        name: actualTag.name,
        color: actualTag.color
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



// function updateTagInfo (jwt, event, allTagData,currentTaskTags,tagNameRenameButtonClickedIndex,
//     oldTagName,newTagName,newTagColor,actualTag) {

//     if(newTagColor === null) {

//         const existingTag = allTagData.find(tag => tag.name === newTagName.trim());
//         if ((newTagName.trim() === '') || (actualTag !== existingTag && existingTag !== undefined)) { //todo: if tag already exists, add an error snackbar
//             event.preventDefault();
//             return;
//         }

//         if (oldTagName !== newTagName.trim()) {
//             actualTag.name = newTagName;
//         }
//     } else {
//         console.log(newTagColor);
//         actualTag.color = newTagColor;
//     }
   
//     const tagInfo = {
//         id: actualTag.id,
//         name: actualTag.name,
//         color: actualTag.color
//     }

//     try {
//         const response = fetch('/api/tags/update', {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: 'Bearer ' + jwt
//             },
//             body: JSON.stringify(tagInfo),
//         });

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const data = response.json();
//         console.log(data);
//         currentTaskTags[tagNameRenameButtonClickedIndex] = data;
//         return data;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

// export {updateTagInfo}