const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "john" && password === "johndev") {
        alert("Você fez login com sucesso.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

