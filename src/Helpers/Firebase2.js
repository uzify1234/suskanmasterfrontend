import firebase from 'firebase';
var mode = "test";
var firebaseConfig = {};

 firebaseConfig = {
    apiKey: "AIzaSyDBtXfLB2emS5HLMl4631tUxjNDzmcU2mA",
    authDomain: "mutualfundsapi-eceef.firebaseapp.com",
    projectId: "mutualfundsapi-eceef",
    storageBucket: "mutualfundsapi-eceef.appspot.com",
    messagingSenderId: "1011213401359",
    appId: "1:1011213401359:web:891ba60cf6a910c587d27a",
    measurementId: "G-7JCLVK5VPX"
  };


  const firebaseApp =  firebase.initializeApp(firebaseConfig,"secondary");
  const db = firebaseApp.firestore();

    export default db;