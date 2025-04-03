import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logo from '../../assets/logo.PNG';
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
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
        <CartWidget />
        </nav>
    </header>
    )
}
export default Navbar
