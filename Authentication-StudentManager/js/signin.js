let checkUser = localStorage.getItem("user");
if(checkUser){
    location.href = "../../TopicManager-VocabularyManager/pages/homePage.html";
}

let inputTextSignin = document.querySelector(".input-text-signin");
let inputPasswordSignin = document.querySelector(".input-password-signin");
let inputTextForgot = document.querySelector(".input-text-forgot");

let loginButton = document.querySelector(".login-button:not(.login-button-forgot)");
let forgotButton = document.querySelector(".login-button-forgot");

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
let otpVerification = document.querySelector(".otp-verification");
let otpInputs = document.querySelectorAll(".otp-input");
let otpError = document.querySelector(".otp-error");
let resendOtp = document.querySelector(".resend-otp");

let newPasswordForm = document.querySelector(".new-password-form");
let inputNewPassword = document.querySelector(".input-new-password");
let inputConfirmPassword = document.querySelector(".input-confirm-password");
let newPasswordError = document.querySelector(".new-password-error");
let confirmPasswordError = document.querySelector(".confirm-password-error");
let passwordIconNew = document.querySelector(".password-icon-new");
let passwordIconConfirm = document.querySelector(".password-icon-confirm");
let hiddenEyeIconNew = document.querySelector(".hidden-eye-icon-new");
let eyeIconNew = document.querySelector(".eye-icon-new");
let hiddenEyeIconConfirm = document.querySelector(".hidden-eye-icon-confirm");
let eyeIconConfirm = document.querySelector(".eye-icon-confirm");

let currentUsername = "";

let forgotUsernameField = document.querySelector(".forgot-password-form .form-group > .input-field:not(.otp-verification)");

function showError(element, message) {
    element.textContent = message;
    element.classList.remove("hidden");
}

function hideError(element) {
    element.classList.add("hidden");
}

