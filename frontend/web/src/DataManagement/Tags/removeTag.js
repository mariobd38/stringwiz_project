
function removeTagInfo(
    jwt, tagToRemove, currTaskId, tagData, setTagData, allTagData, setAllTagData) {
    fetch("/api/tags/remove?taskId=" + currTaskId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
        body: JSON.stringify(tagToRemove),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // const createdTag = {
        //     id: data.id, 
        //     name: data.name,
        //     dateCreated: data.createdOn,
        //     color: data.color,
        // };
        // setTagData([...tagData, createdTag]);
        // setAllTagData([...allTagData, createdTag]);

      })
      .catch((error) => {
        console.error(error); 
      }); 
}
export {removeTagInfo}