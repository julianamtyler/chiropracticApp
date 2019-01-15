import React from 'react';

const ContactForm = () => (
<div>
    <h4>Do you have a question for Doctor?</h4>
    <form>
        <input placeholder="name" />
        <input placeholder="email"/>
        <input placeholder="phone"/>
        <input placeholder="what is your question?" />
        <button>Submit</button>
    </form>
</div>
)

export default ContactForm;