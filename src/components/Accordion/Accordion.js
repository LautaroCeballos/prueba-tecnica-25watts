import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({servData} = []) {
    const [services, setServices] = useState(servData)
   
    return <div className="accordion">
        {
            services.map((service, index)  =>{
                let count = index + 1;
                return <div key={count}>
                    <input type="radio" name="serv-slides" id={`serv-radio${count}`}/>

                    <article className={`service serv${count}`}>
                        <label htmlFor={`serv-radio${count}`} id={`serv-radioSelect${count}`}>
                            { service.title }
                            <div className="arrow-ico"></div>
                        </label>
                            
                        <div className="serv-content">
                            <p> { service.content } </p>
                        </div>
                    </article>
                </div>
            })
        }

    </div>

}