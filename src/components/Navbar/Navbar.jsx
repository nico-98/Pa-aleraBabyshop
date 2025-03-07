import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logo from '../../assets/logo.PNG';

function Navbar() {
return (
    <header>
        <nav className="nav-bar">
        <img className="logo-nav" src={logo} alt="Logo" />
        <ul className="nav-bar-items">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
        <CartWidget />
        </nav>
    </header>
    )
}
export default Navbar
