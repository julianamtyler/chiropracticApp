import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';


const App = () => (
<BrowserRouter >
    <div>
      <Navigation>
        <button className="navButton"><Link className="linkStyle" to={`/`}>Welcome</Link></button>
        <button className="navButton"><Link className="linkStyle" to={`/aboutus`}>About Us</Link></button>
        <button className="navButton"><Link className="linkStyle" to={`/blogs`}>Blogs</Link></button>
        <button className="navButton"><Link className="linkStyle" to={`/services`}>Services</Link></button>
        <button className="navButton"><Link className="linkStyle" to={`/testimonials`}>Testimonials</Link></button>
        <button className="navButton"><Link className="linkStyle" to={`/contactus`}>Contact Us</Link></button>
      </Navigation>
      <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/aboutus'  component={AboutUs} />
      <Route path='/blogs' component={Blogs} />
      <Route path='/services' component={Services} />
      <Route path='/testimonials' component={Testimonials} />
      <Route path='/contactus' component={ContactUs} /> 
      <Route component={Welcome} />
      </Switch>
      <Footer/> 
    </div>
   
  </BrowserRouter>
)

export default App;