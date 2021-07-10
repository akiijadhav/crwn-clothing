import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDl7QUPDqIf80MeinKUcSv1miAA-7Hfq0Q",
    authDomain: "crwn-db-5e94f.firebaseapp.com",
    projectId: "crwn-db-5e94f",
    storageBucket: "crwn-db-5e94f.appspot.com",
    messagingSenderId: "144920822481",
    appId: "1:144920822481:web:75d098a409b1df9998bbf0",
    measurementId: "G-L21ZWDBGDY"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;