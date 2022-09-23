import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCjOlZWHveGjU3lbK5WyaI9oqqmAbPWJvE",
    authDomain: "blogs-website-ca0d1.firebaseapp.com",
    projectId: "blogs-website-ca0d1",
    storageBucket: "blogs-website-ca0d1.appspot.com",
    messagingSenderId: "749936531987",
    appId: "1:749936531987:web:1b2d45f87d125563a43de6"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage};