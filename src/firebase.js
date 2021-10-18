// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMRmsuVW93YPlADM1yEwF6kAZWWc1Csrg",
  authDomain: "disney-plus-2ac68.firebaseapp.com",
  projectId: "disney-plus-2ac68",
  storageBucket: "disney-plus-2ac68.appspot.com",
  messagingSenderId: "404795474162",
  appId: "1:404795474162:web:d024794df444341a9d906b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app