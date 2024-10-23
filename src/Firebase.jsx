// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgitHqRMJUVwODZDGq63rL5-rMT_LaHvc",
  authDomain: "auth-41ab4.firebaseapp.com",
  projectId: "auth-41ab4",
  storageBucket: "auth-41ab4.appspot.com",
  messagingSenderId: "1085330246585",
  appId: "1:1085330246585:web:09df09a6070e6d11900468",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
