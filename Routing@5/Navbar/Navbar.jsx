import React from 'react'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-dark bg-success navbar-expand-lg'>
            <Link to='/home' className='navbar-brand'>Routing Example</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link to='./home' className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to='./about' className='nav-link'>About</Link></li>
                    <li className='nav-item'><Link to='./services' className='nav-link'>Services</Link></li>
                    <li className='nav-item'><Link to='./contact' className='nav-link'>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    }
}
export default Navbar;
