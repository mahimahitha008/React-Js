import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
let App=()=>{
    return <div>
        <h1>App Page</h1>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/About' component={About}/>
                <Route path='/services' component={Services}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </Router>
    </div>
}
export default App;