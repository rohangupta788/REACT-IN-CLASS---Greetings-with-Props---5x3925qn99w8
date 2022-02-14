import React from "react";

function Welcome(props){
    let sayhi=`hey ${props.name}!`;
    let greetmessage= `Welcome to Newton School.`
    return(
        <div>
<h1>{sayhi}</h1>
<h2>{greetmessage}</h2>

  </div>  );
}



export default Welcome;
