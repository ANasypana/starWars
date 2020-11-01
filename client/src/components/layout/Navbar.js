import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


export const Navbar = () => {

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fab fa-old-republic'></i> {'  '}
                    Star Wars
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/planets'>
                        <i className='fas fa-globe-asia'></i>{'  '}
                        Our Planets
                    </Link>
                </li>
            </ul>
        </nav>
    )
};
