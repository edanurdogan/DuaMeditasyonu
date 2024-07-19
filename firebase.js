import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAHiJGdNTV7l0s9m5_PATZjx5SYd91WfFU",
  authDomain: "duameditasyonu.firebaseapp.com",
  projectId: "duameditasyonu",
  storageBucket: "duameditasyonu.appspot.com",
  messagingSenderId: "289528936735",
  appId: "1:289528936735:web:5acc28380e5cbdde90d82a",
  measurementId: "G-TH7NSQ2WLK"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
export { db, firebase , storage,auth};

