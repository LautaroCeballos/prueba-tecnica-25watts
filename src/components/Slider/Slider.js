import React from 'react'
import { Link } from 'react-scroll'
import BannerAnim, { Element, Arrow } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'

import './Slider.css'

import slideImg1 from 'assets/slider-img/slide1.png'
import slideImg2 from 'assets/slider-img/slide2.png'
import slideImg3 from 'assets/slider-img/slide3.png'

export default function Slider() {
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

    const BgElement = Element.BgElement;

    return <>
        <BannerAnim prefixCls="slider-home" type="grid" arrow="false" thumb="false" autoPlay>
            {
                slides.map( (slide, index) => {
                    return <Element key={index}>
                        <BgElement
                            key={`bg${index}`}
                            className="bg"
                            style={{
                                backgroundImage: `url("${slide.img}")`,
                            }}
                        />
                        <div className="slider-container grid">
                            <div className="slider-content">
                                <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                                    <h1>{slide.title}</h1>
                                </TweenOne>
                                <TweenOne animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                                    <p>{slide.subtitle}</p>
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={500}
                                        className="btn"
                                    >
                                        Read more
                                    </Link>
                                </TweenOne>
                            </div>
                        </div>
                    </Element>
                })
            }
            <Arrow arrowType="prev" key="prev"/>
            <Arrow arrowType="next" key="next"/>
        </BannerAnim>

    </>
}