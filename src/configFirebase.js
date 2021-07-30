import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyCuUFX_vPqBzy17MobOgmkjpOQZARf-kwE",
  authDomain: "chopchain-12be2.firebaseapp.com",
  projectId: "chopchain-12be2",
  storageBucket: "chopchain-12be2.appspot.com",
  messagingSenderId: "485109061777",
  appId: "1:485109061777:web:2e6dc4a71250345fdcc730"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
}
