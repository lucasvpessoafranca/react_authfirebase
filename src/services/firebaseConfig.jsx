import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAJ9SYt0Ls7YeDts7lWkoce6m65uBizz6o",
  authDomain: "fir-auth-9a8d6.firebaseapp.com",
  projectId: "fir-auth-9a8d6",
  storageBucket: "fir-auth-9a8d6.appspot.com",
  messagingSenderId: "116644710475",
  appId: "1:116644710475:web:59db1dc9e4b05086cc25ce",
  measurementId: "G-32TGJSMT9Z"
};

export const app = initializeApp(firebaseConfig);