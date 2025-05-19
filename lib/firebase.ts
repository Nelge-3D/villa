// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDIV-zO8kK3KIiOSbonvqeZ_ndDlw-RV44",
  authDomain: "villa-lovedream.firebaseapp.com",
  projectId: "villa-lovedream",
  storageBucket: "villa-lovedream.firebasestorage.app",
  messagingSenderId: "411914362496",
  appId: "1:411914362496:web:e068e785cb95df3a88d065",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
