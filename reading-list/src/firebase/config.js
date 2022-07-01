import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBwlZb4fVd9vzd3GD8iA6LM091pTp5g5yE",
  authDomain: "reading-list-firebase9.firebaseapp.com",
  projectId: "reading-list-firebase9",
  storageBucket: "reading-list-firebase9.appspot.com",
  messagingSenderId: "935941362871",
  appId: "1:935941362871:web:32c592bf520e852d622932"
}

// Init Firebase
initializeApp(firebaseConfig)

// Init Firestore
const db = getFirestore()

// Init Firebase auth
const auth = getAuth()

export { db, auth }