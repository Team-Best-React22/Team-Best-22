import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyAccE4Vn7dI2N-lBpK6UmoCWJBIxCLg8Gc",
  authDomain: "team-best.firebaseapp.com",
  projectId: "team-best",
  storageBucket: "team-best.appspot.com",
  messagingSenderId: "990147430148",
  appId: "1:990147430148:web:7212d6957e86e22e51f251",
};
export const app = initializeApp(firebaseConfig);

export const database = getFirestore();
export const todosRef = collection(database, "todos");
