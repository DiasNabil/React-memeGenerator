import React from 'react'
import './Header.css'
import logo from '../assets/Troll Face.svg'

export default function Header() {

    return (
        <nav>
            <div className="logo-title">
                <img className='logo' src={logo} alt="" />
                <h1>Meme Generator</h1>
            </div>
            <h3 className='credit'>By Roadman</h3>
        </nav>
    )
}