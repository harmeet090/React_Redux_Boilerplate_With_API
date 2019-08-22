import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Routes from '../../routes';

const Header = () => (
    <div>
        <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/counter" activeClassName="active">Counter</NavLink></li>
                <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
            </ul>
        </nav>
        {Routes}
    </div>
)

export default Header;