import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBbGTKVALRnroHusiJS4B0UdmPUwcPozwk",
    authDomain: "sparta3-11093.firebaseapp.com",
    projectId: "sparta3-11093",
    storageBucket: "sparta3-11093.appspot.com",
    messagingSenderId: "339022906305",
    appId: "1:339022906305:web:19e33604e77065729fa540",
    measurementId: "G-2F4E85KMR1",
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};