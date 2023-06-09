import "./style.css"
import xicon from "./x-icon.svg"
// Import the functions you need from the SDKs you need
import { getDocs } from "firebase/firestore"
import { sortQuery, todosRef } from "./firebase"
import moment from "moment/moment"
import { editTodo, removeTodo } from "./todo"

const section = document.getElementById("mainContainer")

let toggler = false

function toggle() {
  toggler ? false : true
}

export function printTodos() {
  getDocs(sortQuery).then((snapshot) => {
    let todos = []
    snapshot.docs.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id })
    })
    section.innerHTML = ""
    todos.map((todo) => {
      const todoDiv = document.createElement("div")
      todoDiv.id = todo.id
      todoDiv.className = "todo-wrapper"
      const title = document.createElement("h3")
      title.className = "todo-title"
      title.setAttribute("contentEditable", true)
      const description = document.createElement("p")
      description.className = "todo-description"
      description.setAttribute("contentEditable", true)
      const date = document.createElement("p")
      const editDate = document.createElement("input")
      editDate.setAttribute("type", "date")
      editDate.setAttribute("class", "edit-date")
      editDate.style.display = "none"

      const confirmBtn = document.createElement("button")
      confirmBtn.style.display = "none"
      confirmBtn.innerText = "Spara"
      confirmBtn.setAttribute("id", todo.id)
      confirmBtn.setAttribute("class", "confirm-btn")
      date.className = "todo-date"
      const svgIcon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      )
      const svgPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      )
      svgIcon.setAttribute("fill", "none")
      svgIcon.setAttribute("width", "24px")
      svgIcon.setAttribute("height", "24px")
      svgIcon.setAttribute("class", "todo-icon")
      svgIcon.setAttribute("viewbox", "0 0 24 24")
      svgIcon.setAttribute("stroke", "currentColor")
      svgIcon.setAttribute("stroke-width", "1.5")
      svgIcon.setAttribute("id", todo.id)
      svgPath.setAttribute(
        "d",
        "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      )
      svgPath.setAttribute("stroke-linecap", "round")
      svgPath.setAttribute("stroke-linejoin", "round")
      svgPath.setAttribute("stroke-width", "2")
      svgIcon.appendChild(svgPath)

      svgIcon.addEventListener("click", removeTodo)
      title.textContent = todo.Title
      description.textContent = todo.Description

      date.textContent = moment(todo.Date).fromNow()

      title.addEventListener("click", () => {
        toggle()
        toggler
          ? (confirmBtn.style.display = "none")
          : (confirmBtn.style.display = "block")
      })

      description.addEventListener("click", () => {
        toggle()
        toggler
          ? (confirmBtn.style.display = "none")
          : (confirmBtn.style.display = "block")
      })

      date.addEventListener("click", () => {
        toggle()
        toggler
          ? (confirmBtn.style.display = "none") &&
            (editDate.style.display = "none")
          : (confirmBtn.style.display = "block") &&
            (editDate.style.display = "block")
      })

      confirmBtn.addEventListener("click", (e) =>
        editTodo(e, title.innerText, description.innerText, editDate.value)
      )

      todoDiv.appendChild(title)
      todoDiv.appendChild(description)
      todoDiv.appendChild(confirmBtn)
      todoDiv.appendChild(editDate)
      todoDiv.appendChild(date)
      todoDiv.appendChild(svgIcon)
      section.appendChild(todoDiv)
    })
  })
}

printTodos()
