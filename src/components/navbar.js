import { Link } from 'react-router-dom';

export default function Navbar(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <Link to="/" className="navbar-brand">Mern Frontend</Link>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Posts</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Post</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">New User?</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}