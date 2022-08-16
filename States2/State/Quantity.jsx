import React from 'react'
class Quantity extends React.Component{
    state={
        quantity:1
    }
    incre=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    decre=()=>{
        this.setState({quantity:this.state.quantity-1})
    }
        render(){
        return <div>
            <h1>Dizo Buds</h1>
            <button onClick={this.decre}>-</button>
            <>&nbsp;&nbsp;&nbsp;</>
            <span>{this.state.quantity}</span>
            <>&nbsp;&nbsp;&nbsp;</>
            <button onClick={this.incre}>+</button>
        </div>
    }
}
export default Quantity