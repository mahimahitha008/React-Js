import React from 'react'
class Pass extends React.Component{
    render(){
        return <div>
            <p>Pass Page</p>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className='row'>
             <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header bg-info text-white'>
                        <h3>Name:{this.props.Name}</h3>
                    </div>
                    <div className='card-body'>
                        <ul className='list-group'>
                            <li className='list-group-item'>Name:{this.props.Name}</li>
                            <li className='list-group-item'>Marks_Percentage:{this.props.Marks_Percentage}</li>
                            <li className='list-group-item'>Grade:{this.props.Performance.Grade}</li>
                            <li className='list-group-item'>courses:{this.props.Performance.courses}</li>
                            <li className='list-group-item'>courses:{this.props.Performance.courses[0]}</li>
                            <li className='list-group-item'>courses:{this.props.Performance.courses[1]}</li>
                            <li className='list-group-item'>courses:{this.props.Performance.courses[2]}</li>
                            <li className='list-group-item'>courses:{this.props.Performance.courses[3]}</li>
                            <li className='list-group-item'>courses:{this.props.Performance.courses[4]}</li>
                        </ul>
                    </div>
                </div>
             </div>
            </div>
        </div>
    }
}
export default Pass;