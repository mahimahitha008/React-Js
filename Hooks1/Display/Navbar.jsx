import React from 'react'
let Navbar=()=>{
    return <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <a href='./home' className='navbar-brand'>Hooks Example</a>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-item'><a className='nav-link' href='./home'></a>Home</li>
                <li className='nav-item'><a className='nav-link' href='./about'></a>About</li>
                <li className='nav-item'><a className='nav-link' href='./contact'></a>Contact</li>
            </ul>

        </div>
    </nav>
}
export default Navbar;