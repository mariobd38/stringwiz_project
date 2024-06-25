function getUserInfo(setUserInfo) {
    fetch(`/api/user/getInfo`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        setUserInfo(data);
    })
    .catch((error) => {
        console.error(error); 
    });
}

export {getUserInfo}