import React from 'react'
import Pass from './pass'
class Student extends React.Component{
    name="Abhijeeth"
    marks_Percentage=96
    performance={
        Grade:"A+",
        courses:["Hindi","English","Maths","Science","Social"]
    }
    render(){
        return <div>
            <p>Student Page</p>
            <Pass Name={this.name} Marks_Percentage={this.marks_Percentage} Performance={this.performance}/>
        </div>
    }
}
export default Student;