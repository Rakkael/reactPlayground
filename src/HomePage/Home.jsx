import React from "react";
import './Home.css'

function FacebookEffect() {
    return (
        <Navbar>
            <NavItem icon="😊"></NavItem>
            <NavItem icon="😊"></NavItem>
            <NavItem icon="😊"></NavItem> 
        </Navbar>
    )
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                { props.children }
            </ul>
        </nav>
    )
}

function NavItem(props) {
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">
                { props.icon }
            </a>
        </li>
    )
}

export default FacebookEffect;