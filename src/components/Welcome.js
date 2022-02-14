import React from "react";
import '../styles/App.css';
import App from "./App";
const Welcome = ({name}) => {
    let sayHi = `Hey ${name}!`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
}
const functionExample=()=>
{
    return (
    <Welcome/>
    );
}
export default Welcome;
