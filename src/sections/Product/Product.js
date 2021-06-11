import React from 'react'
import './Product.css'

import ArrowLeft from 'assets/arrows/left.svg'
import ArrowRight from 'assets/arrows/right.svg'

export default function Product(){
    return( 
        <section className="product">
            <article className="background">
                <div className="slider-prod">
                    <ul>
                        <li>
                            <h4>Sed ut perspiciatis</h4>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </li>
                    </ul>
                    <div className="arrows">
                        <button className="arrow a-left">
                            <img src={ArrowLeft} alt="Flechas de interaccion"/>
                        </button>
                        <button className="arrow a-right">
                            <img src={ArrowRight} alt="Flechas de interaccion"/>
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}