import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/login">Iniciar Sesión</Link>
                <Link to="">Registrarse</Link>
                <Link to="Home">Home</Link>
            </nav>
        </header>
    )

}

export default Header