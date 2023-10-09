import React from 'react';
import { useLocalState } from "../utils/useLocalStorage";
import Container from 'react-bootstrap/Container';


const Home = () => {
    document.body.style.backgroundColor = "rgb(30,31,33)";
    const [jwt] = useLocalState("", "jwt");
    const [userEmail] = useLocalState("", "userEmail");
    console.log("jwt: " + jwt);
    console.log("userEmail: " + userEmail);
    function createTask() {
        fetch("/tasks",{
            headers: {
                "Content-Type": "application/json",
                "Authentication": `Bearer ${jwt}`
            },
            method: "POST",
        }).then(response => {
            if (response.status === 200) 
                return response.json();
        }).then(data => {
            console.log(data);
        });
    }
    
    return (

        <Container className='text-center'>
            {/* <h1>Hello world</h1>
            <div>JWT value is {jwt}</div> */}
            <h2 className='text-white'>Good afternoon, <span>{userEmail}</span></h2> 
            <div className='mt-3'>
                <button className='btn btn-success' onClick={() => createTask()} >Create new task</button>

            </div>
        </Container>
    );
};

export default Home;