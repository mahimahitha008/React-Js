import React from 'react'
class CompB extends React.Component{
    render(){
        return <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <pre>{(this.props.Product)}</pre>
            <pre>{JSON.stringify(this.props.Product)}</pre>
            <pre>{(this.props.Color)}</pre>
            <pre>{JSON.stringify(this.props.Color)}</pre>

        </div>
    }
}
export default CompB