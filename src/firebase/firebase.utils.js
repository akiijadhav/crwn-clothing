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

  //creating the user in firestore by passing in the userAuthObj who signed in & additionalData
  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    //if null i.e no userSignedIn then return; exit from function
    if (!userAuth) return;
    //check reference of that user with uid in users collection of firestore
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //take a snapshot of it
    const snapShot = await userRef.get();
    //then log it
    console.log(snapShot)
    //if it doesn't exist i.e. boolean we create it 
    if(!snapShot.exists) {
      //destructure the things we want to use i.e. name and email with a newdate
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      //error handling
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    //lastly return it
    return userRef
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;