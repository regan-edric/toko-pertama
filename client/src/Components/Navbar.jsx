import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../image/logo.png"
import {FaShoppingCart} from "react-icons/fa"

export default function Navbar() {
    return(
        <>
        <section id='header' className='flex items-center justify-between bg-bgnavbar'>
            <NavLink><img src={Logo} alt="Logo Toko Pertama" /></NavLink>

            <div>
                <ul id="navbar" className="flex items-center justify-center font-semibold text-base">
                    <li className='hover:text-cyan-800'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:text-cyan-800'><NavLink>Collection</NavLink></li>
                    <li className='hover:text-cyan-800'><NavLink>About</NavLink></li>
                    <li className='hover:text-cyan-800'><NavLink>Contact</NavLink></li>
                    <li className='hover:text-cyan-800'><NavLink><FaShoppingCart/></NavLink></li>
                </ul>
            </div>
        </section>
        </>
    );
};