function togglePasswordVisibility(inputField, hiddenIcon, visibleIcon) {
    if (inputField.type === "password") {
        inputField.type = "text";
        hiddenIcon.classList.add("hidden");
        visibleIcon.classList.remove("hidden");
    } else {
        inputField.type = "password";
        hiddenIcon.classList.remove("hidden");
        visibleIcon.classList.add("hidden");
    }
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

inputNewPassword.addEventListener("input", () => {
    hideError(newPasswordError);
});

inputConfirmPassword.addEventListener("input", () => {
    hideError(confirmPasswordError);
});

passwordIcon.addEventListener("click", () => {
    togglePasswordVisibility(inputPasswordSignin, hiddenEyeIcon, eyeIcon);
});

passwordIconNew.addEventListener("click", () => {
    togglePasswordVisibility(inputNewPassword, hiddenEyeIconNew, eyeIconNew);
});

passwordIconConfirm.addEventListener("click", () => {
    togglePasswordVisibility(inputConfirmPassword, hiddenEyeIconConfirm, eyeIconConfirm);
});

forgotPassword.addEventListener("click", () =>{
    loginForm.classList.add("hidden");
    forgotForm.classList.remove("hidden");
    hideError(usernameError);
    hideError(passwordError);
    hideError(forgotError);
    hideError(otpError);
    hideError(newPasswordError);
    hideError(confirmPasswordError);
    
    otpVerification.classList.add("hidden");
    newPasswordForm.classList.add("hidden");
    
    forgotUsernameField.classList.remove("hidden");
    
    inputTextForgot.value = "";
    resetOtpInputs();
    inputNewPassword.value = "";
    inputConfirmPassword.value = "";
    
    forgotButton.querySelector(".button-text").textContent = "Đăng nhập";
    
    localStorage.removeItem("otpCode");
    currentUsername = "";
});

backToLogin.addEventListener("click", () => {
    forgotForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    hideError(forgotError);
    hideError(otpError);
    hideError(newPasswordError);
    hideError(confirmPasswordError);
    
    otpVerification.classList.add("hidden");
    newPasswordForm.classList.add("hidden");
    
    forgotUsernameField.classList.remove("hidden");
    
    inputTextForgot.value = "";
    resetOtpInputs();
    inputNewPassword.value = "";
    inputConfirmPassword.value = "";
    forgotButton.querySelector(".button-text").textContent = "Đăng nhập";
    
    localStorage.removeItem("otpCode");
    currentUsername = "";
});

function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

// OTP Input Handling
otpInputs.forEach(input => {
    input.addEventListener("keyup", (e) => {
        const currentIndex = parseInt(input.getAttribute("data-index"));
        if (e.key >= 0 && e.key <= 9) {
            input.value = e.key;
            
            if (currentIndex < 6) {
                const nextInput = document.querySelector(`.otp-input[data-index="${currentIndex + 1}"]`);
                if (nextInput) nextInput.focus();
            }
        } else if (e.key === "Backspace") {
            input.value = "";
            if (currentIndex > 1) {
                const prevInput = document.querySelector(`.otp-input[data-index="${currentIndex - 1}"]`);
                if (prevInput) prevInput.focus();
            }
        }
        
        hideError(otpError);
    });
    
    input.addEventListener("paste", (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").trim();
        if (/^\d+$/.test(pasteData) && pasteData.length <= 6) {
            for (let i = 0; i < pasteData.length && i < 6; i++) {
                const targetInput = document.querySelector(`.otp-input[data-index="${i + 1}"]`);
                if (targetInput) {
                    targetInput.value = pasteData[i];
                }
            }
            
            const focusIndex = Math.min(pasteData.length, 6);
            if (focusIndex < 6) {
                const nextInput = document.querySelector(`.otp-input[data-index="${focusIndex + 1}"]`);
                if (nextInput) nextInput.focus();
            }
        }
    });
});

function getOtpValue() {
    let otp = "";
    otpInputs.forEach(input => {
        otp += input.value;
    });
    return otp;
}

function resetOtpInputs() {
    otpInputs.forEach(input => {
        input.value = "";
    });
    if (otpInputs.length > 0) {
        otpInputs[0].focus();
    }
}

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
                Swal.fire({
                    title: "Đăng nhập thành công!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                }).then(() => {
                    location.href = "../../TopicManager-VocabularyManager/pages/homePage.html";
                });
            } else {
                Swal.fire({
                    title: "Đăng nhập thất bại!",
                    text: check,
                    icon: "error",
                    confirmButtonColor: "#F37142",
                    confirmButtonText: "Thử lại"
                });
            }
        } else {
            showError(passwordError, checkPassword);
        }
    } else {
        showError(usernameError, checkUsername);
    }
});


