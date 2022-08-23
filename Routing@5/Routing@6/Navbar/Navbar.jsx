import {Link} from 'react-router-dom'
let Navbar =()=>{
    return <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
        <Link to='/home' className='navbar-brand'>Routing Example</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-item'><Link to='/home' className='nav-link'></Link>Home</li>
                <li className='nav-item'><Link to='/about' className='nav-link'></Link>About</li>
                <li className='nav-item'><Link to='/services' className='nav-link'></Link>Services</li>
                <li className='nav-item'><Link to='/contact' className='nav-link'></Link>Contact Us</li>
            </ul>
        </div>
    </nav>
}
export default Navbar;