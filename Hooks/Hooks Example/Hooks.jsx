import React from 'react'
import { useState } from 'react'
let Hooks=()=>{
    let Message="Hello";
    let [x,y]=useState("Hello World!")
    // Object Destructuring Takes Place
    // let first=()=>{
    //     y("Good Morning!")
    // }
    // let second=()=>{
    //     y("Good Night!")
    // }
    return <div>
        <h1>Wish Message:{x}</h1>
        <button onClick={()=>{y("Good Morning!")}}>GM</button>
        <button onClick={()=>{y("Good Night!")}}>GN</button>

    </div>
}
export default Hooks