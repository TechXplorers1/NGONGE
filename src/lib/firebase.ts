// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGyilLTb292eDXqnOwZ80vgbkIzXrd8ts",
  authDomain: "ngonge-llc.firebaseapp.com",
  projectId: "ngonge-llc",
  storageBucket: "ngonge-llc.firebasestorage.app",
  messagingSenderId: "169727116159",
  appId: "1:169727116159:web:40f292d41be3df22f8504a",
  measurementId: "G-X8PBHYG4DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);