import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navigation from './Components/Navigation';
import './Components/navigation.css';
import './Pages/Welcome/welcomepage.css';

const App = () => (
<BrowserRouter>
    <div>
      <Navigation>
        <div className="menu">
        <div className="navButton"><Link className="linkStyle" to={`/`}>Welcome</Link></div>
        <div className="navButton"><Link className="linkStyle" to={`/aboutus`}>About Us</Link></div>
        <div className="navButton"><Link className="linkStyle" to={`/blogs`}>Blogs</Link></div>
        <div className="navButton"><Link className="linkStyle" to={`/services`}>Services</Link></div>
        <div className="navButton"><Link className="linkStyle" to={`/testimonials`}>Testimonials</Link></div>
        <div className="navButton"><Link className="linkStyle" to={`/contactus`}>Contact Us</Link></div>
        </div>
      </Navigation>
      <Route exact path='/' component={Welcome} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/blogs' component={Blogs} />
      <Route path='/services' component={Services} />
      <Route path='/testimonials' component={Testimonials} />
      <Route path='/contactus' component={ContactUs} />

    </div>
  </BrowserRouter>
)

export default App;