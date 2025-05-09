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

let resultVocab = document.querySelector("#result-vocab");
let resultGrammar = document.querySelector("#result-grammar");
let resultListen = document.querySelector("#result-listen");

let scoreExamVocab = parseInt(localStorage.getItem("scoreExamVocab")) || 0;
let scoreExamGrammar = parseInt(localStorage.getItem("scoreExamGrammar")) || 0;
let scoreExamListen = parseInt(localStorage.getItem("scoreExamListen")) || 0;

btnSubmitExam.addEventListener("click", function(){
    scoreExamVocab = parseInt(localStorage.getItem("scoreExamVocab")) || 0;
    scoreExamGrammar = parseInt(localStorage.getItem("scoreExamGrammar")) || 0;
    scoreExamListen = parseInt(localStorage.getItem("scoreExamListen")) || 0;
    modalScore.style.display = "block";
    overlay.style.display = "block";
    resultVocab.innerHTML = `${scoreExamVocab}/${user.studyMankai[2].detail[0].exams[0].structure[0].questions[0].list.length}` ;
    resultGrammar.innerHTML = `${scoreExamGrammar}/${user.studyMankai[2].detail[0].exams[0].structure[1].questions[0].list.length}`;
    resultListen.innerHTML = `${scoreExamListen}/${user.studyMankai[2].detail[0].exams[0].structure[2].questions[0].list.length}` ;
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

let isChecked = false;
let allAnswer = document.querySelector(".all-answer");
let userSelection = [];
function renderExamGrammar(){
    let html = user.studyMankai[2].detail[0].exams[0].structure[1].questions[0].list.map((data, index) => {
        return `
            <div class="container-answer">
                <div class="answer">
                    <p>${index + 1}. ${data.name}</p>
                    <img src="/team2-mankai-user/assets/icons/listAnswer.svg" alt="">
                </div>
        
                <div class="list-answer">
                    <div class="answer-item">
                        <span>A</span>
                        <p>${data.select[0].value}</p>
                    </div>
                    <div class="answer-item">
                        <span>B</span>
                        <p>${data.select[1].value}</p>
                    </div>
                    <div class="answer-item">
                        <span>C</span>
                        <p>${data.select[2].value}</p>
                    </div>
                    <div class="answer-item">
                        <span>D</span>
                        <p>${data.select[3].value}</p>
                    </div>
                </div>
            </div>
        `
    });
    
    let convert = html.join("");
    allAnswer.innerHTML = convert;

    attachAnswerEvents();
}

let containerAllAnswer = document.querySelector(".all-answer");
function attachAnswerEvents(){
    let containerListAnswer = containerAllAnswer.querySelectorAll(".list-answer");
    let answerCompletedSpans = document.querySelectorAll(".answer-exam-complete span");
    containerListAnswer.forEach((container, indexQuestion) => {
        let answers = container.querySelectorAll(".answer-item");
        answers.forEach((answer, answerIndex) => {
            answer.addEventListener("click", function(event){
                if(isChecked){
                    return;
                }
                answers.forEach((ans) => {
                    ans.style.borderColor = "";
                    ans.style.boxShadow = "";

                });
                event.target.style.borderColor = "#0BA5EC";
                event.target.style.boxShadow = "0px 4px 0px 0px #0BA5EC";

                userSelection[indexQuestion] = answerIndex;
                answerCompletedSpans[indexQuestion].style.borderColor = "#F37142";
                answerCompletedSpans[indexQuestion].style.color = "#F37142";
                answerCompletedSpans[indexQuestion].style.backgroundColor = "#FFF7F4";
            });
        });
    });
}

let btnScan = document.querySelector("#scan");


function checkAnswer(){
    isChecked = true;
    let questions = user.studyMankai[2].detail[0].exams[0].structure[1].questions[0].list;
    let containerListAnswer = containerAllAnswer.querySelectorAll(".list-answer");
    containerListAnswer.forEach((container, indexQuestion) => {
        let answers = container.querySelectorAll(".answer-item");
        let userSelectedAnswerIndex = userSelection[indexQuestion];

        let correctAnswerIndex = questions[indexQuestion].select.findIndex((option) => option.check === true);
        answers.forEach((answer, indexAnwer) => {
            answer.style.borderColor = "";
            answer.style.boxShadow = "";

            if(indexAnwer === correctAnswerIndex){
                answer.style.borderColor = "rgb(6, 253, 6)";
                answer.style.boxShadow = "0px 4px 0px 0px rgb(6, 253, 6)";

            }

            if(userSelection.length === 0){
                scoreExamVocab = 0;
                return;
            }

            if(indexAnwer === userSelectedAnswerIndex && indexAnwer !== correctAnswerIndex){
                answer.style.borderColor = "red";
                answer.style.boxShadow = "0px 4px 0px 0px red";

            }
        });

        if(userSelectedAnswerIndex !== undefined && userSelectedAnswerIndex === correctAnswerIndex){
            scoreExamGrammar++;
        }
    });
    localStorage.setItem("scoreExamGrammar", JSON.stringify(scoreExamGrammar));

}
btnScan.addEventListener("click", checkAnswer);

let pictureListening = document.querySelector(".picture-listening");
let rectangle = document.querySelector(".rectangle");
let timeListenvolume = document.querySelector(".timeListen-volume");

timeListenvolume.style.display = "none";
pictureListening.style.display = "block";
rectangle.style.display = "block";
pictureListening.addEventListener("click", function(){
    pictureListening.style.display = "none";
    rectangle.style.display = "none";
    timeListenvolume.style.display = "flex";

});

let answerExamComplete = document.querySelector(".answer-exam-complete");
let totalAnswerComplete = user.studyMankai[2].detail[0].exams[0].structure[1].questions[0].list.length;
for(let i = 0; i < totalAnswerComplete; i++){
    let answerCompleted = document.createElement("span");
    answerCompleted.textContent = i + 1;
    answerExamComplete.appendChild(answerCompleted);
}

renderExamGrammar();
saveData();


