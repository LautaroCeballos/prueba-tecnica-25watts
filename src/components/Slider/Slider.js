import React, { useState } from 'react'
import { Link } from 'react-scroll'
import BannerAnim, { Element, Arrow } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'

import './Slider.css'

export default function Slider({items}) {
    const [slides, setSlides] = useState(items)

    const BgElement = Element.BgElement;

    return <>
        <BannerAnim prefixCls="slider-home" type="grid" arrow={false} thumb={false} autoPlay>
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