import React from "react";
import "../styles/App.css";
import App from "./App";

const Welcome= ({props})=>{
    let sayhi=`hey ${name}!`;
    let greetmessage= `Welcome to Newton School.`
    return(
        <div>
<h1>{sayhi}</h1>
<h2>{greetmessage}</h2>

  </div>  );
}

functionExample=()=>{
return(
    <Welcome/>
    );

}

export default Welcome;
