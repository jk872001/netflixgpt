// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5JIp2GnoQuUJ1QIDMCn2e7GG-CN-Xd40",
  authDomain: "namaste-react-876e7.firebaseapp.com",
  projectId: "namaste-react-876e7",
  storageBucket: "namaste-react-876e7.appspot.com",
  messagingSenderId: "698411673261",
  appId: "1:698411673261:web:2a2ab8351857add1f10824",
  measurementId: "G-HEL5FB1D6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

