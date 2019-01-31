import React from 'react';
import './blogStyles.css';
import Parser from 'html-react-parser';

const EachBlog = (props) => (
<div className='blog'>
    <div className=' bTitle'>{props.post.title}</div> 
    <div className='bContent'>{Parser(props.post.content)}</div>
</div>

)

export default EachBlog;