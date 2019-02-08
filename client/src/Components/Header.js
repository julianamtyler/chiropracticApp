import React from 'react';
import './header.css';

const Header = () => (
   <div>
       <img className="logo" src ={'./assets/chiro_logo.png'} alt='logo'/>
        <div className="contact">
             (678) 789 - 0070<br/>
             1234 Street Name <br/>
             Atlanta, GA 34345
        </div>
    </div>
)

export default Header;