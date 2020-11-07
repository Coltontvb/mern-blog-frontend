import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';



export default function PostList(){
    const [posts, setPosts] = useState([]);
    const match = useRouteMatch();

    //Load all the posts into a state array
    useEffect(() => {    
        Axios
            .get(`http://localhost:3001${match.url}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const renderPosts = posts.map((post) => {
        return (
            <div className="post-container">
                <Link to={`${match.path}/${post._id}`}>{post.title}</Link>
                
            </div>      
        )
    })

    return(
        <div>
            <h1 className="jumbotron">List of Posts</h1>
            {renderPosts}
        </div>       
    )
}
    
    
