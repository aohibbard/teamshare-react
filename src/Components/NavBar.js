import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <NavLink to="/projects">
                Projects
            </NavLink>
        </div>
    )
}

export default NavBar;