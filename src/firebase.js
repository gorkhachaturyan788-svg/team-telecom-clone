import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsSY8kjcERCVQNnSXK6OCfqfSAZQuj3KU",
  authDomain: "team-telecom-d7aa9.firebaseapp.com",
  projectId: "team-telecom-d7aa9",
  storageBucket: "team-telecom-d7aa9.firebasestorage.app",
  messagingSenderId: "404773326937",
  appId: "1:404773326937:web:aaa0361abd8d43f0896148"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);