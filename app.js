// ==========================
//  LANG SYSTEM
// ==========================
const langText = {
    en: { title: "Welcome to ABMS", login: "Login" },
    id: { title: "Selamat Datang di ABMS", login: "Masuk" },
    my: { title: "Selamat Datang ke ABMS", login: "Masuk" },
    th: { title: "ยินดีต้อนรับสู่ ABMS", login: "เข้าสู่ระบบ" }
};

function changeLang() {
    let lang = document.getElementById("lang").value;
    document.getElementById("title").innerText = langText[lang].title;
    document.getElementById("loginBtn").innerText = langText[lang].login;
}


// ==========================
//  FIREBASE CONFIG
// ==========================
const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_AUTH.firebaseapp.com",
    projectId: "YOUR_ID",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


// ==========================
//  LOGIN EMAIL
// ==========================
function loginEmail() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            alert("Login success!");
            window.location.href = "dashboard.html";
        })
        .catch(err => alert(err.message));
}


// ==========================
//  LOGIN GOOGLE
// ==========================
function loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(() => {
            alert("Google Login success!");
            window.location.href = "dashboard.html";
        })
        .catch(err => alert(err.message));
}


// ==========================
//  LOGIN FACEBOOK
// ==========================
function loginFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
        .then(() => {
            alert("Facebook Login success!");
            window.location.href = "dashboard.html";
        })
        .catch(err => alert(err.message));
}
