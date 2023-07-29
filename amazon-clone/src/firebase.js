import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyBgobwr8WLZeeWLVhG4p1ZFNO3Wok6e1HY",
    authDomain: "clone-64ed1.firebaseapp.com",
    projectId: "clone-64ed1",
    storageBucket: "clone-64ed1.appspot.com",
    messagingSenderId: "226661789794",
    appId: "1:226661789794:web:1feab0639142272ebf213b",
    measurementId: "G-2M43JFQLPF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export {auth};
