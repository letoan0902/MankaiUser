// let users = localStorage.getItem("users");
let checkUser = localStorage.getItem("user");
if(checkUser){
    // location.href = "/team2-mankai-user/TopicManager-VocabularyManager/pages/homePage.html";
}

let inputTextSignin = document.querySelector(".input-text-signin");
let inputPasswordSignin = document.querySelector(".input-password-signin");
let inputTextForgot = document.querySelector(".input-text-forgot");
let loginButton = document.querySelector(".login-button");
let forgotPassword = document.querySelector(".forgot-password");
let backToLogin = document.querySelector(".back-to-login");
let loginForm = document.querySelector(".login-form");
let forgotForm = document.querySelector(".forgot-password-form");
let passwordIcon = document.querySelector(".password-icon");
let hiddenEyeIcon = document.querySelector(".hidden-eye-icon");
let eyeIcon = document.querySelector(".eye-icon");
let usernameError = document.querySelector(".username-error");
let passwordError = document.querySelector(".password-error");
let forgotError = document.querySelector(".forgot-error");

function showError(element, message) {
    element.textContent = message;
    element.classList.remove("hidden");
}

function hideError(element) {
    element.classList.add("hidden");
}

inputTextSignin.addEventListener("input", () => {
    hideError(usernameError);
});

inputPasswordSignin.addEventListener("input", () => {
    hideError(passwordError);
});

inputTextForgot.addEventListener("input", () => {
    hideError(forgotError);
});

passwordIcon.addEventListener("click", () => {
    if(inputPasswordSignin.type == "password"){
        inputPasswordSignin.type = "text";
        hiddenEyeIcon.classList.add("hidden");
        eyeIcon.classList.remove("hidden");
    } else {
        inputPasswordSignin.type = "password";
        hiddenEyeIcon.classList.remove("hidden");
        eyeIcon.classList.add("hidden");
    }
});

forgotPassword.addEventListener("click", () =>{
    loginForm.classList.add("hidden");
    forgotForm.classList.remove("hidden");
    hideError(usernameError);
    hideError(passwordError);
});

backToLogin.addEventListener("click", () => {
    forgotForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    hideError(forgotError);
});

loginButton.addEventListener("click", () => {
    let username = inputTextSignin.value;
    let password = inputPasswordSignin.value;
    let checkUsername = checkData(username, "text");
    if(checkUsername == "valid"){
        hideError(usernameError);
        let checkPassword = checkData(password, "password");
        if(checkPassword == "valid"){
            hideError(passwordError);
            let check = checkData(username, "user", password);
            if(check == "valid"){
                inputTextSignin.value = "";
                inputPasswordSignin.value = "";
                location.href = "/team2-mankai-user/TopicManager-VocabularyManager/pages/homePage.html";
            } else {
                alert(check);
            }
        } else {
            showError(passwordError, checkPassword);
        }
    } else {
        showError(usernameError, checkUsername);
    }
});

