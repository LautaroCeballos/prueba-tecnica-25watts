import React from 'react';
import './Contact.css'
import image from 'assets/backgrounds/contact-background.png'

export default function Contact(){
    return (
        <section id="contact" className="contact set-bg-image grid">
            <article className="form-contact">
                <h2 className="title">Get in touch <br/> <span className="orange-text">We are hiring!</span></h2>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="tel" placeholder="Phone"/>
                    <textarea placeholder="Message"/>
                    <input type="submit" value="Send" className="btn"/>
                </form>
            </article>
            <img src={image} alt="Globos aerostaticos"/>
        </section>
    )
}