// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            <h1>Keypad</h1>
            <input type="password" onChange={() => console.log("Entering password...")}>

            </input>
        </div>
    )
}

export default Keypad;