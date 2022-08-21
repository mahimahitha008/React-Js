import Output from "./Output";
import React from 'react'
class Items extends React.Component{
    product="Teddy Bear"
    color="Red"
    height="6-feet"
    stock="Available"
    colors=["Brown","Yellow","Pink"]
    details={
        Exchange:'Can Be Done',
        Terms:"With in 10 Days"
    }
    render(){
    return <div>
        <p>Items Page</p>
        <Output Product={this.product} Color={this.color} Height={this.height} Stock={this.stock} Shades={this.colors} Details={this.details}/>
    </div>
    }
}
export default Items