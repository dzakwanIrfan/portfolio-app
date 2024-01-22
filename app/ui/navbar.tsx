'use client'

import React, { useState, useEffect } from 'react';
import DzakwanLogo from "./logo";
import NavLink from "./nav-links";
import { Menu } from 'iconoir-react';

export default function Navbar({i}: {i: string;}){
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
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
            <NavLink i={''} active={false} />
            <NavLink i='myLinks' active={menuActive} />
            <div className="hamburger" onClick={toggleMenu} style={{ zIndex: '999' }}>
                <Menu width={24} height={24} />
            </div>
        </header>
    );
}