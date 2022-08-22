import React from 'react'
class Bind extends React.Component{
    constructor(x){
        super(x)
        this.state={
            Color:"Red"
        }
    }
    newHandler=(y)=>{
        this.setState({Color:y})
    }
    render(){
        return <div>
            <h2>Colors Available={this.state.Color}</h2>
            <button onClick={this.newHandler.bind(this,"Pink")}>Color 1</button>
            <button onClick={this.newHandler.bind(this,"White")}>Color 2</button>
            <button onClick={this.newHandler.bind(this,"Black")}>Color 3</button>
            <button onClick={this.newHandler.bind(this,"White")}>Color 4</button>
            <button onClick={this.newHandler.bind(this,"Blue")}>Color 5</button>
            <button onClick={this.newHandler.bind(this,"Yellow")}>Color 6</button>
            <button onClick={this.newHandler.bind(this,"No Colors Available here")}>Color 7</button>
            </div>
    }
}
export default Bind