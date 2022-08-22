import React from "react";
class Binderold extends React.Component{
    constructor(x){
        super(x)
        this.state={
            Color:"Red"
        }
    }
    Color1=()=>{
        this.setState({Color:"Pink"})
    }
    Color2=()=>{
        this.setState({Color:"Black"})
    }
    Color3=()=>{
        this.setState({Color:"Brown"})
    }
    Color4=()=>{
        this.setState({Color:"White"})
    }
    Color5=()=>{
        this.setState({Color:"No Colors To Show"})
    }

    render(){
        return <div>
            <h2>Colors Available:{this.state.Color}</h2>
            <button onClick={this.Color1}>Color1</button>
            <button onClick={this.Color2}>Color1</button>
            <button onClick={this.Color3}>Color1</button>
            <button onClick={this.Color4}>Color1</button>
            <button onClick={this.Color5}>Color1</button>
        </div>
    }
}
export default Binderold