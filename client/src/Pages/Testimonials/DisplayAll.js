import React from 'react';
import Testimonial from './Testimonial';


const DisplayAll = (props) => (
    <div className="allReviewsBox">
    {props.reviews.map((review, i) => (
      <Testimonial name={review.name} comment={review.comment} key={i}/>
    ))}
  
    </div>
)

export default DisplayAll;