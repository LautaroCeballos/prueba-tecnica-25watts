import React from 'react';
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
    } else if(!form.email.trim()){
        errors.email = 'Email required'
    } else if(!regexEmail.test(form.email.trim())){
        errors.email = 'Invalid email'
    } else if(!form.phone.trim()){
        errors.phone = 'Phone required'
    } else if(!regexPhone.test(form.phone.trim())){
        errors.phone = 'Invalid phone'
    } else if(!form.message.trim()){
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
                        placeholder={errors.name ? errors.name : "Name"} 
                        onBlur={handleBlur} 
                        className={ errors.name && 'invalid-input'}
                        onChange={handleChange} 
                        value={form.name} 
                        required
                    />
                    <input 
                        name="email" 
                        type="email" 
                        placeholder={errors.email ? errors.email : "Email"} 
                        onBlur={handleBlur} 
                        className={ errors.email && 'invalid-input'}
                        onChange={handleChange} 
                        value={form.email} 
                        required
                    />
                    <input 
                        name="phone" 
                        type="tel" 
                        placeholder={errors.phone ? errors.phone : "Phone"} 
                        onBlur={handleBlur} 
                        className={ errors.phone && 'invalid-input'}
                        onChange={handleChange} 
                        value={form.phone} 
                        required
                    />
                    <textarea 
                        name="message" 
                        placeholder={errors.message ? errors.message : "Message"} 
                        onBlur={handleBlur} 
                        className={ errors.message && 'invalid-input'}
                        onChange={handleChange} 
                        value={form.message} 
                        required
                    />
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