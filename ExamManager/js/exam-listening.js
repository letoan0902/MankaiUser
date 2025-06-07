let btnSubmitExam = document.querySelector(".submit-exam");
let modalScore = document.querySelector(".pop-up");
let overlay = document.querySelector(".overlay");
let btnReturnHomePage = document.querySelector(".btn-return-home-page");
let btnContinueExam = document.querySelector(".btn-continue-exam");
let btnExit = document.querySelector("#exit");
let btnCancel = document.querySelector(".img-cancel");
let modalExitExam = document.querySelector(".modal-exit-exam");
let btnConfirmExit = document.querySelector(".img-exit");
let btnContinue = document.querySelector(".img-continue");

let resultVocab = document.querySelector("#result-vocab");
let resultGrammar = document.querySelector("#result-grammar");
let resultListen = document.querySelector("#result-listen");

let scoreExamVocab = parseInt(localStorage.getItem("scoreExamVocab")) || 0;
let scoreExamGrammar = parseInt(localStorage.getItem("scoreExamGrammar")) || 0;
let scoreExamListen = parseInt(localStorage.getItem("scoreExamListen")) || 0;

let indexExamN = parseInt(localStorage.getItem("indexExamN")) || 0;
let indexExamS = parseInt(localStorage.getItem("indexExamS")) || 0;
let isCheckAnswer = false;

let modalConfirmSubmit = document.querySelector(".modal-confirm-submit");
let btnConfirmSubmit = document.querySelector(".img-confirm-submit");
let btnCancelSubmit = document.querySelector(".img-cancel-submit");

function calculateTotalQuestions(indexExamN, indexExamS) {
    let exam = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure;

    let totalVocabQuestions = 0;
    let totalGrammarQuestions = 0;
    let totalListeningQuestions = 0;
  
      totalVocabQuestions = exam[0].questions.reduce((total, question) => {
        return total + question.list.length 
      }, 0);

      totalGrammarQuestions = exam[1].questions.reduce((total, question) => {
        return total + question.list.length
      }, 0);

      totalListeningQuestions = exam[2].questions.reduce((total, question) => {
        return total + question.list.length 
      }, 0);

    return {
      totalVocabQuestions,
      totalGrammarQuestions,
      totalListeningQuestions,
    };
}

btnSubmitExam.addEventListener("click", function () {
    modalConfirmSubmit.style.display = "flex";
    modalConfirmSubmit.style.animation = 'slideIn 0.3s ease forwards';
    overlay.style.display = "block";
});

btnConfirmSubmit.addEventListener("click", function(){
    modalConfirmSubmit.style.display = "none";
    modalScore.style.display = "block";
    modalScore.style.animation = 'slideIn 0.3s ease forwards';
    overlay.style.display = "block";
    if(isCheckAnswer === false){
        checkAnswer(); 
    }

    scoreExamVocab = parseInt(localStorage.getItem("scoreExamVocab")) || 0;
    scoreExamGrammar = parseInt(localStorage.getItem("scoreExamGrammar")) || 0;
    scoreExamListen = parseInt(localStorage.getItem("scoreExamListen")) || 0;

    let result = calculateTotalQuestions(indexExamN, indexExamS);

    let totalVocabQuestions = result.totalVocabQuestions;
    let totalGrammarQuestions = result.totalGrammarQuestions;
    let totalListeningQuestions = result.totalListeningQuestions;

    resultVocab.innerHTML = `${scoreExamVocab}/${totalVocabQuestions}`;
    resultGrammar.innerHTML = `${scoreExamGrammar}/${totalGrammarQuestions}`;
    resultListen.innerHTML = `${scoreExamListen}/${totalListeningQuestions}`;
});

btnCancelSubmit.addEventListener("click", function(){
    modalConfirmSubmit.style.display = "none";
    overlay.style.display = "none";
});

btnReturnHomePage.addEventListener("click", function(){
    localStorage.removeItem("scoreExamVocab");
    localStorage.removeItem("scoreExamGrammar");
    localStorage.removeItem("scoreExamListen");
    document.location.href = "../../TopicManager-VocabularyManager/pages/homePage.html";
})

