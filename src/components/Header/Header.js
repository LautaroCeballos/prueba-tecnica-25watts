import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Header.css"
import Logo from 'assets/logo.svg'

export default function Header(){
    const [ inHome, setInHome ] = useState(true)

    return <header className={`grid ${ !inHome ? 'bg-orange' : null}`}>
        <Link 
            className="logotipo"
            activeClass="none" 
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive = { () => setInHome(true) }
            onSetInactive = { () => setInHome(false) }
        >
            <img src={Logo} alt="25watts Logotipo"/>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link 
                        activeClass="active" 
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="product"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        Product
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}