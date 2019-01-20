import React from 'react';

const ReviewForm = (props) => (
    <div className="reviewForm">
    <form>
        <input name="name" value={props.nameVal} placeholder="Your Name here" onChange={props.handleChange} className="nameInput" /><br/>
        <input name="email" value={props.emailVal}  placeholder="Your Email here" onChange={props.handleChange} className="emailInput" /><br/>
        <textarea name="comment" value={props.commentVal} placeholder="Leave your review here" onChange={props.handleChange} className="commentInput"></textarea><br/>
        <button onClick={props.submitReview}>Submit</button>
    </form>
    </div>
)

export default ReviewForm;