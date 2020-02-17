import firebase from 'firebase/app'
import 'firebase/auth'

// TODO: Insert you Firebase project settings here
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const firebaseAuth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
