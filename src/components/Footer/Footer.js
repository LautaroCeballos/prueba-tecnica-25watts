import React from 'react'
import './Footer.css'
import logotipo from 'assets/logo.svg'

export default function Footer(){
    return (
        <footer className="grid">
            <span>2021 &copy; All rights reserved.</span>
            <img src={logotipo} alt="Logotipo 25watts"/>
        </footer>
    )
}