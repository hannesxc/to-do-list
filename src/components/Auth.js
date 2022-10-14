import React, { useEffect } from "react";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';

export default function Auth(props) {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth);
        ui.start('#firebase-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: '/to-do-list'
        });
    }, [props.auth]);

    return (
        <div className="centered">
            <h2>Sign in using one of the methods below!</h2>
            <div id="firebase-auth-container"></div>
        </div>

    );
}