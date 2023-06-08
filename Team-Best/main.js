import "./style.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAccE4Vn7dI2N-lBpK6UmoCWJBIxCLg8Gc",
  authDomain: "team-best.firebaseapp.com",
  projectId: "team-best",
  storageBucket: "team-best.appspot.com",
  messagingSenderId: "990147430148",
  appId: "1:990147430148:web:7212d6957e86e22e51f251",
}

initializeApp(firebaseConfig)

const database = getFirestore()

const collectRef = collection(database, "todos")

getDocs(collectRef).then((snapshot) => {
  let todos = []
  snapshot.docs.forEach((doc) => {
    todos.push({ ...doc.data(), id: doc.id })
  })
  console.log(todos)
})
