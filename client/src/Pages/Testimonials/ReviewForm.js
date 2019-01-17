import React from 'react';

const ReviewForm = (props) => (
    <form>
        <input name = "name" value ={props.nameVal} onChange={props.handleChange} placeholder ="Name"/>
        <input name = "email" value ={props.emailVal} onChange={props.handleChange} placeholder ="Email"/>
        <input name = "comment" value ={props.commentVal} onChange={props.handleChange} placeholder="Write your review here!"/>
        <button onClick ={props.submitReview}>Submit</button>
    </form>
)

export default ReviewForm;