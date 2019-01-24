import React from 'react';
import Doctor from './Doctor';
import AboutOffice from './AboutOffice';
import './aboutUsStyles.css';

const AboutUs = () => (
    <div className="aboutUsPage">
       <Doctor/>
       <AboutOffice/> 
    </div>
)

export default AboutUs; 