import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Home from './Elements/Home'
import About from './Elements/About'
import Services from './Elements/Services'
import Contact from './Elements/Contact'
import User from './Elements/User'
import Button from './Elements/Button'
class App extends React.Component{
    render(){
    return <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/button' element={<Button/>}/>
            </Routes>
        </Router>
    </div>
    }
}
export default App;