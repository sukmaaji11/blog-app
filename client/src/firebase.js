// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-ae9cc.firebaseapp.com",
  projectId: "blog-app-ae9cc",
  storageBucket: "blog-app-ae9cc.appspot.com",
  messagingSenderId: "221301499150",
  appId: "1:221301499150:web:5ea22d4813ef8684b7a35f",
  measurementId: "G-8F23YFJNGR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
