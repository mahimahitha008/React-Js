import React from 'react'
class Display extends React.Component{
    state={
        name:"Oppo Reno 5 Pro",
        image:'https://specifications-pro.com/wp-content/uploads/2020/11/Oppo-Reno-5-Pro-5G.jpg',
        price:39850,
        quantity:1
    }
    increment=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    decrement=()=>{
        this.setState({quantity:this.state.quantity-1})
    }

    render(){
        return<div>
            <h1>Display Component</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <table className='table table-hover'>
                            <thead className='bg-success text-white'>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td><img src={this.state.image} height='100px'alt="Buy" /></td>
                                    <td>{this.state.price}</td>
                                    <td>
                                        <button onClick={this.decrement}>-</button>
                                        <>&nbsp;&nbsp;</>
                                        <span>{this.state.quantity}</span>
                                        <>&nbsp;&nbsp;</>
                                        <button onClick={this.increment}>+</button>
                                    </td>
                                    <td>{this.state.quantity*this.state.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Display