import CompB from "./CompB"
import one from "react"
class x extends one.Component{
    product="Samsung"
    Price=95000
    Model="J7 Max"
    render(){
        return <div>
            <h1>Component A</h1>
            <CompB Phone={this.product} Price={this.Price} Model={this.Model}/>
        </div>
    }
}
export default x