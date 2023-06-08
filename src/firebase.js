import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { doc, getFirestore, setDoc , collection, addDoc,getDoc} from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB4UlsvMw7VQ9od_qYNVFc55D8LLTwET0A",
  authDomain: "admin-dashboard-f5574.firebaseapp.com",
  projectId: "admin-dashboard-f5574",
  storageBucket: "admin-dashboard-f5574.appspot.com",
  messagingSenderId: "722342083244",
  appId: "1:722342083244:web:2fb5703bf6e7b2b3717d09",
  measurementId: "G-X525SHL84Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);

const db = getFirestore(app);

export {auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,db,app,storage}