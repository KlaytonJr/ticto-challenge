import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCP4rPhW6SBB_Wda8qB7jtSad1Faspc5Bk",
    authDomain: "ticto-challenge.firebaseapp.com",
    databaseURL: "https://ticto-challenge-default-rtdb.firebaseio.com",
    projectId: "ticto-challenge",
    storageBucket: "ticto-challenge.appspot.com",
    messagingSenderId: "406799670256",
    appId: "1:406799670256:web:dd2dd91e2e33ba5fe89b35",
    measurementId: "G-37NNCKFBCK"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;