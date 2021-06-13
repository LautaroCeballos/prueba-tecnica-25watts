import React, { useState } from 'react';
import './Contact.css'
import image from 'assets/backgrounds/contact-background.png'
import { useForm } from 'hooks/useForm';

const initialForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    let regexPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
    let regexMessage = /^.{1,255}$/

    if(!form.name.trim()){
        errors.name = 'Name required'
    } else if(!regexName.test(form.name.trim())){
        errors.name = 'Invalid name'
    }

    if(!form.email.trim()){
        errors.email = 'Email required'
    } else if(!regexEmail.test(form.email.trim())){
        errors.email = 'Invalid email'
    }

    if(!form.phone.trim()){
        errors.phone = 'Phone required'
    } else if(!regexPhone.test(form.phone.trim())){
        errors.phone = 'Invalid phone'
    }

    if(!form.message.trim()){
        errors.message = 'Message required'
    } else if(!regexMessage.test(form.message.trim())){
        errors.message = 'Invalid message'
    }

    return errors
}

export default function Contact(){
    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)

    return (
        <section id="contact" className="contact set-bg-image grid">
            <article className="form-contact">
                <h2 className="title">Get in touch <br/> <span className="orange-text">We are hiring!</span></h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Name" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.name} 
                        required
                    />
                    { errors.name && <p>{errors.name}</p>}
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.email} 
                        required
                    />
                    { errors.email && <p>{errors.email}</p>}
                    <input 
                        name="phone" 
                        type="tel" 
                        placeholder="Phone" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.phone} 
                        required
                    />
                    { errors.phone && <p>{errors.phone}</p>}
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.message} 
                        required
                    />
                    { errors.message && <p>{errors.message}</p>}
                    <input 
                        type="submit" 
                        value="Send" 
                        className="btn"
                    />
                </form>
            </article>
            <img src={image} alt="Globos aerostaticos"/>
        </section>
    )
}