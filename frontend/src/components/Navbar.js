import "./components.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <nav>
        <div className="navigation">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/Education" className="nav-item">Education</Link>
            <Link to="/Projects" className="nav-item">Projects</Link>
            <Link to="/About" className="nav-item">About</Link>
            <Link to="/Contact" className="nav-item">Contact</Link>
        </div>
    </nav>
}
