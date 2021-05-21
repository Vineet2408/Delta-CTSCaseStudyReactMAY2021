import React from 'react';
import MenuNavigation from './MenuNavigation';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top bg-dark text-white">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
            <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div className="collapse navbar-collapse" id="navigation-bar">
           <MenuNavigation></MenuNavigation>
        </div>
    </nav>
    )
}

export default Header;
