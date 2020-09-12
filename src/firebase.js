import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDkaB_bkh6F10_4p-ycXrw3fID5fn6i-iQ",
    authDomain: "clone-2c6b1.firebaseapp.com",
    databaseURL: "https://clone-2c6b1.firebaseio.com",
    projectId: "clone-2c6b1",
    storageBucket: "clone-2c6b1.appspot.com",
    messagingSenderId: "328736189396",
    appId: "1:328736189396:web:e50803ffdd5440faeb4441",
    measurementId: "G-DK7GT4GJGT"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db, auth};