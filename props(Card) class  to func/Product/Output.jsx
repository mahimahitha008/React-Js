import React from 'react'
let Output=(X)=>{
    return <div>
        <p>Output Page</p>
        <pre>{JSON.stringify(X)}</pre>
        <div className='row'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header bg-warning'>
                        <span>Product:{X.Product}</span>
                    </div>
                <div className='card-body bg-primary'>
                    <ul className='list-group bg-primary'></ul>
                    <li className='list-group-item'>Product={X.Product}</li>
                    <li className='list-group-item'>Color={X.Color}</li>
                    <li className='list-group-item'>Height={X.Height}</li>
                    <li className='list-group-item'>Stock={X.Stock}</li>
                    <li className='list-group-item'>Shades={X.Shades}</li>
                    <li className='list-group-item'>Shades1={X.Shades[0]}</li>
                    <li className='list-group-item'>Shades2={X.Shades[1]}</li>
                    <li className='list-group-item'>Shades3={X.Shades[2]}</li>
                </div>
                </div>
            </div>
        </div>
    </div>
}
export default Output