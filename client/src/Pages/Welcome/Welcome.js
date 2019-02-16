import React from 'react'; 
import './welcomeStyles.css';
import SlideShow from './SlideShow';
import Intro from './Intro';



const Welcome = () => (
<div className="welcomePage">
    <Intro/>  
    <SlideShow/>
</div>
)

export default Welcome; 