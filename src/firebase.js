import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz1u_bWavYlb1KnRVJQLzdCfwha-lVu3U",
  authDomain: "blog-874d5.firebaseapp.com",
  projectId: "blog-874d5",
  storageBucket: "blog-874d5.firebasestorage.app",
  messagingSenderId: "815046835034",
  appId: "1:815046835034:web:c771326d2740de1047d163"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };