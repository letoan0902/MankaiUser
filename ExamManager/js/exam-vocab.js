let modalChangeExam = document.querySelector(".modal-change-exam");
let overlay = document.querySelector(".overlay");
let btnChangeExam = document.querySelector(".change-exam");
let btnCancel = document.querySelector(".img-cancel");
let btnConfirm = document.querySelector(".img-confirm");
let btnExit = document.querySelector(".exit")
let modalExitExam = document.querySelector(".modal-exit-exam");
let btnConfirmExit = document.querySelector(".img-exit");
let btnContinue = document.querySelector(".img-continue");
let scoreExamVocab = parseInt(localStorage.getItem("scoreExamVocab")) || 0;


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

let userSelection = [];

let isChecked = false;


let containerListAnswer = document.querySelector(".container-list-answer");
function renderVocab(){
    let html = user.studyMankai[2].detail[0].exams[0].structure[0].questions[0].list.map((data,index) =>{
        return`
            <div class="container-answer">
                    <div class="number-order">
                        <p>Câu ${index + 1}</p>
                        <img src="/team2-mankai-user/assets/icons/icon-close-quang.svg" alt="">
                    </div>
                    <p class="text-question">${index + 1}. &#160;&#160; <span>${data.special}</span>${data.name}</p>
                    <div class="answer">
                        <p class="option-answer">${data.select[0].value}</p>
                        <p class="option-answer">${data.select[1].value}</p>
                        <p class="option-answer">${data.select[2].value}</p>
                        <p class="option-answer">${data.select[3].value}</p>
                    </div>
                </div>
        `
    });
    let convert = html.join("");
    containerListAnswer.innerHTML = convert;

    attachAnswerEvents();
}

//hàm gắn sự kiện cho các đáp án
function attachAnswerEvents() {
    let questionContainers = containerListAnswer.querySelectorAll(".container-answer");
    questionContainers.forEach((container,questionIndex) => {
        let answers = container.querySelectorAll(".option-answer");
        answers.forEach((answer, answerIndex) => {
            answer.addEventListener("click", function (event) {
                if(isChecked){
                    return;
                }
                answers.forEach((ans) => {
                    ans.style.borderColor = "";
                    ans.style.color = "";
                });
                event.target.style.borderColor = "#0BA5EC";
                event.target.style.color = "#0BA5EC";

                userSelection[questionIndex] = answerIndex;
            });
        });
    });
}



let btnScan = document.querySelector(".scan");

function checkAnswer(){
    isChecked = true;
    let questions = user.studyMankai[2].detail[0].exams[0].structure[0].questions[0].list;
    let questionContainers = containerListAnswer.querySelectorAll(".container-answer");
    scoreExamVocab = 0;
    questionContainers.forEach((container, questionsIndex) => {
        let answers = container.querySelectorAll(".option-answer");
        let userSelectedAnswerIndex = userSelection[questionsIndex];

        let correcAnswerIndex = questions[questionsIndex].select.findIndex((option) => option.check === true);
        answers.forEach((answer, answerIndex) => {
            answer.style.borderColor = "";
            answer.style.color = "";

            if(answerIndex === correcAnswerIndex){
                answer.style.borderColor = "rgb(6, 253, 6)";
                answer.style.color = "rgb(6, 253, 6)";

            }

            if(userSelection.length === 0){
                scoreExamVocab = 0;
                return;
            }

            if(answerIndex === userSelectedAnswerIndex && answerIndex !== correcAnswerIndex){
                answer.style.borderColor = "red";
                answer.style.color = "red";

            }
        });

        if(userSelectedAnswerIndex !== undefined && userSelectedAnswerIndex === correcAnswerIndex){
            scoreExamVocab++;
        }
    });
    localStorage.setItem("scoreExamVocab", JSON.stringify(scoreExamVocab));
}

btnScan.addEventListener("click", checkAnswer);

renderVocab();
saveData();



