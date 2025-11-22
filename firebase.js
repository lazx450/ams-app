import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0Q4lKylzCFN-7-_q7340SwSB2ETgI0pw",
  authDomain: "abms-6632c.firebaseapp.com",
  projectId: "abms-6632c",
  storageBucket: "abms-6632c.firebasestorage.app",
  messagingSenderId: "624837038904",
  appId: "1:624837038904:web:26df8824457f3cdaec67cd",
  measurementId: "G-PMY1WQB3P7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function loginWithGoogle() {
  return signInWithPopup(auth, provider)
    .then(result => {
      alert("Login Google Berhasil!");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("Login gagal!");
      console.error(error);
    });
    }
