let modalChangeExam = document.querySelector(".modal-change-exam");
let overlay = document.querySelector(".overlay");
let btnChangeExam = document.querySelector(".change-exam");
let btnCancel = document.querySelector(".img-cancel");
let btnConfirm = document.querySelector(".img-confirm");
let btnExit = document.querySelector(".exit")
let modalExitExam = document.querySelector(".modal-exit-exam");
let btnConfirmExit = document.querySelector(".img-exit");
let btnContinue = document.querySelector(".img-continue");

btnChangeExam.addEventListener("click", function(){
    modalChangeExam.style.display = "flex";
    overlay.style.display = "block";
});

btnCancel.addEventListener("click", function(){
    modalChangeExam.style.display = "none";
    overlay.style.display = "none";
});

btnConfirm.addEventListener('click', function(){
    document.location.href = "/team2-mankai-user/ExamManager/pages/exam-grammar.html";
});

btnExit.addEventListener("click", function(){
    modalExitExam.style.display = "flex";
    overlay.style.display = "block";
});

btnConfirmExit.addEventListener("click", function(){
    document.location.href = "/team2-mankai-user/ExamManager/pages/list-exam.html"
});

btnContinue.addEventListener("click", function(){
    modalExitExam.style.display = "none";
    overlay.style.display = "none";
});