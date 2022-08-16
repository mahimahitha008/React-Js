import React from 'react'
class FileD extends React.Component{
    render(){
        return <div>
            <h1>File D</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <pre>Product:{this.props.Product}</pre>
            <pre>Model:{this.props.Model}</pre>
            <pre>Price:{this.props.Price}</pre>
            
        </div>
    }
}
export default FileD