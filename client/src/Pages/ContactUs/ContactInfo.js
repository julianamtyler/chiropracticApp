import React from 'react';



const Address = () => (
<div className="address">

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
        <Address/>
        <PhoneNumber/>

    </div>
)

export default ContactInfo;