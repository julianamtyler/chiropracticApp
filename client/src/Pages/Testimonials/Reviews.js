import React from 'react';

const Reviews = (props) => (
    <div>
    {props.reviews.map(review =><div>{review}</div>)}
       
    </div>
)

export default Reviews;