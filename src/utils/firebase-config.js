import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwgY-1V_tSXaPc2bSCPns95BREDiHh-iQ",
  authDomain: "imdb-clone-bb113.firebaseapp.com",
  projectId: "imdb-clone-bb113",
  storageBucket: "imdb-clone-bb113.appspot.com",
  messagingSenderId: "1045209882047",
  appId: "1:1045209882047:web:a122fd6158fb007a81150a",
  measurementId: "G-PBPEZ3MDSN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);