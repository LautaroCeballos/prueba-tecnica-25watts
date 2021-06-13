import React from 'react';
import './About.css'
import 'assets/icons/americas.svg'

import americasIcon from 'assets/icons/americas.svg'
import uploadIcon from 'assets/icons/upload.svg'
import headsetIcon from 'assets/icons/headset.svg'
import friendsIcon from 'assets/icons/friends.svg'

export default function About(){
    const aboutIcons = [
        { src: americasIcon, title: 'Stet clita kasd gubergren' },
        { src: uploadIcon, title: 'At vero eos et accusam' },
        { src: headsetIcon, title: 'Sed ut perspiciatis unde' },
        { src: friendsIcon, title: 'Lorem ipsum dolor sit amet' }
    ]    

    return <section className="about">
        <ul className="grid">{
            aboutIcons.map(icon => {
                return (
                    <li key={icon.src}>
                        <img src={icon.src} alt={icon.alt}/>
                        <h4>{icon.title}</h4>
                    </li>
                )
            })            
        }</ul>

        <article id="about">
            <h2 className="title">
                We Help Businesses <br/> 
                <span className="orange-text">
                    Grow and Innovate
                </span>
            </h2>

            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
        </article>
    </section>
}