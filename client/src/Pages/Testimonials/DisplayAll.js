import React from 'react';
import Testimonial from './Testimonial';

const DisplayAll = (props) => (
    <div>
    {props.reviews.map((review, i) => (
      <Testimonial name={review.name} comment={review.comment} key={i} data-thedbid = {review._id}/>
    ))}
   
    </div>
)

export default DisplayAll;