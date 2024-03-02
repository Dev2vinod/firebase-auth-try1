// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateEmail,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVOzGHTH46PfsBz6hJuiocqyC29SDOvzc",
  authDomain: "test1-auth-89cf6.firebaseapp.com",
  projectId: "test1-auth-89cf6",
  storageBucket: "test1-auth-89cf6.appspot.com",
  messagingSenderId: "953274477166",
  appId: "1:953274477166:web:55a462a412a489f92f947f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
// let phone = document.getElementById("phone").value;

// createUserWithEmailAndPassword(auth, "mohhaider91@gmail.com", "Makemefree14$")
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     console.log(user, "user value of email and password");
//     //     console.log(user.UserImpl.uid);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage, "error code and message");
//   });

// sign in eamil and password
// signInWithEmailAndPassword(auth, "cp@gamil.com", "123456")
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user, "signin with email and password");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage, "error message in sign in method");
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log("user is got with uid", uid, user);
//   } else {
//     // User is signed out
//     console.log("user is not found");
//     // ...
//   }
// });

// update email

// window.updateProfile =updateProfile

// updateEmail(auth.currentUser, "rahul@gamil.com")
//   .then(() => {
//     // Email updated!
//     console.log("emil is updated ", "rahul@gamil.com");
//   })
//   .catch((error) => {
//     // An error occurred
//     console.log("error in email updation", auth.currentUser);
//   });

// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     console.log("email verification");
//   })
//   .catch((error) => {
//     // An error occurred
//     console.log("error in email verification", error);
//   });

// sendPasswordResetEmail(auth, "mohhaider91@gmail.com")
//   .then(() => {
//     // Password reset email sent!
//     console.log(email, "email to send password");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage, "error in message");
//     // ..
//   });

// const user = auth.currentUser;

// deleteUser(user)
//   .then(() => {
//     // User deleted.
//     console.log("delete current user", user);
//   })
//   .catch((error) => {
//     // An error ocurred
//     console.log("error in delete user", error);
//     // ...
//   });

signOut(auth)
  .then(() => {
    // Sign-out successful.
    console.log(auth, "sign out pakkka");
  })
  .catch((error) => {
    // An error happened.
    console.log(error, "error in sign out");
  });
