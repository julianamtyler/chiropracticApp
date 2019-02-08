import React from 'react'; 
import './welcomeStyles.css';
import SlideShow from './SlideShow';
import Intro from './Intro';



const Welcome = () => (
<div className="welcomePage">
    {/* <img className="logo" src ={'./assets/chiro_logo.png'} alt='logo'/> */}
<Intro/>  
<SlideShow/>
</div>
)

export default Welcome; 