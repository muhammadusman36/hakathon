// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDylko12WNNzrTfNwUKD52KdI0Wrjkdj00",
    authDomain: "saylnaihakathon.firebaseapp.com",
    databaseURL: "https://saylnaihakathon-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "saylnaihakathon",
    storageBucket: "saylnaihakathon.appspot.com",
    messagingSenderId: "301954622270",
    appId: "1:301954622270:web:ed5df52401883dffe7c26f",
    measurementId: "G-0XHFZD6Z8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireStore = getFirestore(app);

export { app, analytics, fireStore }