import React from 'react'
import {useState} from 'react'
let Product=()=>{
    let [a,b]=useState({
        name:"Teddy Bear",
        image:'https://cdn1.bigcommerce.com/server1900/dee9d/images/stencil/700x900/products/891/9724/6ft_softest_Life_Size_Plush_red_teddy_bear_Riley_Chubs_by_Giant_Teddy__14974.1495563690.JPG?c=2',
        price:4999,
        units:1
    })
    let increase=()=>{
        b({ ...a,units:a.units+1})
    }
    let decrease=()=>{
        b({ ...a,units:a.units-1})
    }
    return <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <table className='table table-hover'>
                        <thead>
                            <tr className='bg-success text-white'>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Units</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{a.name}</td>
                                <td><img src={a.image} height='100px' alt='/'/></td>
                                <td>{a.price}</td>
                                <td>
                                    <button onClick={decrease}>-</button><>&nbsp;&nbsp;</>
                                    <span>{a.units}</span><>&nbsp;&nbsp;</>
                                    <button onClick={increase}>-</button>
                                    </td>
                                <td>{a.units * a.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}
export default Product