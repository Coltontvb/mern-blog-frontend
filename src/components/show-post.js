import React from 'react';

export default function Post(props) {
    return (
        <div className="post-container">
            <div key={props.post._id}>
                <h3>{props.post.title}</h3>
                <p>{props.post.content}</p>
            </div>
        </div>
    )
}