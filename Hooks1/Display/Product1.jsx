import React from 'react'
import {useState} from 'react'
let Product1=()=>{
    let [p,q]=useState({
        name1:"Dizo Buds",
        image1:'https://dablew.pk/file/2022/07/Buy-Dizo-Buds-Z-Earbuds-in-Pakistan-at-Dab-Lew-Tech-11-768x768.jpg',
        price1:1799,
        units1:1
    })
    let update1=()=>{
        q({ ...p,units1:p.units1+1})
    }
    let delete1=()=>{
        q({...p,units1:p.units1-1})
    }
let [r,s]=useState({
        name2:"Sony Headset",
        image2:'https://th.bing.com/th/id/OIP.JQ74tCG4K7WSXXvO-vVoegHaJZ?pid=ImgDet&rs=1',
        price2:39671,
        units2:1
})
let update2=()=>{
    s({ ...r,units2:r.units2+1})
}
let delete2=()=>{
    s({...r,units2:r.units2-1})
}
    let [t,u]=useState({
        name3:"OnePlus Wireless Bluetooth",
        image3:'https://th.bing.com/th/id/OIP.zvQqa7-X_s_RmDf-z5uw8AHaHF?w=217&h=208&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        price3:1999,
        units3:1
})

let update3=()=>{
    u({ ...t,units3:t.units3+1})
}
let delete3=()=>{
    u({...t,units3:t.units3-1})
}
    return <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <table className="table table-hover">
                        <thead>
                            <tr className='bg-info text-white'>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Units</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{p.name1}</td>
                                <td><img src={p.image1} height='100px' alt='/Buy'/></td>
                                <td>{p.price1}</td>
                                <td><i className='fa fa-minus-circle' onClick={delete1}></i><>&nbsp;&nbsp;</>{p.units1}<>&nbsp;&nbsp;</><i className='fa fa-plus-circle' onClick={update1}></i></td>
                                <td>{p.units1*p.price1}</td>
                            </tr>
                            <tr>
                                <td>{r.name2}</td>
                                <td><img src={r.image2} height='100px' alt='/Buy'/></td>
                                <td>{r.price2}</td>
                                <td><i className='fa fa-minus-square' onClick={delete2}></i><>&nbsp;&nbsp;</>{r.units2}<>&nbsp;&nbsp;</><i className='fa fa-plus-square' onClick={update2}></i></td>
                                <td>{r.units2*r.price2}</td>
                            </tr>
                            <tr>
                                <td>{t.name3}</td>
                                <td><img src={t.image3} height='100px' alt='/buy'/></td>
                                <td>{t.price3}</td>
                                <td><i className='fa fa-caret-square-o-left' onClick={delete3}></i><>&nbsp;&nbsp;</>{t.units3}<>&nbsp;&nbsp;</><i className='fa fa-caret-square-o-right' onClick={update3}></i></td>
                                <td>{t.units3*t.price3}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
}
export default Product1;