import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7IGgDkpSbFKuGIp3Hhm0Y1VVsD4SEjX8",
  authDomain: "crwn-db-230af.firebaseapp.com",
  databaseURL: "https://crwn-db-230af.firebaseio.com",
  projectId: "crwn-db-230af",
  storageBucket: "crwn-db-230af.appspot.com",
  messagingSenderId: "351464580012",
  appId: "1:351464580012:web:958fe3a14ed1449a599009",
  measurementId: "G-XJQGD36T2T",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
