// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDr2I4pDsYISXtGqShIqCc_pS3l_UJQkv8",
  authDomain: "notes-b1a18.firebaseapp.com",
  projectId: "notes-b1a18",
  storageBucket: "notes-b1a18.appspot.com",
  messagingSenderId: "773644273124",
  appId: "1:773644273124:web:23b3a4dd550d59ea8df3f1",
  measurementId: "G-8D7VHFQNQ0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// const analytics = getAnalytics(app);