import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNLEGTZYjhZBj6uEnYhxfSVBi-1fG0fm4",
    authDomain: "webapp2-assignment1.firebaseapp.com",
    projectId: "webapp2-assignment1",
    storageBucket: "webapp2-assignment1.appspot.com",
    messagingSenderId: "587779182666",
    appId: "1:587779182666:web:20e5b9b2df1bf9f554d6b3",
    measurementId: "G-FE3M3QKB74"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  export default ( auth ); 