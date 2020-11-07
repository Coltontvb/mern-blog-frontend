import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <Link to="/" className="navbar-brand">Mern Frontend</Link>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/posts" className="nav-link">Posts</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/users" className="nav-link">Users</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
}