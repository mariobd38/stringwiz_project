// async function getAllTagsInfo  (jwt,setAllTagData) {
//     fetch("/api/tags/getAll", {
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
//         setAllTagData(data);
//     })
//     .catch((error) => {
//     });
// }
async function getAllTagsInfo(jwt) {
    try {
        const response = await fetch("/api/tags/getAll", {
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

export {getAllTagsInfo}