import firebase from "firebase";
import React from "react";
import { auth } from "../../../resources/firebase";

export const Login = () => {
  const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        //handle success
      })
      .catch((error) => {
        //handle errors
      });
  };

  return (
    <div className="google">
      <span onClick={signInWithGoogle}>Sign In with Google</span>
    </div>
  );
};
