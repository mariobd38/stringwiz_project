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
        throw new Error("Error fetching tags data: " + error.message);
    }
}

export {getAllTagsInfo}