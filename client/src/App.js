import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import AboutUs from './Pages/AboutUs/AboutUs';
import NewPatients from './Pages/NewPatients/NewPatients';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navigation from './Components/Navigation';

const App = () => (

<BrowserRouter>
    <div>
      <Navigation>
        <Link to={`/`}>Welcome</Link> |
        <Link to={`/aboutus`}>About Us</Link> |
        <Link to={`/newpatients`}>New Patients</Link> |
        <Link to={`/services`}>Services</Link> |
        <Link to={`/testimonials`}>Testimonials</Link> |
        <Link to={`/contactus`}>Contact Us</Link> 
      </Navigation>
      <Route exact path='/' component={Welcome} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/newpatients' component={NewPatients} />
      <Route path='/services' component={Services} />
      <Route path='/testimonials' component={Testimonials} />
      <Route path='/contactus' component={ContactUs} />

    </div>
  </BrowserRouter>
)

export default App;