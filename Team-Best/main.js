import './style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAccE4Vn7dI2N-lBpK6UmoCWJBIxCLg8Gc",
  authDomain: "team-best.firebaseapp.com",
  projectId: "team-best",
  storageBucket: "team-best.appspot.com",
  messagingSenderId: "990147430148",
  appId: "1:990147430148:web:7212d6957e86e22e51f251"
};

// Initialize Firebase
function writePostData(userID, Title, Descriptiopn, Date) {
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db, 'Todo/' + userID);

set(reference, {
  Title: name,
  Descriptiopn: info,
  Date: 2342
});
}

writePostData("Jesper", "Test", "Mer test text", 1000);

// firebase.initializeApp(firebaseConfig);

//   var database = firebase.database();

//   var ref = database.ref('users');


// let database = app.database();
// database = app.ref();
// database.on('value', function(snapshot) {
//   const data = snapshot.val();
//   console.log(data);
// });



// createTodo();