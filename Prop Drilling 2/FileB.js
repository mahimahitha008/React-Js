import FileC from './FileC'
import React from 'react'
class FileB extends React.Component{
    item="Ice-Cream"
    flavour="Vennela"
    price=35
    render(){
        return <div>
            <h1>File B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <pre>Product_Color:{this.props.Product_Color}</pre>
            <pre>Product:{this.props.Product}</pre>
            <pre>Cost:{this.props.Price}</pre>
            <FileC Item={this.item} Flavour={this.flavour} Cost={this.price}/>
        </div>
    }
}
export default FileB