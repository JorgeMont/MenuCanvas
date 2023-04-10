import { initializeApp } from 'firebase/app';
import {getFirestore, collection, addDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZ9tl3wc62DFUD074mUeREuszxJzCwX4E",
    authDomain: "menucanvas.firebaseapp.com",
    projectId: "menucanvas",
    storageBucket: "menucanvas.appspot.com",
    messagingSenderId: "433345122151",
    appId: "1:433345122151:web:e452c254117800104469c2"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore()

export const saveDish = (nombrePlatillo, precioPlatillo, descripcionPlatillo, fotoPlatillo)=>{
    addDoc(collection(db, "dishes"), {nombrePlatillo: nombrePlatillo, precioPlatillo: precioPlatillo, descripcionPlatillo: descripcionPlatillo, fotoPlatillo: fotoPlatillo})
}





