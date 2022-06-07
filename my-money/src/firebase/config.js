import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABbhrjbn6nTa9Q8s8gPxG2l009GjoRxEk",
  authDomain: "my-money-168.firebaseapp.com",
  projectId: "my-money-168",
  storageBucket: "my-money-168.appspot.com",
  messagingSenderId: "138366710489",
  appId: "1:138366710489:web:938b55d7bcbf3def9b04c8"
}

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }