import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjJPmuCce9bt9-kXnMOBW2VhOgOnFzT7c",
  authDomain: "bad-bank-2.firebaseapp.com",
  projectId: "bad-bank-2",
  storageBucket: "bad-bank-2.appspot.com",
  messagingSenderId: "580478695941",
  appId: "1:580478695941:web:ce6269d870e3f863a5fa6c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
