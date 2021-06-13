import React from 'react'
import './Home.css'
import Slider from 'components/Slider/Slider'

import slideImg1 from 'assets/slider-img/slide1.png'
import slideImg2 from 'assets/slider-img/slide2.png'
import slideImg3 from 'assets/slider-img/slide3.png'

export default function Home(){
    const slides = [
        {
            title: 'Sed ut perspiciatis unde omnis iste natus',
            subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
            img: slideImg1,
        },{
            title: 'Sed ut perspiciatis unde omnis iste natus',
            subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
            img: slideImg2
        },{
            title: 'Sed ut perspiciatis unde omnis iste natus',
            subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
            img: slideImg3
        }
    ]

    return <>
        <section id="home" className="Home">
            <Slider items={slides}/>
        </section>
    </>
}