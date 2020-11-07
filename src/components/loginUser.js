import { Link } from 'react-router-dom';

export default function UserLogin() {

    return(
        <div className="jumbotron">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={console.log("Submitted")}>
                <div className="form-group">
                    <label>username: </label>
                    <input required type="text" name="username" value={"#"} onChange={console.log("changed")}/>
                </div>
                <div className="form-group">
                    <label>password: </label>
                    <input required type="text" name="password" value={"#"} onChange={console.log("changed")}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
                <p className="link">
                    <Link to="/register" className="nav-link">No Account? Register here</Link>
                </p>
            </form>
            </div>
        </div>
    )
}