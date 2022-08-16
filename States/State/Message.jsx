import React from 'react'
class Message extends React.Component{
    state={
        Message:"Hello World!"
    }
    updatedmessage=()=>{
        this.setState({Message:"Hello World! Welcome to React.."})
    }
    render(){
        return <div>
            <h1>State Component</h1>
            <h1>Message:{this.state.Message}</h1>
            <button onClick={this.updatedmessage}>Onclick</button>

        </div>
    }
}
export default Message;