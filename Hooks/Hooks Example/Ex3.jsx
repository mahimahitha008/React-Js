import React from 'react'
import { useState } from 'react'
let Ex3 =()=>{
    let Employee={}
    let [a,b]=useState("Under Process")
    let status=()=>{
        b("Processing")
    }
    let status1=()=>{
        b("Verifying")
    }
    let status2=()=>{
        b("Success")
    }
    return <div>
        <h1>Status:{a}</h1>
        <button onClick={status} className="btn btn-danger">Next</button><>&nbsp;&nbsp;</>
        <button onClick={status1} className='btn btn-warning'>Next</button><>&nbsp;&nbsp;</>
        <button onClick={status2} className='btn btn-success'>Next</button>
    </div>
}
export default Ex3