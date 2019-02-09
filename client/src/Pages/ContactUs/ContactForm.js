import React from 'react';

const ContactForm = () => (
  
       <div className="contactForm">
       <form>
           <input name="name" placeholder="Your Name" className="nameInput"  /><br/>
           <input name="email" placeholder="Your email" className="emailInput" /><br/>
           <input name="email" placeholder="Your Phone Number" className="emailInput" /><br/>
           <textarea name="comment" placeholder="Your Question for the doctor" className="commentInput"  ></textarea><br/>
           <button  className="formButton">Send</button>
       </form>
       </div>
)

export default ContactForm;