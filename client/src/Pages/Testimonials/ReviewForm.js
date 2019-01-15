import React from 'react';

const ReviewForm = (props) => (
    <form>
        <input placeholder ="Name"/>
        <input placeholder ="Email"/>
        <input placeholder="Write your review here!"/>
        <button onClick ={props.submitReview}>Submit</button>
    </form>
)

export default ReviewForm;