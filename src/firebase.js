import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBOI2yeEo2BDl0wqIYS3db0tg7nLsk58S8",
    authDomain: "comentaki-development.firebaseapp.com",
    projectId: "comentaki-development",
    storageBucket: "comentaki-development.appspot.com",
    messagingSenderId: "690777483473",
    appId: "1:690777483473:web:5b95f9629f356517e13df0"
};

// Inicializa e exporta a instância

firebase.initializeApp(firebaseConfig)

export default firebase