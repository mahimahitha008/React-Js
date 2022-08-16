import FileA from './Prop_Drilling/FileA'
import Nav from './Nav'
import React from 'react'
class App extends React.Component{
  render(){
    return <div>
      <Nav/>
      <h1>App Component</h1>
      <FileA/>
    </div>
  }
}
export default App