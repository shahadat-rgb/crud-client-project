import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/' className='nav-Link'>Add Product</Link>
                <Link to='/manageProduct' className='nav-Link'>Manage Product</Link>

            </nav>
        </div>
    );
};

export default Navbar;