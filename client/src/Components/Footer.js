import React from 'react';
import './footerStyle.css';
import { Link } from 'react-router-dom';
const Footer = () => (
    <div className="footer">
        Chiropractic Wellness by Juliana Tyler- © Copyright 2019 All Rights Reserved. 
        <button className="login"><Link className="login" to={`/PBlog`}>Login</Link></button>
    </div>

)

export default Footer;
