import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';


const Navbar: React.FC = () => {
    return <div className="navbar">
        <nav>
            <Link to="/create">Stwórz grę</Link>
            <Link to="/">Dołącz do gry</Link>
            <Link to="/listOfBloks">Lista bloków</Link>
            <Link to="/instruction">Instrukcja</Link>
        </nav>
    </div>
}

export default Navbar;