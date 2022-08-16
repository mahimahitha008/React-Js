import CompB from "./CompB"
import React from "react"
class CompA extends React.Component{
    plant="Banyan tree"
    scientific_Name="Ficus religiosa"
    age="85 years"
    render(){
        return <div>
            <h1>Component A</h1>
            <CompB Plant_Name={this.plant} Scientific_Name={this.scientific_Name} Age={this.age}/>
        </div>
    }
}
export default CompA