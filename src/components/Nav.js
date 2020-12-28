import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <p className="portal-name">Usos Portal</p>
            <Link to = '/home'><button className="log log-in">Zaloguj się</button></Link>
        </nav>
    );
};

export default Nav;