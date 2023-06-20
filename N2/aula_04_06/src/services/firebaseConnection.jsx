import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCM2Pc1PBIvhv290Q5N3TNUhaVP7het4T0",
  authDomain: "react-85f8a.firebaseapp.com",
  projectId: "react-85f8a",
  storageBucket: "react-85f8a.appspot.com",
  messagingSenderId: "953315871983",
  appId: "1:953315871983:web:a214acf5dd5127a5abdf1a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};