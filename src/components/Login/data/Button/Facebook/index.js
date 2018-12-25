import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase'

firebase.initializeApp(
    {
        apiKey: "AIzaSyC0EAVbY4qQetilB4G5G0bo-Srov3pSzV8",
        authDomain: "enigma-game7307.firebaseapp.com",
        databaseURL: "https://enigma-game7307.firebaseio.com",
        projectId: "enigma-game7307",
        storageBucket: "enigma-game7307.appspot.com",
        messagingSenderId: "846576021835"
    }
)

export default class facebookButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isSignedIn: false }
        this.uiConfig = {
            signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID]

        }
    }

    render() {

        return (
            <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
            />
        )
    }
}