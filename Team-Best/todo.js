import { addDoc, deleteDoc, doc } from "firebase/firestore";
import { database, todosRef } from "./firebase";
import { printTodos } from "./main";

const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const endDateInput = document.getElementById("end-date-input");
const createTodoButton = document.getElementById("create-todo");
const todoIcon = document.getElementsByClassName('todo-icon');
const section = document.getElementById("mainContainer");


async function createTodo(e) {
  // section.innerHTML = "";
  e.preventDefault();
  const doc = await addDoc(todosRef, {
    Title: titleInput.value,
    Description: descriptionInput.value,
    Date: endDateInput.value,
  });
  alert(`added doc ${doc.id}`);
  printTodos();
}

createTodoButton.addEventListener("click", createTodo);

export async function removeTodo(e) {
  e.preventDefault();
  console.log(e.target.parentElement.id);
  const document = await deleteDoc(doc(database,'todos',e.target.parentNode.id));
  printTodos();
}