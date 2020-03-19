import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2JoP-AU0VbgDLT3278lYsgmtV2N-ujaE",
    authDomain: "geo-location-8d0c6.firebaseapp.com",
    databaseURL: "https://geo-location-8d0c6.firebaseio.com",
    projectId: "geo-location-8d0c6",
    storageBucket: "geo-location-8d0c6.appspot.com",
    messagingSenderId: "18482244179",
    appId: "1:18482244179:web:b62292e57b31ddc40574a6",
    measurementId: "G-CMBXZ4M1PW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })


// export firestore database
export default firebaseApp.firestore()
