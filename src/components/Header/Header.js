import React from 'react'
import "./Header.css"
import Logo from '../../assets/logo.svg'

export default function Header(){
    return <header>
        <a className="logotipo" href="./home"><img src={Logo} alt="25watts Logotipo"/></a>
        <nav>
            <ul>
                <li><a className="active" href="./home">Home</a></li>
                <li><a href="./home">About</a></li>
                <li><a href="./home">Product</a></li>
                <li><a href="./home">Contact</a></li>
            </ul>
        </nav>
    </header>
}