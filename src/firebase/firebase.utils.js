import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBNT_y31P_M7ti7cij2MMgCMcn8vGAMy58",
  authDomain: "crwn-db-433c1.firebaseapp.com",
  projectId: "crwn-db-433c1",
  storageBucket: "crwn-db-433c1.appspot.com",
  messagingSenderId: "43081720070",
  appId: "1:43081720070:web:0e1fbb58f52727c097fe87",
  measurementId: "G-6J033VNZMC"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
  console.log('test');
}).catch((error) => {
  console.log(error);
});

export default firebase;