forgotButton.addEventListener("click", () => {
    if (forgotUsernameField && !forgotUsernameField.classList.contains("hidden")) {
        const username = inputTextForgot.value;
        let checkUsername = checkData(username, "text");
        
        if (checkUsername === "valid") {
            let userFound = false;
            let userIndex = -1;
            for (let i = 0; i < users.length; i++) {
                if (users[i].username === username || users[i].gmail === username) {
                    userFound = true;
                    userIndex = i;
                    break;
                }
            }
            
            if (userFound) {
                currentUsername = username;
                
                forgotUsernameField.classList.add("hidden");
                otpVerification.classList.remove("hidden");
                forgotButton.querySelector(".button-text").textContent = "Xác minh";
                
                const otpCode = generateOTP();
                localStorage.setItem("otpCode", otpCode);
                
                if (otpInputs.length > 0) {
                    otpInputs[0].focus();
                }
                
                Swal.fire({
                    title: "Gửi mã OTP thành công!",
                    html: `Mã OTP của bạn là: <strong>${otpCode}</strong><br>Vui lòng điền vào 6 ô để xác minh.`,
                    icon: "success",
                    confirmButtonColor: "#F37142",
                    confirmButtonText: "Đóng"
                });
            } else {
                showError(forgotError, "Tên đăng nhập hoặc email không tồn tại");
            }
        } else {
            showError(forgotError, checkUsername);
        }
    }
    else if (!otpVerification.classList.contains("hidden")) {
        const otp = getOtpValue();
        const savedOtp = localStorage.getItem("otpCode");
        
        if (otp.length === 6 && /^\d{6}$/.test(otp)) {
            if (otp === savedOtp) {
                otpVerification.classList.add("hidden");
                newPasswordForm.classList.remove("hidden");
                forgotButton.querySelector(".button-text").textContent = "Cập nhật";
                
                inputNewPassword.focus();
                
                Swal.fire({
                    title: "Xác minh OTP thành công!",
                    text: "Vui lòng tạo mật khẩu mới.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            } else {
                showError(otpError, "Mã OTP không chính xác");
                
                Swal.fire({
                    title: "Xác minh OTP thất bại!",
                    text: "Mã OTP không chính xác. Vui lòng kiểm tra lại.",
                    icon: "error",
                    confirmButtonColor: "#F37142",
                    confirmButtonText: "Thử lại"
                });
            }
        } else {
            showError(otpError, "Vui lòng nhập đầy đủ 6 số OTP");
            
            Swal.fire({
                title: "Lỗi xác minh",
                text: "Vui lòng nhập đầy đủ 6 số OTP.",
                icon: "warning",
                confirmButtonColor: "#F37142",
                confirmButtonText: "Đóng"
            });
        }
    }
    else if (!newPasswordForm.classList.contains("hidden")) {
        const newPassword = inputNewPassword.value;
        const confirmPassword = inputConfirmPassword.value;
        
        let checkNewPassword = checkData(newPassword, "password");
        if (checkNewPassword === "valid") {
            hideError(newPasswordError);
            
            if (newPassword === confirmPassword) {
                hideError(confirmPasswordError);
                
                let userUpdated = false;
                for (let i = 0; i < users.length; i++) {
                    if (users[i].username === currentUsername || users[i].gmail === currentUsername) {
                        users[i].password = newPassword;
                        user = users[i];
                        userUpdated = true;
                        saveData();
                        break;
                    }
                }
                
                if (userUpdated) {
                    Swal.fire({
                        title: "Thành công!",
                        html: "Mật khẩu đã được cập nhật thành công. <br>Đang chuyển hướng đến trang chủ.",
                        icon: "success",
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        allowOutsideClick: false
                    }).then(() => {
                        newPasswordForm.classList.add("hidden");
                        forgotUsernameField.classList.remove("hidden");
                        inputTextForgot.value = "";
                        inputNewPassword.value = "";
                        inputConfirmPassword.value = "";
                        forgotButton.querySelector(".button-text").textContent = "Đăng nhập";
                        localStorage.removeItem("otpCode");
                        window.location.href = "../../TopicManager-VocabularyManager/pages/homePage.html";
                    });
                } else {
                    Swal.fire({
                        title: "Lỗi!",
                        text: "Có lỗi xảy ra khi cập nhật mật khẩu!",
                        icon: "error",
                        confirmButtonColor: "#F37142",
                        confirmButtonText: "Đóng"
                    });
                }
            } else {
                showError(confirmPasswordError, "Mật khẩu xác nhận không khớp");
                Swal.fire({
                    title: "Lỗi!",
                    text: "Mật khẩu xác nhận không khớp với mật khẩu mới.",
                    icon: "error",
                    confirmButtonColor: "#F37142",
                    confirmButtonText: "Thử lại"
                });
            }
        } else {
            showError(newPasswordError, checkNewPassword);
            Swal.fire({
                title: "Lỗi!",
                text: checkNewPassword,
                icon: "error",
                confirmButtonColor: "#F37142",
                confirmButtonText: "Thử lại"
            });
        }
    }
});

resendOtp.addEventListener("click", () => {
    resetOtpInputs();
    const otpCode = generateOTP();
    localStorage.setItem("otpCode", otpCode);
    Swal.fire({
        title: "Gửi lại mã thành công!",
        html: `Mã OTP mới của bạn là: <strong>${otpCode}</strong><br>Vui lòng điền vào 6 ô để xác minh.`,
        icon: "success",
        confirmButtonColor: "#F37142",
        confirmButtonText: "Đóng"
    });
});