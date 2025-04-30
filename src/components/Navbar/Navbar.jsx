import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'

function Navbar() {
return (
    <header>
        <nav className="nav-bar">
        <img className="logo-nav" src={logo} alt="Logo" />
        <ul className="nav-bar-items">
            <Link to= "/">
            <li>Inicio</li>
            </Link>
            <Link to="/categoria/Huggies">
            <li>Huggies</li>
            </Link>
            <Link to="/categoria/Pampers" >
            <li>Pampers</li>
            </Link>
            <Link to="/categoria/Babysec">
            <li>Babysec</li>
            </Link>
        </ul>
        <Link to ="/carrito">
        <CartWidget />
        </Link>
        </nav>
    </header>
    )
}
export default Navbar
