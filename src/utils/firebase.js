
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-d4144.firebaseapp.com",
  projectId: "next-blog-d4144",
  storageBucket: "next-blog-d4144.appspot.com",
  messagingSenderId: "786741125391",
  appId: "1:786741125391:web:d3d4100ec279657353de7a",
  measurementId: "G-12TYV7R09H"
};

export const app = initializeApp(firebaseConfig);

