import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../image/logo.png"
import {FaShoppingCart} from "react-icons/fa"
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return(
        <>
        <section id='header' className='flex items-center justify-between bg-bgnavbar'>
            <NavLink to="/"><img src={Logo} alt="Logo Toko Pertama" /></NavLink>

            <div>
                <ul id="navbar" className="flex items-center justify-center font-semibold text-xl">
                    <li className='hover:text-cyan-800 relative'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:text-cyan-800 relative'><NavLink to="/collection">Collection</NavLink></li>
                    <li className='hover:text-cyan-800 relative'><NavLink to="/about">About</NavLink></li>
                    <li className='hover:text-cyan-800 relative'><NavLink to="/contact">Contact</NavLink></li>
                    <li className='hover:text-cyan-800 relative'><NavLink to="/cart"><FaShoppingCart/></NavLink></li>
                    <li className='hover:text-cyan-800 relative'><NavLink to="/profile"><CgProfile /></NavLink></li>
                </ul>
            </div>
        </section>
        </>
    );
};
