import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>

            <div>
                <nav className='nav-menu'>
                    <CustomLink to="/" className="navbar-item">Home</CustomLink>
                    <CustomLink to="/reviews" className="navbar-item">Reviews</CustomLink>
                    <CustomLink to="/dashBoard" className="navbar-item">DashBoard</CustomLink>
                    <CustomLink to="/blogs" className="navbar-item">Blogs</CustomLink>
                    <CustomLink to="/about" className="navbar-item">About</CustomLink>

                </nav>

            </div>
        </div>
    );
};

export default Header;