import React from 'react';
import './blogStyles.css';
import axios from 'axios';
import EachBlog from './EachBlog';


class Blog extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios
            .get(
                "https://public-api.wordpress.com/rest/v1/sites/chiro822980757.wordpress.com/posts"
            )
            .then(res => {
                let allPosts = res.data.posts;        
                this.setState({ posts: allPosts })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='allBlogs'>
                {this.state.posts.map((post,i) =><EachBlog key={i} post={post} />)}
            </div>
        )
    }


}
export default Blog; 