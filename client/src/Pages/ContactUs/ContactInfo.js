import React from 'react';
import ContactForm from './ContactForm';


const Address = () => (
<div className="address">
   <div className="title">Our Address: </div>
   <div> 1234 Street Name</div> 
   <div>Atlanta, GA 34345 </div>
</div>
)
const PhoneNumber = () => (
    <div className="phoneNum"> 
      Phone: (678) 789 - 0070
    </div>
)


const ContactInfo = () => (
    <div className="info">
        <ContactForm/>
        {/* <Address/> */}
        {/* <PhoneNumber/> */}

    </div>
)

export default ContactInfo;