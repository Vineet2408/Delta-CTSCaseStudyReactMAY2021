import React from 'react'
import {Link} from 'react-router-dom';

const MenuNavigation = (props) => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/updateProfile">Update Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/applyLoan">Apply Loan</Link></li>
        </ul>
    )
}



export default MenuNavigation;
