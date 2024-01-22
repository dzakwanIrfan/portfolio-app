'use client'

import React, { useState, useEffect } from 'react';
import DzakwanLogo from "./logo";
import NavLink from "./nav-links";
import { Menu } from 'iconoir-react';

export default function Navbar(){
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuActive && !event.target.closest('.hamburger') && !event.target.closest('#myLinks')) {
            setMenuActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuActive]);

    return(
        <header>
            <DzakwanLogo />
            <NavLink />
            <div id="myLinks" className={menuActive ? 'active' : ''}>
                <a href="/#home">HOME</a>
                <a href="/#contact">CONTACT</a>
                <a href="/#project">PROJECTS</a>
                <a href="/extras">EXTRAS</a>
                <a href="/">ARTICLES</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <Menu width={24} height={24} />
            </div>
        </header>
    );
}