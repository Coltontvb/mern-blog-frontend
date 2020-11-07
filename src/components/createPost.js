import React, { useState } from 'react';
import Axios from 'axios';

export default function CreatePost() {
    //Store the new post as object to transfer to db
    const [postValues, setPostValues] = useState({
        title: "",
        content: ""
    });
    
    //Handle input as it changes saving every change to any input
    function handleNewInput(e) {
        //Input parameters
        const { name, value } = e.target;
        //Set the notes title and its content
        setPostValues(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        });
    }
    //Add the post using currently saved form values
    function addPost(e){
        e.preventDefault();
        Axios.post(`http://localhost:3001/posts/create`, postValues)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        window.location = "/posts";
    }

    return(
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={addPost}>
                <div className="form-group">
                    <label htmlFor="title-input">Title: </label>
                    <input required className="form-control" id="title-input" type="text" name="title" value={postValues.title} onChange={handleNewInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content-input">Content: </label>
                    <textarea required className="form-control" rows="3" id="content-input" name="content" value={postValues.content} onChange={handleNewInput}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Post" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
    