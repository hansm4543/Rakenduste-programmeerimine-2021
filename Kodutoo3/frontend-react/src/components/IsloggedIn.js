import React from "react"

function GreetingLogIn (props){

    const isLoggedIn = props.isLoggedIn;
    if ((isLoggedIn) && (props.age != undefined)) {
      return <h1>Greeting {props.name}, sa oled {props.age}</h1>;
    }else if(isLoggedIn){
        return <h1>Greeting {props.name}</h1>;
    }
    return <h1>Greeting unknown</h1>;
}

export default GreetingLogIn