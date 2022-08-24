import React from 'react'
import { useState } from 'react'
let ExTwo =()=>{
    let display={}
    let [prod,product]=useState("Iphone")
    let [uni, units]=useState(1)
    let update1=()=>{
        product("Samsung")
    }
    let update2=()=>{
        product("Oppo")
    }
    let update3=()=>{
        product("Vivo")
    }
    return <div>
        <h1>Display:{prod}</h1>
        <button onClick={update1}>1</button>
        <button onClick={update2}>2</button>
        <button onClick={update3}>3</button>
        <div>
            <h2>Units:{uni}</h2>
            <button onClick={()=>{units(uni-1)}}>-</button>
            <button onClick={()=>{units(uni+1)}}>+</button>
        </div>
    </div>
}
export default ExTwo;