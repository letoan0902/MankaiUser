let btnSubmitExam = document.querySelector(".submit-exam");
let modalScore = document.querySelector(".pop-up");
let overlay = document.querySelector(".overlay");
let btnReturnHomePage = document.querySelector(".btn-return-home-page");
let btnContinueExam = document.querySelector(".btn-continue-exam");
let btnExit = document.querySelector("#exit");
let btnConfirmExit = document.querySelector(".img-exit");
let btnContinue = document.querySelector(".img-continue");
let modalExitExam = document.querySelector(".modal-exit-exam");
btnSubmitExam.addEventListener("click", function(){
    modalScore.style.display = "block";
    overlay.style.display = "block";
});

btnReturnHomePage.addEventListener("click", function(){
    document.location.href = "/team2-mankai-user/TopicManager-VocabularyManager/pages/homePage.html";
})

btnExit.addEventListener("click", function(){
    modalExitExam.style.display = "flex";
    overlay.style.display = "block";
});

btnContinueExam.addEventListener("click", function(){
    modalScore.style.display = "none";
    overlay.style.display = "none";
});

btnConfirmExit.addEventListener("click", function(){
    document.location.href = "/team2-mankai-user/ExamManager/pages/list-exam.html"
});

btnContinue.addEventListener("click", function(){
    modalExitExam.style.display = "none";
    overlay.style.display = "none";
});