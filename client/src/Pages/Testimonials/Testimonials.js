import React from 'react';
// import axios from 'axios';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';


class Testimonials extends React.Component {
    state ={
     reviews: []
    }
    
    submitReview = (event) => {
        event.preventDefault();
        console.log('clicked')
        const newReview = 
        this.setState({reviews : [...this.state.reviews, newReview]})
    }

    // componentDidMount() {
    //     axios.get('/api/reviews')
    //     .then(results =>
    //         this.setState({reviews: results.data}))
    // }

    render() {
        return(
            <div>
                <ReviewForm

                submitReview = {this.submitReview}/>
                <Reviews
                reviews ={this.state.reviews}/>
            </div>
        );
    }
}

export default Testimonials;