// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage,ref} from 'firebase/storage';
import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGq2nzXa-tWAZABd_u_JhfpQyaF8OLxjU",
  authDomain: "galleryspot-7a94d.firebaseapp.com",
  projectId: "galleryspot-7a94d",
  storageBucket: "galleryspot-7a94d.appspot.com",
  messagingSenderId: "78242938855",
  appId: "1:78242938855:web:5a4f5dde789e3684f08742",
  measurementId: "G-NT8LZBHKEY"
};

// Initialize Firebase


export const app =initializeApp(firebaseConfig)



export const db =getFirestore(app);

export const storage = getStorage(app);

// Create a storage reference from our storage service


