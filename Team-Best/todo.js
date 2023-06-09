import { addDoc, deleteDoc, doc, setDoc } from "firebase/firestore"
import { database, todosRef } from "./firebase"
import { printTodos } from "./main"
import moment from "moment/moment"

const titleInput = document.getElementById("title-input")
const descriptionInput = document.getElementById("description-input")
const endDateInput = document.getElementById("end-date-input")
const createTodoButton = document.getElementById("create-todo")
const todoIcon = document.getElementsByClassName("todo-icon")
const section = document.getElementById("mainContainer")

async function createTodo(e) {
  e.preventDefault()
  let date = endDateInput.value

  if (date === "") {
    date = moment([]).toString()
  }

  if (titleInput.value === "" || descriptionInput.value === "") {
    return alert("Fyll i alla fält!")
  }

  const doc = await addDoc(todosRef, {
    Title: titleInput.value,
    Description: descriptionInput.value,
    Date: date,
  })
  alert(`Datan tillagd med id: ${doc.id}`)
  printTodos()
}

createTodoButton.addEventListener("click", createTodo)

export async function removeTodo(e) {
  e.preventDefault()
  const document = await deleteDoc(
    doc(database, "todos", e.target.parentNode.id)
  )
  printTodos()
}

export async function editTodo(e, title, description, date) {
  e.preventDefault()

  if (date === "") {
    date = moment([]).toString()
  }

  if (title === "" || description === "") {
    return alert("Kan inte spara utan rubrik och brödtext")
  }

  const document = await setDoc(
    doc(database, "todos", e.target.parentNode.id),
    {
      Title: title,
      Description: description,
      Date: date,
    },
    { merge: true }
  )
  printTodos()
}
