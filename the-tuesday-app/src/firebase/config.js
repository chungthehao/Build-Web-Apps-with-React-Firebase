import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBkTyvNmV_hcybEyTMvFoWpe1bx5b9-yhI",
  authDomain: "the-tuesday-app.firebaseapp.com",
  projectId: "the-tuesday-app",
  storageBucket: "the-tuesday-app.appspot.com",
  messagingSenderId: "209819289051",
  appId: "1:209819289051:web:d45b2c096e0ad1a26c93fe"
}

// Init Firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
