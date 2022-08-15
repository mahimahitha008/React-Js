import react from 'react'
class Message extends react.Component{
    Item="Car"
    company="Kia"
    color="Maroon"
    render(){
        return <div>
            <h1>Vehicle:{this.Item}</h1>
            <h1>Model:{this.company}</h1>
            <h1>Color:{this.color}</h1>
        </div>
    }
}
export default Message