// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2iKs3soGxMCsrUGHHMub0_79ORIqqlC8",
  authDomain: "moviesgpt-62932.firebaseapp.com",
  projectId: "moviesgpt-62932",
  storageBucket: "moviesgpt-62932.appspot.com",
  messagingSenderId: "358388530035",
  appId: "1:358388530035:web:0231459fa66add0f43e306",
  measurementId: "G-PX3J5LJHMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);