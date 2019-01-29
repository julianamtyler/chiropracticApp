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
                "http://public-api.wordpress.com/rest/v1/sites/chiro822980757.wordpress.com/posts"
            )
            .then(res => {
                let allPosts = res.data.posts;
                console.log(allPosts)
                allPosts.map(eachPost => {
                    let str = eachPost.excerpt;
                    str.replace(/[\u{0080}-\u{FFFF}]/gu,"");
                    eachPost.excerpt = str;
                    console.log(str)
                })

                this.setState({ posts: allPosts })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1 className="sectionTitle">Our Blogs</h1>
                {this.state.posts.map(post =><EachBlog post={post} />)}
            </div>
        )
    }


}
export default Blog; 