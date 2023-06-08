import "./style.css";

// Import the functions you need from the SDKs you need
import { getDocs } from "firebase/firestore";
import { todosRef } from "./firebase";

getDocs(todosRef).then((snapshot) => {
  let todos = [];
  snapshot.docs.forEach((doc) => {
    todos.push({ ...doc.data(), id: doc.id });
  });
  console.log(todos);
});