btnContinueExam.addEventListener("click", function(){
    modalScore.style.display = "none";
    overlay.style.display = "none";
    localStorage.removeItem("scoreExamVocab");
    localStorage.removeItem("scoreExamGrammar");
    localStorage.removeItem("scoreExamListen");
    document.location.href = "../../ExamManager/pages/list-exam.html";
});


btnExit.addEventListener("click", function(){
    modalExitExam.style.display = "flex";
    modalExitExam.style.animation = 'slideIn 0.3s ease forwards';
    overlay.style.display = "block";
});


btnConfirmExit.addEventListener("click", function(){
    document.location.href = "../../ExamManager/pages/list-exam.html";
    localStorage.removeItem("scoreExamVocab");
    localStorage.removeItem("scoreExamGrammar");
    localStorage.removeItem("scoreExamListen");
});

btnContinue.addEventListener("click", function(){
    modalExitExam.style.display = "none";
    overlay.style.display = "none";
});

let isChecked = false;
let allAnswer = document.querySelector(".all-answer");
let userSelection = [];
let examData = user.studyMankai[2].detail[indexExamN].exams[indexExamS];
let containerQuestion = document.querySelector(".container-question");

function renderExamGrammar() {
    let questions = examData.structure[2].questions;

    let html = questions.map((group, groupIndex) => {
        let groupHtml = `
            <div class="question">
                <h3>${group.name}</h3>
                <p>${group.text}</p>
                
                    <div class="timeListen-volume">
                        <div class="timeListening"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H7C7.41421 0.25 7.75 0.585786 7.75 1V17C7.75 17.4142 7.41421 17.75 7 17.75H1C0.585786 17.75 0.25 17.4142 0.25 17V1Z" fill="white"/>
                                <path d="M10.25 1C10.25 0.585786 10.5858 0.25 11 0.25H17C17.4142 0.25 17.75 0.585786 17.75 1V17C17.75 17.4142 17.4142 17.75 17 17.75H11C10.5858 17.75 10.25 17.4142 10.25 17V1Z" fill="white"/>
                            </svg>
                            <p>0:15</p>
                            <div class="bar-time">
                                <div class="bar-time-progress"></div>
                                <svg id="dot-bar-time" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.48267" cy="4.20392" r="4.17212" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div class="volume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                                <path d="M13.1087 0.341708C13.3495 0.473173 13.4993 0.725639 13.4993 1V17C13.4993 17.2744 13.3495 17.5268 13.1087 17.6583C12.8679 17.7898 12.5745 17.7792 12.3437 17.6309L5.52971 13.25H0.75C0.335786 13.25 0 12.9142 0 12.5V5.5C0 5.08579 0.335786 4.75 0.75 4.75H5.52971L12.3437 0.369136C12.5745 0.220762 12.8679 0.210243 13.1087 0.341708Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8788 9.00008L15.0859 7.20718L16.5002 5.79297L18.293 7.58586L20.0859 5.79297L21.5002 7.20718L19.7073 9.00008L21.5002 10.793L20.0859 12.2072L18.293 10.4143L16.5002 12.2072L15.0859 10.793L16.8788 9.00008Z" fill="white"/>
                            </svg>
                            <div class="bar-volume">
                                <div class="bar-volume-progress"></div>
                                <svg id="dot-bar-volume" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.48267" cy="4.20392" r="4.17212" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                
                <div class="all-answer">
                    ${group.list.map((data, index) => `
                        <div class="container-answer">
                            <div class="answer">
                                <p>${index + 1}. ${data.name}</p>
                                <img class="btn-hidden-appear" src="../../assets/image/image-hidden.svg" alt="">
                            </div>
                            <div class="list-answer">
                                <div class="answer-item" data-id="${data.select[0].id}" data-check="${data.select[0].check}">
                                    <span>A</span>
                                    <p>${data.select[0].value}</p>
                                </div>
                                <div class="answer-item" data-id="${data.select[1].id}" data-check="${data.select[1].check}">
                                    <span>B</span>
                                    <p>${data.select[1].value}</p>
                                </div>
                                <div class="answer-item" data-id="${data.select[2].id}" data-check="${data.select[2].check}">
                                    <span>C</span>
                                    <p>${data.select[2].value}</p>
                                </div>
                                ${data.select[3] ? `
                                <div class="answer-item" data-id="${data.select[3].id}" data-check="${data.select[3].check}">
                                    <span>D</span>
                                    <p>${data.select[3].value}</p>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        return groupHtml;
    }).join('');

    containerQuestion.innerHTML = html;
    let btnHiddenAppear = document.querySelectorAll(".btn-hidden-appear");
    btnHiddenAppear.forEach((btn) => {
        btn.addEventListener("click", function () {
            let containerAnswer = btn.closest(".container-answer");
            let listAnswer = containerAnswer.querySelector(".list-answer");
    
            listAnswer.classList.toggle("hidden-appear");
            btn.classList.toggle("arrow-rotated");
        });
    });

    attachAnswerEvents();
}

function attachAnswerEvents(){
    let containerListAnswer = document.querySelectorAll(".list-answer");
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
                answer.style.borderColor = "#0BA5EC";
                answer.style.boxShadow = "0px 4px 0px 0px #0BA5EC";

                userSelection[indexQuestion] = answerIndex;
                answerCompletedSpans[indexQuestion].style.borderColor = "#F37142";
                answerCompletedSpans[indexQuestion].style.color = "#F37142";
                answerCompletedSpans[indexQuestion].style.backgroundColor = "#FFF7F4";
            });
        });
    });
}

let btnScan = document.querySelector("#scan");


function checkAnswer() {
    isChecked = true;
    isCheckAnswer = true;
    let questionGroups = examData.structure[2].questions;
    let questions = questionGroups.flatMap(group => group.list);
    console.log(questions);

    let containerListAnswer = document.querySelectorAll(".list-answer");

    containerListAnswer.forEach((container, indexQuestion) => {
        let answers = container.querySelectorAll(".answer-item");
        let userSelectedAnswerIndex = userSelection[indexQuestion];
        let question = questions[indexQuestion];

        if (!question) return; 

        let correctAnswerIndex = question.select.findIndex((option) => option.check === true);

        answers.forEach((answer, indexAnswer) => {
            answer.style.borderColor = "";
            answer.style.boxShadow = "";

            if (indexAnswer === correctAnswerIndex) {
                answer.style.borderColor = "rgb(6, 253, 6)";
                answer.style.boxShadow = "0px 4px 0px 0px rgb(6, 253, 6)";
            }

            if (indexAnswer === userSelectedAnswerIndex && indexAnswer !== correctAnswerIndex) {
                answer.style.borderColor = "red";
                answer.style.boxShadow = "0px 4px 0px 0px red";
            }
        });

        if (userSelectedAnswerIndex === correctAnswerIndex) {
            scoreExamListen++;
        }
    });

    localStorage.setItem("scoreExamListen", scoreExamListen.toString());
}


btnScan.addEventListener("click", checkAnswer);



let containerAllAnswerComplete = document.querySelector(".container-all-answer-complete");
let totalGrouptAnswerComplete = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[2].questions;

function renderGrouptAnswerComplete() {
    containerAllAnswerComplete.innerHTML = '';
    totalGrouptAnswerComplete.forEach((group, groupIndex) => {
        let groupDiv = document.createElement("div");
        groupDiv.classList.add("container-answer-exam-complete");

        let groupTitle = document.createElement("p");
        groupTitle.textContent = group.name; 
        groupDiv.appendChild(groupTitle);

        let answerCompleteDiv = document.createElement("div");
        answerCompleteDiv.classList.add("answer-exam-complete");

        let totalAnswerInGroup = group.list.length;

        for (let i = 0; i < totalAnswerInGroup; i++) {
            let answerCompleted = document.createElement("span");
            answerCompleted.textContent = i + 1;
            answerCompleteDiv.appendChild(answerCompleted);
        }

        groupDiv.appendChild(answerCompleteDiv);
        containerAllAnswerComplete.appendChild(groupDiv);
    });
}

let timeOutListen = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[2].time;
let countdown = document.getElementById("countdown");

startCountdown(timeOutListen*60, 'countdown',"submit", "../../ExamManager/pages/exam-grammar.html");



renderGrouptAnswerComplete();
renderExamGrammar();
saveData();


