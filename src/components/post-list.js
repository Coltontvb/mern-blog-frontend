import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Post from './show-post';

export default function PostList(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios
            .get('http://localhost:3001/posts/')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
    return(
        <div className="posts">
            <h1>List of Posts</h1>
            {posts.map(post => (
                <Post key={post._id} post={post}/>
            ))}
        </div>
    )
}