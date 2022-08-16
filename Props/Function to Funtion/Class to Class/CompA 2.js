import CompB from './CompB';
import React from 'react'
class CompA extends React.Component{
    product='Icecream'
    flavour='Vennela'
    Price=30
    render(){
        return <div>
            <h1>Component A</h1>
            <CompB Item={this.product} Flavour={this.flavour} Cost={this.Price}/>
        </div>
    }
}
export default CompA;