function selectProfile(selectedProfile, setUserInfo) {

    const profileInfo = {
        color: selectedProfile.color,
        pfd: {
            name: selectedProfile && selectedProfile.file ? selectedProfile.file.response.name : null,
            type: selectedProfile && selectedProfile.file ? selectedProfile.file.response.type : null,
            data: selectedProfile && selectedProfile.file ? selectedProfile.file.response.data : null,
        },
        avatarType: selectedProfile.avatarType
    };

    fetch(`/api/onboarding/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profileInfo)
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        setUserInfo((prevUserInfo) => {
            return {
              ...prevUserInfo,
              ...data, // Merge all properties from data
            };
          });
    })
    .catch((error) => {
        console.error(error); 
    });
}

export {selectProfile}