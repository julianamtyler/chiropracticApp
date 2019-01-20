import React from 'react';
import Doctor from './Doctor';
import AboutOffice from './AboutOffice';
import './aboutUsStyle.css';

const AboutUs = () => (
    <div className="aboutUs">
       <Doctor/>
       <AboutOffice/> 
    </div>
)

export default AboutUs; 