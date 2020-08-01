import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmRB5TFJY8qe-9qoHyMe1CV5r4cooxSb0",
  authDomain: "e-comm-af3d6.firebaseapp.com",
  databaseURL: "https://e-comm-af3d6.firebaseio.com",
  projectId: "e-comm-af3d6",
  storageBucket: "e-comm-af3d6.appspot.com",
  messagingSenderId: "1076027328042",
  appId: "1:1076027328042:web:669b92453c4021d0df6553",
  measurementId: "G-W9RMLCG12V",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
