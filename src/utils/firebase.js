// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn28FHcj-rRzXPxdomXmZ_BgzWi0vvxjI",
  authDomain: "netflixgpt-2bf76.firebaseapp.com",
  projectId: "netflixgpt-2bf76",
  storageBucket: "netflixgpt-2bf76.firebasestorage.app",
  messagingSenderId: "329483110644",
  appId: "1:329483110644:web:b5f3b7a1a854db81f536a1",
  measurementId: "G-5P5VGCRZ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()