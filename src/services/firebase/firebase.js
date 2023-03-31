import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfxBs0I6VCgKae7bzgHgqWDZ4Y7PjU5K4",
  authDomain: "boogieshop-e5503.firebaseapp.com",
  projectId: "boogieshop-e5503",
  storageBucket: "boogieshop-e5503.appspot.com",
  messagingSenderId: "647028520879",
  appId: "1:647028520879:web:a133c2bd34c832ff4ae15a",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
