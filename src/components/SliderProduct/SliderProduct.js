import React, { useState } from 'react'
import './SliderProduct.css'

import ArrowLeft from 'assets/arrows/left.svg'
import ArrowRight from 'assets/arrows/right.svg'

export default function SliderProducts({items}) {
    const [slides, setSlides] = useState(items)
    const [activeSlide, setActiveSlide] = useState(1)

    const nextSlide = () => {
        setActiveSlide(activeSlide + 1)
        if(activeSlide === slides.length){
            setActiveSlide(1)
        }
    }
    const prevSlide = () => {
        setActiveSlide(activeSlide - 1)
        if(activeSlide === 1){
            setActiveSlide(slides.length)
        }
    }

    return (
        <div className="slider-prod">
            {
                slides.map((slide, index) => {
                    let count = index + 1
                    return (
                        <input type="radio" name="m-slides" id={`m-radio${count}`} checked={ activeSlide === count } key={index}/>
                    )
                })
            }
            
            <ul className="m-slides">
                {
                    slides.map((slide, index) => {
                        return (
                            <li key={index}>
                                <h4>{slide.subtitle}</h4>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="arrows">
                <button className="arrow a-left" onClick={prevSlide}>
                    <img src={ArrowLeft} alt="Flechas de interaccion" />
                </button>
                <button className="arrow a-right" onClick={nextSlide}>
                    <img src={ArrowRight} alt="Flechas de interaccion" />
                </button>
            </div>
        </div>
    )
}