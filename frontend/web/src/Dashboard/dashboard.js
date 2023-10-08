import React from 'react';
import { useLocalState } from "../utils/useLocalStorage";

const Dashboard = () => {
    const [jwt] = useLocalState("", "jwt");

    return (
        <div>
            <h1>Hello world</h1>
            <div>JWT value is {jwt}</div>
        </div>
    );
};

export default Dashboard;