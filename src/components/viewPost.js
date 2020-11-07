import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function ShowPost() {
    const [post, setPost] = useState({});
    const match = useRouteMatch();
    useEffect(() => {    
        Axios
            .get(`http://localhost:3001${match.url}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div className="post-container">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}