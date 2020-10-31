import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCJ74YyBmSnblooY-jbzbjU2vV57QwVOds",
  authDomain: "dev-meet-f8326.firebaseapp.com",
  databaseURL: "https://dev-meet-f8326.firebaseio.com",
  projectId: "dev-meet-f8326",
  storageBucket: "dev-meet-f8326.appspot.com",
  messagingSenderId: "821485982348",
  appId: "1:821485982348:web:e70dc0cb3016f85f1061a9",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
};
