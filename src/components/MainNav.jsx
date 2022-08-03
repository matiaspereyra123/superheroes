import React from 'react';
import {Link, NavLink} from "react-router-dom";

function MainNav() {
    return (
        <nav>
            <ul className='nav nav-tabs pt-2'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/dc'>DC Comics</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/marvel'>Marvel Comics</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/login'>Login</NavLink>
                </li>
            </ul>

        </nav>

    )
}

export default MainNav