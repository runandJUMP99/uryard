import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAX18czgBvVp4ZtoL9OWCUxZhC_it3G4ts",
    authDomain: "uryard-421a5.firebaseapp.com",
    databaseURL: "https://uryard-421a5.firebaseio.com",
    projectId: "uryard-421a5",
    storageBucket: "uryard-421a5.appspot.com",
    messagingSenderId: "427815608639",
    appId: "1:427815608639:web:e4e45bd665263349fef38a",
    measurementId: "G-7L7KHYBBXF"
  };

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

export {storage, firebase as default};