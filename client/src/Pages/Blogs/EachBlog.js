import React from 'react';
import './blogStyles.css';

const EachBlog = (props) => (
<div className='blog'>
    <div className=' bTitle'>{props.post.title}</div> 
    <div className='blogcontent'>{props.post.excerpt}</div>
</div>

)

export default EachBlog;