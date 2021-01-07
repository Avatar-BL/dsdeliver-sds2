import './stales.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';

function NavBar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default NavBar;