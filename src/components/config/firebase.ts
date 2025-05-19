
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDnVsyyiqEpnF0VmaZrT4muZ6vAzq0EZ4Y",
  authDomain: "movie-website-redux.firebaseapp.com",
  projectId: "movie-website-redux",
  storageBucket: "movie-website-redux.firebasestorage.app",
  messagingSenderId: "826917097920",
  appId: "1:826917097920:web:c1ab4ed80473083b69f825",
  measurementId: "G-TXX79MM7RE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();