// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOmqaMZRfo7EMCDyz5c-eNFKsjDGGdPDo",
  authDomain: "mpeardev-portfolio.firebaseapp.com",
  projectId: "mpeardev-portfolio",
  storageBucket: "mpeardev-portfolio.appspot.com",
  messagingSenderId: "5134422210",
  appId: "1:5134422210:web:7068d71fb92c78f83eab5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };