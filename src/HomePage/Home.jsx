import React from "react";
import './Home.css'
import { ReactComponent as AddIcon } from '../assets/icons/add.svg'
import { ReactComponent as MarkFill } from '../assets/icons/markfill.svg'
import { ReactComponent as Notice } from '../assets/icons/notice.svg'


function FacebookEffect() {
    return (
        <Navbar>
            <NavItem icon={<AddIcon />}></NavItem>
            <NavItem icon={<MarkFill />}></NavItem>
            <NavItem icon={<Notice />}></NavItem> 
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