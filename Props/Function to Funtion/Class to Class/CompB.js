import one from 'react'
class CompB extends one.Component{
    render(){
        return <div>
            <h1>Component B</h1>
            <h5>{JSON.stringify(this.props)}</h5>
        </div>
    }
}
export default CompB;