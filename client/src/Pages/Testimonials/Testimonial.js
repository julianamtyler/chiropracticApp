import React from 'react';

const Testimonial = (props) => (
    <div>
        <div className="reviewName">{props.name}</div>
        <div className="comment">"{props.comment}"</div>
    </div>
)

export default Testimonial;