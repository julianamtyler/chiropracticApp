import React from 'react'; 
import './servicesStyle.css';
import Intro from './Intro';
import Service from './Service';


const Services = () => (
<div className= "servicePage">
{/* <div className="pageTitle">Serivces We offer in our office!</div>  */}
{/* <img src={"spine.jpg"} alt='chiro'/> */}
<Intro/>
<Service/>
</div>
)

export default Services; 