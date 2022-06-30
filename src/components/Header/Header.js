import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='mt-lg-3'>
                <div onClick={() => setOpen(!open)} className={`menu-icon d-lg-none `}>
                    {
                        open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>
                    }

                </div>
                <div className={`d-lg-flex  justify-content-center align-items-center ${open ? 'nav-anime-open' : 'nav-anime-close'}  `}>
                    <CustomLink to="/" className="navbar-item">Home</CustomLink>
                    <CustomLink to="/reviews" className="navbar-item">Reviews</CustomLink>
                    <CustomLink to="/dashBoard" className="navbar-item">DashBoard</CustomLink>
                    <CustomLink to="/blogs" className="navbar-item">Blogs</CustomLink>
                    <CustomLink to="/about" className="navbar-item">About</CustomLink>
                </div>

            </nav>

        </div>
    );
};

export default Header;