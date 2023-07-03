// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAueYYMMJ-F9pdIci4dtkMZxdUTd4jo6XA",
  authDomain: "realtor-clone-react-a94e0.firebaseapp.com",
  projectId: "realtor-clone-react-a94e0",
  storageBucket: "realtor-clone-react-a94e0.appspot.com",
  messagingSenderId: "262926997970",
  appId: "1:262926997970:web:cae4cab29f4e9b3b0c900b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()