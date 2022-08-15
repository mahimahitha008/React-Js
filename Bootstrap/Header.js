import './Assets/bootstrap.css'
let Header=()=>{

    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#" className="navbar-brand">Bootstrap</a>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-list">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-list">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-list">
                    <a className="nav-link" href="#">Services</a>
                </li>
            </ul>
        </div>
    </nav>
}
export default Header;