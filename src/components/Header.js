import React from "react";

import { NavLink } from 'react-router-dom';

//this is Header component with header HTML tag
const Header = () => (
<header>
    <h1>Portfolio Site - Router example</h1> 
    
    <NavLink to="/" activeClassName="is-active" className="menu-item" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" className="menu-item" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" className="menu-item" activeClassName="is-active">Contact</NavLink>
    
    </header>
);

export default Header;