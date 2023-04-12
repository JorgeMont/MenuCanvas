import { initializeApp } from 'firebase/app';
import {getFirestore, collection, addDoc, getDocs, getDoc, onSnapshot, deleteDoc, doc, updateDoc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZ9tl3wc62DFUD074mUeREuszxJzCwX4E",
    authDomain: "menucanvas.firebaseapp.com",
    projectId: "menucanvas",
    storageBucket: "menucanvas.appspot.com",
    messagingSenderId: "433345122151",
    appId: "1:433345122151:web:e452c254117800104469c2"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const saveDish = (nombrePlatillo, precioPlatillo, descripcionPlatillo, fotoPlatillo)=>{
    addDoc(collection(db, "dishes"), {nombrePlatillo: nombrePlatillo, precioPlatillo: precioPlatillo, descripcionPlatillo: descripcionPlatillo, fotoPlatillo: fotoPlatillo})
}

export const getDish = () => getDocs(collection(db, "dishes")) 

export const onGetDish = () => console.log("Getting some dishes")

export const deleteDish = (id) => deleteDoc(doc(db, "dishes", id))

export const editDish = (id) => getDoc(doc(db, "dishes", id))

export const updateDish = (id) => updateDoc()

export {
  onSnapshot,
  collection,
}




