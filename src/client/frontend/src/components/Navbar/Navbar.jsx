import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Navbar.css';
import SearchBar from "../SearchBar/SearchBar";

export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    return (
        <nav>
            <Logo></Logo>
            <SearchBar></SearchBar>
            <div className="menu" onClick={() => {
                setmenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/meals">Meals</NavLink>
                </li>
                <li>
                    <NavLink to="/share">Share</NavLink>
                </li>
            </ul>
        </nav>
    );
};