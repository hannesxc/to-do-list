import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import { AuthContext } from '../Contexts/AuthContext';
import firebase from "firebase/compat/app";

export default function Navbar() {
    const {user} = useContext(AuthContext);

    const ifAuth = user ?
        <button onClick={() => firebase.auth().signOut()}>Sign Out</button> :
        <Link to="/signin">Sign In</Link>;
    return (
        <div className="nav">
            <Link to="/to-do-list">To-Do App</Link>
            {ifAuth}
        </div>
    );
}