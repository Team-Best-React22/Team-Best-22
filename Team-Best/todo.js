import { addDoc } from "firebase/firestore";
import { todosRef } from "./firebase";

const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const endDateInput = document.getElementById("end-date-input");
const createTodoButton = document.getElementById("create-todo");

function todoFunction() {}

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
