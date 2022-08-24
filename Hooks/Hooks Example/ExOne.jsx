import React from 'react'
import {useState} from 'react'
function ExOne (){
    let Color="Red"
    let [one,two]=useState("Red")
    let handlerOne=()=>{
        two("Pink")
    }
    let handlerTwo=()=>{
        two("Black")
    }
    return <div>
        <h1>Colors={one}</h1>
        <button onClick={handlerOne}>One</button>
        <button onClick={handlerTwo}>Two</button>
        <button onClick={()=>{two("White")}}>Three</button>
        <button onClick={()=>{two("Blue")}}>Four</button>
    </div>
}
export default ExOne