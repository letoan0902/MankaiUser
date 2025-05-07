let btnSubmitExam = document.querySelector(".submit-exam");
let modalScore = document.querySelector(".pop-up");
let overlay = document.querySelector(".overlay");
let btnReturnHomePage = document.querySelector(".btn-return-home-page");
let btnContinueExam = document.querySelector(".btn-continue-exam");
let btnExit = document.querySelector("#exit");
let btnConfirm = document.querySelector(".img-confirm");
let btnCancel = document.querySelector(".img-cancel");
let modalExitExam = document.querySelector(".modal-exit-exam");
let modalChangeExam = document.querySelector(".modal-change-exam");
let btnConfirmExit = document.querySelector(".img-exit");
let btnContinue = document.querySelector(".img-continue");
let btnChangeExam = document.querySelector("#change-exam");

btnSubmitExam.addEventListener("click", function(){
    modalScore.style.display = "block";
    overlay.style.display = "block";
});

btnReturnHomePage.addEventListener("click", function(){
    document.location.href = "/team2-mankai-user/TopicManager-VocabularyManager/pages/homePage.html";
})

btnContinueExam.addEventListener("click", function(){
    modalScore.style.display = "none";
    overlay.style.display = "none";
});


btnExit.addEventListener("click", function(){
    modalExitExam.style.display = "flex";
    overlay.style.display = "block";
});

btnChangeExam.addEventListener("click", function(){
    modalChangeExam.style.display = "flex";
    overlay.style.display = "block";
});

btnConfirm.addEventListener('click', function(){
    document.location.href = "/team2-mankai-user/ExamManager/pages/exam-listening.html";
});

btnCancel.addEventListener("click", function(){
    modalChangeExam.style.display = "none";
    overlay.style.display = "none";
});

btnConfirmExit.addEventListener("click", function(){
    document.location.href = "/team2-mankai-user/ExamManager/pages/list-exam.html"
});

btnContinue.addEventListener("click", function(){
    modalExitExam.style.display = "none";
    overlay.style.display = "none";
});