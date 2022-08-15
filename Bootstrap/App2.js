import '../node_modules/bootstrap/dist/css/bootstrap.css'
import react from 'react'
class App extends react.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href='#' className='navbar-brand'>Bootstrap Model</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'>
                        <a href='#' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-list'>
                        <a href='#' className='nav-link'>About</a>
                    </li>
                    <li className='nav-list'>
                        <a href='#' className='nav-link'>Services</a>
                    </li>
                    <li className='nav-list'>
                        <a href='#' className='nav-link'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}
export default App;