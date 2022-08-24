import React from "react";
import Axios from 'axios'
class Button extends React.Component{
    constructor(y){
        super(y)
        this.state={
            data:[]
        }
    }
    getUpdate=()=>{
        Axios.get('https://api.instantwebtools.net/v1/airlines')
        .then((res)=>{
            this.setState({data:res.data})
        })
        .catch(()=>{

        })
    }
    render(){
    return <div>
        <h1>Button Component</h1>
        <pre>{JSON.stringify(this.state.data)}</pre>
        <button onClick={this.getUpdate}>Data</button>
    </div>
}
}
export default Button;