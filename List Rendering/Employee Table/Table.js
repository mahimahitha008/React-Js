import List from "./Data";
import React from 'react'
class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            List:List
        }
    }
    render(){
        return <div>
            <h1>Table Page</h1>
            <pre>{JSON.stringify(this.state.List)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead className="bg-info">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>E-mail</th>
                                    <th>Gender</th>
                                    <th>IP Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.List.map((emp,index)=>{
                                           return <tr key={index}>
                                            <td>{emp.id}</td>
                                            <td>{emp.first_name}</td>
                                            <td>{emp.last_name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.ip_address}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Table;