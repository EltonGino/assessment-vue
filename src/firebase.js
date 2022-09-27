import firebase from "firebase/app";
import "firebase/database";

// modificar de acordo com firebase
let firebaseConfig = {
  apiKey: "AIzaSyAmIkFQkz3F_Q-Wfo855wQ6hQ34oQmwA30",
  authDomain: "invoice-app-2b950.firebaseapp.com",
  projectId: "invoice-app-2b950",
  storageBucket: "invoice-app-2b950.appspot.com",
  messagingSenderId: "985659662055",
  appId: "1:985659662055:web:a2fdeae46fe31ecdb38c42"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();