import Axios from "axios";
import React, { useState } from "react";

export default function CreateUser() {
    //State of form inputs
    const [userValues, setUserValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    //Handle input as it changes saving every change to any input
    function handleNewInput(e) {
        //Input paramaters
        const { name, value } = e.target;
        //Set the values to state
        setUserValues(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        }); 
    }

    function addUser(e){
        e.preventDefault();
        Axios.post(`http://localhost:3001/users/create`, userValues)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        window.location = "/"
    }


    
        return(
            <div className="form-container">
                <h1>Create User</h1>
                <form onSubmit={addUser}>
                <div className="form-group">
                    <label>username: </label>
                    <input required type="text" name="username" value={userValues.username} onChange={handleNewInput}/>
                </div>
                <div className="form-group">
                    <label>email: </label>
                    <input required type="text" name="email" value={userValues.email} onChange={handleNewInput}/>
                </div>
                <div className="form-group">
                    <label>password: </label>
                    <input required type="text" name="password" value={userValues.password} onChange={handleNewInput}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create New Account" className="btn btn-primary" />
                </div>
            </form>
            </div>
        )
    }