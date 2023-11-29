function getAllTagsInfo  (jwt,setAllTagData) {
    console.log("wo");
    fetch("/api/tags/getAll", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + jwt
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        setAllTagData(data);
    })
    .catch((error) => {

        console.error(error); 
    });
}

export {getAllTagsInfo}