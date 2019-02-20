import React from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import DisplayAll from './DisplayAll';
import './testimonialPage.css';
import './ReviewFormStyle.css';

class Testimonials extends React.Component {
    state = {
        reviews: [],
        newReview: {
            name: '',
            email: '',
            comment: ''
        }
    }

    handleChange = (event) => {
        const inputField = event.target.name;
        console.log(inputField);
        let copyOfReview = this.state.newReview;
        copyOfReview[inputField] = event.target.value;
        this.setState({ newReview: copyOfReview })
    }

    submitReview = (event) => {
        event.preventDefault();
        console.log('clicked')
        axios.post('/api/reviews', this.state.newReview
        )
            .then(results => {
                this.setState({
                    reviews: [...this.state.reviews, results.data]

                })
            })
    }

    allReviews = () => {
        axios.get('/api/reviews')
            .then((results) => {
                this.setState({ reviews: results.data })
            })
    }
      
    componentDidMount() {
        this.allReviews();
    }


    render() {
        return (
            <div className="testimonialPage">
                <ReviewForm
                    nameVal={this.state.newReview.name}
                    emailVal={this.state.newReview.email}
                    commentVal={this.state.newReview.comment}
                    submitReview={this.submitReview}
                    handleChange={this.handleChange}
                />
                <DisplayAll
                    allReviews={this.state.allReviews}
                    reviews={this.state.reviews}
                    onClick={this.onClickReview} />
            </div>
        );
    }
}

export default Testimonials;