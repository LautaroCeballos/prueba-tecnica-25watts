import React from 'react'
import SliderProduct from 'components/SliderProduct/SliderProduct';
import './Product.css'

export default function Product(){
    const items = [
        {
            title: 'Nemo Enim',
            subtitle: 'Sed ut perspiciatis',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },{
            title: 'Perspiciatis',
            subtitle: 'Natus error sit voluptatem',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },{
            title: 'Dolore La',
            subtitle: 'Omnis iste natus error sit',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        }
    ]

    return( 
        <section id="product" className="product set-bg-image grid">
            <article className="background">
                <SliderProduct items={items} />
            </article>
        </section>
    )
}