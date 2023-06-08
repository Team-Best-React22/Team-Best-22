import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { database, todosRef } from "./firebase";

const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const endDateInput = document.getElementById("end-date-input");
const createTodoButton = document.getElementById("create-todo");

async function createTodo(e) {
  e.preventDefault();
  const doc = await addDoc(todosRef, {
    Title: titleInput.value,
    Description: descriptionInput.value,
    Date: endDateInput.value,
  });
  alert(`added doc ${doc.id}`);
}

createTodoButton.addEventListener("click", createTodo);


async function removeTodo() {
  const document = await deleteDoc(doc(database,'todos','K9bTb7RHXoxjCQY5z7yV'));
}

removeTodo();