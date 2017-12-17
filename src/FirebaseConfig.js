// import firebase from 'firebase'
var firebase = require('firebase/app');
var firebaseAuth = require('firebase/auth');
require('firebase/database');
var config = {
    apiKey: "AIzaSyAJ4VIMPyVSbTP3QFtPB0ziHlyCf_siXek",
    authDomain: "react-76d72.firebaseapp.com",
    databaseURL: "https://react-76d72.firebaseio.com",
    projectId: "react-76d72",
    storageBucket: "react-76d72.appspot.com",
    messagingSenderId: "402283470535"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
