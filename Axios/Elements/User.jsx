import React from 'react'
import Axios from 'axios'
class User extends React.Component{
    constructor(x){
        super(x)
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        Axios.get('https://api.instantwebtools.net/v1/airlines')
        .then((response)=>{
            this.setState({user:response.data})
        })
        .catch(()=>{
        })
    }
    render(){
        return <div>
            <h1>User Component</h1>
            <div className='container'>
                <div className='row'>
                    <pre>{JSON.stringify(this.state.data)}</pre>
                    {
                        this.state.user.length > 0 ? <React.Fragment>
                            <div className='col-md-8'>
                                <table className='table table-hover'>
                                    <thead>
                                        <tr className='bg-success text-white'>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.user.map((user,index)=>{
                                                return <tr key={index}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.country}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </React.Fragment>: null
                    }
                </div>
            </div>
        </div>
    }
}
export default User