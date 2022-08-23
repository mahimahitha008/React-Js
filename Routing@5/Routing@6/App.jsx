import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
class App extends React.Component{
    render(){
        return <div>
            <Router>
             <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
            </Router>
        </div>
    }
}
export default App;