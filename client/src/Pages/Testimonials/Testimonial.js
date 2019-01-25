import React from 'react';


const Testimonial = (props) => (
    <div className="reviewBox">
        <div className="comment">{props.comment}</div>
        <div className="reviewName">{props.name}</div>
    </div>
)

export default Testimonial;