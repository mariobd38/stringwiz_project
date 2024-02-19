// function getTagInfo  (jwt, setTagData, currTaskId) {
//     fetch("/api/tags/get?taskId=" + currTaskId, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: 'Bearer ' + jwt
//         },

//     }).then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         // console.log(data);
//         setTagData(data);
        
//         // setTaskData([...taskData, data]);
//     })
//     .catch((error) => {

//         console.error(error); 
//     });
// }
async function getTagInfo(jwt,currTaskId) {
    try {
        const response = await fetch("/api/tags/get?taskId=" + currTaskId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + jwt
            },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all tags info:', error);
        throw error;
    }
}

export {getTagInfo}