import React from 'react'
class Display extends React.Component{
    state={
        name:"Oppo Reno 5 Pro",
        image:'https://specifications-pro.com/wp-content/uploads/2020/11/Oppo-Reno-5-Pro-5G.jpg',
        price:39850,
        quantity:1,

        name1:'Oneplus 10 Pro',
        image1:'https://cdn1.smartprix.com/rx-iGB0rxliX-w1200-h1200/oneplus-10-pro-5g.jpg',
        price1:74579,
        quantity1:1,

        new_name:'Samsung Flip 3',
        new_image:'https://media.extra.com/s/aurora/100286552_800/Samsung-Galaxy-Z-Flip-3-5G-256GB-Green?locale=en-GB,en-*,*',
        new_price:95999,
        new_quantity:1
    }

    increment=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    decrement=()=>{
        this.setState({quantity:this.state.quantity-1})
    }
    increment1=()=>{
        this.setState({quantity1:this.state.quantity1+1})
    }
    decrement1=()=>{
        this.setState({quantity1:this.state.quantity1-1})
    }
    new_increment=()=>{
        this.setState({new_quantity:this.state.new_quantity+1})
    }
    new_decrement=()=>{
        this.setState({new_quantity:this.state.new_quantity-1})
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
                                    <td><i className='fa fa-minus-circle' onClick={this.decrement}></i><>&nbsp;&nbsp;</>{this.state.quantity}<>&nbsp;&nbsp;</><i className='fa fa-plus-circle' onClick={this.increment}></i></td>
                                    <td>{this.state.quantity*this.state.price}</td>
                                </tr>
                                <tr>
                                    <td>{this.state.name1}</td>
                                    <td><img src={this.state.image1} height='100px'alt="Buy" /></td>
                                    <td>{this.state.price1}</td>
                                    <td><i className='fa fa-minus-square' onClick={this.decrement1}></i><>&nbsp;&nbsp;</>{this.state.quantity1}<>&nbsp;&nbsp;</><i className='fa fa-plus-square' onClick={this.increment1}></i></td>
                                    <td>{this.state.quantity1*this.state.price1}</td>
                                </tr>
                                <tr>
                                    <td>{this.state.new_name}</td>
                                    <td><img src={this.state.new_image} height='100px'alt="Buy" /></td>
                                    <td>{this.state.new_price}</td>
                                    <td><i className='fa fa-caret-square-o-left' onClick={this.new_decrement}></i><>&nbsp;&nbsp;</>{this.state.new_quantity}<>&nbsp;&nbsp;</><i className='fa fa-caret-square-o-right' onClick={this.new_increment}></i></td>
                                    <td>{this.state.new_quantity*this.state.new_price}</td>
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