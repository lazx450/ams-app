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


.then(() => {
    alert("Google Login success!");
    window.location.href = "index_dasbrod.html";
})


.then(() => {
    alert("Facebook Login success!");
    window.location.href = "index_dasbrod.html";
}) 
