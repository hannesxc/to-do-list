import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import { AuthContext } from '../Contexts/AuthContext';

export default function Navbar() {
    const { user, auth } = useContext(AuthContext);

    return (
        <div className="nav">
            <Link to="/to-do-list">To-Do App</Link>
            {user ? <button onClick={() => {
                auth.signOut()
                window.location.reload()
              }}>Sign Out</button> : <Link to="/to-do-list/signin">Sign In</Link>
            }
        </div>
    );
}