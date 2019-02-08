import React from 'react';
import ContactInfo from './ContactInfo';
import './contactStyles.css';

const ContactUs = () => (
    <div className="contactPage">
    <div>
        <img className="pic" src= {"./assets/front_desk.jpg"} alt='front desk '/>
    </div>
    <ContactInfo />

    </div>

)

export default ContactUs; 