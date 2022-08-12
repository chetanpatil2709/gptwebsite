import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu_items = () => (
        <>
            <a href="#home" > Home</a>
            <a href="#whatgpt">What is GPT?</a>
            <a href="#possibility">Open AI</a>
            <a href="#features">Case Studies</a>
            <a href="#blog">Library</a>
        </>
    )
    return (
        <div className='navbar'>
            <div className='navbar_menu'>
                <div className='d-flex ps-sm-3 ps-md-5 py-2'>
                    <a href="#" className='logo'>GPT</a>
                    <div className='navbar_list'>
                        <Menu_items />
                    </div>
                </div>
                <div className='d-flex pe-sm-3 pe-md-5 py-2'>
                    <div className='navbar_sign'>
                        <a href="/" className='sign_in_btn'>Sign in</a>
                        <button className='sign_up_btn'>Sign Up</button>
                    </div>
                    <div className='navbar_menu_container'>
                        {
                            toggleMenu ? <AiOutlineClose className='hamburger_menu' onClick={() => setToggleMenu(false)} /> :
                                <RiMenu3Line className='hamburger_menu' onClick={() => setToggleMenu(true)} />
                        }
                        {
                            toggleMenu && (
                                <div className='navbar_menu_container_content  scale_up_center'>
                                    <div className='navbar_menu_container_links'>

                                        <Menu_items />

                                        <div className='navbar_sign'>
                                            <a href="/" className='sign_in_btn'>Sign in</a>
                                            <button className='sign_up_btn'>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
