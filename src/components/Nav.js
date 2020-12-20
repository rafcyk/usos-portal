import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Nav = () => {
    return (
        <Router>
        <nav className='nav'>
            <p className="portal-name">Usos Portal</p>
            <Link to = '/home'><button className="log log-in">Zaloguj się</button></Link>
        </nav>
        </Router>
    );
};

export default Nav;