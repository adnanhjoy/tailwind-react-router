import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <nav className=' bg-black'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 text-white md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>
            <ul className={`md:flex justify-center absolute bg-black w-full duration-200 ease-in md:static py-5 text-white ${open ? 'top-6' : 'top-[-200px]'}`}>
                <li><NavLink className='ml-5' to="/home">Home</NavLink></li>
                <li><NavLink className='ml-5' to="/foods">Foods</NavLink></li>
                <li><NavLink className='ml-5' to="/fishs">Fishs</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;