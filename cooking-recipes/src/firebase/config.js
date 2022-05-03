import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4dYdvoocNBzCvQx2avU1OyVf22aXvcTs",
  authDomain: "cooking-henry.firebaseapp.com",
  projectId: "cooking-henry",
  storageBucket: "cooking-henry.appspot.com",
  messagingSenderId: "394051716359",
  appId: "1:394051716359:web:aaa241a59569ee06df71a2"
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()

export { projectFirestore }