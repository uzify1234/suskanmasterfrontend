import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDBtXfLB2emS5HLMl4631tUxjNDzmcU2mA",
    authDomain: "mutualfundsapi-eceef.firebaseapp.com",
    projectId: "mutualfundsapi-eceef",
    storageBucket: "mutualfundsapi-eceef.appspot.com",
    messagingSenderId: "1011213401359",
    appId: "1:1011213401359:web:891ba60cf6a910c587d27a",
    measurementId: "G-7JCLVK5VPX"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig,"mutualfunds");

  const dbmf = firebaseApp.firestore();


  export default dbmf;