import React from 'react';
import Testimonial from './Testimonial';


const DisplayAll = (props) => (
    <div className="allReviewsBox">
    <div>
    {props.reviews.map((review, i) => (
      <Testimonial name={review.name} comment={review.comment} key={i}/>
    ))}
   </div>
    </div>
)

export default DisplayAll;