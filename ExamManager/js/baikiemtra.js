localStorage.removeItem("scoreExamChoseAnswer");
localStorage.removeItem("scoreExamFillBlank");
localStorage.removeItem("scoreExamReadListen");

let indexLesson = parseInt(localStorage.getItem("indexLesson")) || 0;
let containerExam = document.querySelector(".container-exam");
containerExam.style.display = "block";
let containerQuestion = document.querySelector(".container-question");
let indexQuestion = 0;
let questions = user.course[0].lessons[indexLesson].detail[6].test[0].question;
let scoreExamChoseAnswer = parseInt(localStorage.getItem("scoreExamChoseAnswer")) || 0;
let containerExplain = document.querySelector(".container-explain");
let containerButton = document.querySelector(".container-button");
containerExplain.style.display = "none";
containerButton.style.display = "flex";
let btnQuestionPrevious = document.querySelector(".question-previous");
let btnCheck = document.querySelector(".check");
let userSelection = [];
let checkedStatus = [];
let isChecked = false;
let trueAnswer = document.querySelector(".true");
let falseAnswer = document.querySelector(".false");
let questionComplete = document.querySelector(".question-complete");
let btnNextExam = document.querySelector(".btn-clear");


let detail = lesson.detail.find(d => d.name === "Bài kiểm tra");
let progressTest = detail.progress;

function updateProgressTest(){
    progressTest += 25;
    if (progressTest > detail.progress) {
        detail.progress = progressTest;
        saveData();
        renderProcess();
    }
}

let indexExams = 0;
let popUp = document.querySelector(".pop-up");
popUp.style.display = "none";
let overlay = document.querySelector(".overlay");
overlay.style.display = "none";
let point = document.querySelector("#point");

let btnSeeExplanation = document.querySelector(".btn-see-explanation");
let btnChangeExam = document.querySelector(".btn-changeExam");

let containerSubmitFile = document.querySelector(".container-submit-file");
containerSubmitFile.style.display = "none";

btnSeeExplanation.addEventListener("click", function(){
    popUp.style.display = "none";
    overlay.style.display = "none";
});
btnChangeExam.addEventListener("click", function(){
    popUp.style.display = "none";
    overlay.style.display = "none";
    indexExams++;
    if(indexExams === 1){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "block";
        containerExamFillBlank.style.display = "none";
    }
    else if(indexExams === 2){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "none";
        containerExamFillBlank.style.display = "block";
    }
    else if(indexExams === 3){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "none";
        containerExamFillBlank.style.display = "none";
        containerExamMatching.style.display = "block";
    }
    else if(indexExams === 4){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "none";
        containerExamFillBlank.style.display = "none";
        containerExamMatching.style.display = "none";
        containerSubmitFile.style.display = "block";
    }
});

// bài kiểm tra đọc/nghe
let containerExamReadListen = document.querySelector(".container-exam-read-listen");
containerExamReadListen.style.display = 'none';
let containerButtonReadListen = document.querySelector(".container-button-read-listen");
containerButtonReadListen.style.display = "flex";
let containerExplainReadListen = document.querySelector(".container-explain-read-listen");
containerExplainReadListen.style.display = "none";
let scoreExamReadListen = 0;

let containerExamFillBlank = document.querySelector(".container-exam-fill-blank");
containerExamFillBlank.style.display = "none";

let containerExamMatching = document.querySelector(".containerExamMatching");
containerExamMatching.style.display = "none";

btnNextExam.addEventListener("click",function(){
    popUp.style.display = "none";
    overlay.style.display = "none";
    indexExams++;
    if(indexExams === 1){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "block";
        containerExamFillBlank.style.display = "none";
    }
    else if(indexExams === 2){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "none";
        containerExamFillBlank.style.display = "block";
    }
    else if(indexExams === 3){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "none";
        containerExamFillBlank.style.display = "none";
        containerExamMatching.style.display = "block";
    }
    else if(indexExams === 4){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "none";
        containerExamFillBlank.style.display = "none";
        containerExamMatching.style.display = "none";
        containerSubmitFile.style.display = "block";
    }
});

function renderQuestion(index) {
    questionComplete.innerHTML = `Câu ${index + 1}/${user.course[0].lessons[indexLesson].detail[6].test[0].question.length}`
    let question = questions[index];
    let html = `
        <p class="text-question"><span class="special">${question.special}</span>${question.text}</p>
        <div class="list-answer">
            <div class="answer-item">
                <span>A</span>
                <p>${question.select[0].value}</p>
            </div>
            <div class="answer-item">
                <span>B</span>
                <p>${question.select[1].value}</p>
            </div>
            <div class="answer-item">
                <span>C</span>
                <p>${question.select[2].value}</p>
            </div>
            <div class="answer-item">
                <span>D</span>
                <p>${question.select[3].value}</p>
            </div>
        </div>
    `;
    containerQuestion.innerHTML = html;

    attachAnswerEvents();

    if (userSelection[index] !== undefined) {
        let selectedAnswer = containerQuestion.querySelectorAll(".answer-item")[userSelection[index]];
        if (selectedAnswer) {
            selectedAnswer.style.borderColor = "#0BA5EC";
            selectedAnswer.style.boxShadow = "0px 4px 0px 0px #0BA5EC";
        }
    }

    if (checkedStatus[index] === true) {
        let userSelectedAnswerIndex = userSelection[index];
        let correctAnswerIndex = question.select.findIndex((option) => option.check === true);

        containerExplain.style.display = "block";
        containerButton.style.display = "none";
        if (userSelectedAnswerIndex === correctAnswerIndex) {
            trueAnswer.style.display = "flex";
            falseAnswer.style.display = "none";
        } else {
            trueAnswer.style.display = "none";
            falseAnswer.style.display = "flex";
        }
        isChecked = true;
    } 
    else {
        containerExplain.style.display = "none";
        containerButton.style.display = "flex";
        trueAnswer.style.display = "none";
        falseAnswer.style.display = "none";
        isChecked = false;
    }
}

renderQuestion(indexQuestion);

let btnChangeQuestionContinue = document.querySelector(".btn-continue");
btnChangeQuestionContinue.addEventListener("click", function () {
    if (indexQuestion >= questions.length - 1) {
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        scoreExamChoseAnswer = parseInt(localStorage.getItem("scoreExamChoseAnswer")) || 0;
        point.innerHTML = `${scoreExamChoseAnswer}/${user.course[0].lessons[indexLesson].detail[6].test[0].question.length}`;
        return;
    } 
    else {
        indexQuestion++;
        renderQuestion(indexQuestion);
    }
});

btnQuestionPrevious.addEventListener("click", function () {
    if (indexQuestion <= 0) {
        return;
    } else {
        indexQuestion--;
        renderQuestion(indexQuestion);
    }
});


let btnChangeQuestionFalse = document.querySelector(".btn-continue-false");
btnChangeQuestionFalse .addEventListener("click", function () {
    if (indexQuestion >= questions.length - 1) {
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        scoreExamChoseAnswer = parseInt(localStorage.getItem("scoreExamChoseAnswer")) || 0;
        point.innerHTML = `${scoreExamChoseAnswer}/${user.course[0].lessons[indexLesson].detail[6].test[0].question.length}`;
        return;
    } 
    else {
        indexQuestion++;
        renderQuestion(indexQuestion);
    }
});


function attachAnswerEvents() {
    let containerListAnswer = document.querySelector(".list-answer"); 
    let answers = containerListAnswer.querySelectorAll(".answer-item");

    answers.forEach((answer, answerIndex) => {
        answer.addEventListener("click", function (event) {
            if (isChecked) {
                return;
            }
            answers.forEach((ans) => {
                ans.style.borderColor = "";
                ans.style.boxShadow = "";
            });

            event.currentTarget.style.borderColor = "#0BA5EC";
            event.currentTarget.style.boxShadow = "0px 4px 0px 0px #0BA5EC";

            userSelection[indexQuestion] = answerIndex;
        });
    });
}




function checkAnswer() {
    if (userSelection[indexQuestion] === undefined) {
        Swal.fire({
            title: "Chưa chọn đáp án?",
            text: "Hãy chọn đáp án trước khi kiểm tra đúng sai?",
            icon: "question"
          });
        return;
    }

    isChecked = true;
    checkedStatus[indexQuestion] = true;

    let question = questions[indexQuestion];
    let userSelectedAnswerIndex = userSelection[indexQuestion];

    let correctAnswerIndex = question.select.findIndex((option) => option.check === true);

    if (userSelectedAnswerIndex === correctAnswerIndex) {
        scoreExamChoseAnswer++; 
        containerExplain.style.display = "block";
        trueAnswer.style.display = "flex";
        falseAnswer.style.display = "none";
        containerButton.style.display = "none";
    } else {
        containerExplain.style.display = "block";
        trueAnswer.style.display = "none";
        falseAnswer.style.display = "flex";
        containerButton.style.display = "none";
    }

    localStorage.setItem("scoreExamChoseAnswer", scoreExamChoseAnswer.toString());
}

btnCheck.addEventListener("click", checkAnswer);

attachAnswerEvents();


let contentExamReadListen = document.querySelector(".content-exam-read-listen");
let indexQuestionExamReadListen = 0
function renderExamReadListen(index) {
    let questions = user.course[0].lessons[indexLesson].detail[6].test[1].question;
    let group = questions[index];

    let groupHtml = `
        <div class="text-exam-read-listen">
            <p class="question-complete-read-listen">Câu ${index + 1}/${questions.length}</p>
            <h3 class="title-read-listen">Nội dung đề bài đọc/bài nghe</h3>
            <p class="text-question-read-listen"><span class="special-read-listen">${group.special}</span>${group.text}</p>
            <img src="/team2-mankai-user/assets/icons/Listening.svg" alt="">
        </div>
        <div class="container-list-answer">
            ${group.list.map((data, subIndex) => `
                <p class="question-read-listen">${subIndex + 1}. ${data.problem}</p>
                <div class="list-answer-read-listen">
                    <div class="answer-item-read-listen">
                        <span>A</span>
                        <p>${data.select[0].value}</p>
                    </div>
                    <div class="answer-item-read-listen">
                        <span>B</span>
                        <p>${data.select[1].value}</p>
                    </div>
                    <div class="answer-item-read-listen">
                        <span>C</span>
                        <p>${data.select[2].value}</p>
                    </div>
                    <div class="answer-item-read-listen">
                        <span>D</span>
                        <p>${data.select[3].value}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    contentExamReadListen.innerHTML = groupHtml;
    isCheckedExamReadListen = false;

    containerButtonReadListen.style.display = "flex";
    containerExplainReadListen.style.display = "none";
    trueReadListen.style.display = "none";
    falseReadListen.style.display = "none";

    if (checkedStatusExamReadListen[index]) {
        group.list.forEach((question, qIndex) => {
            let userSelectedAnswerIndex = userSelectionExamReadListen[index][qIndex];
            let correctAnswerIndex = question.select.findIndex((option) => option.check === true);

            let answerItems = document.querySelectorAll(".list-answer-read-listen")[qIndex].querySelectorAll(".answer-item-read-listen");
            answerItems.forEach((item, ansIndex) => {
                item.style.borderColor = "";
                item.style.boxShadow = "";
                if (ansIndex === correctAnswerIndex) {
                    item.style.borderColor = "green";
                    item.style.boxShadow = "0px 4px 0px 0px green";
                }
                if (ansIndex === userSelectedAnswerIndex && ansIndex !== correctAnswerIndex) {
                    item.style.borderColor = "red";
                    item.style.boxShadow = "0px 4px 0px 0px red";
                }
            });
        });

        containerButtonReadListen.style.display = "none";
        containerExplainReadListen.style.display = "block";
        let allCorrect = group.list.every((question, qIndex) => {
            let userSelectedAnswerIndex = userSelectionExamReadListen[index][qIndex];
            let correctAnswerIndex = question.select.findIndex((option) => option.check === true);
            return userSelectedAnswerIndex === correctAnswerIndex;
        });
        if (allCorrect) {
            trueReadListen.style.display = "flex";
            falseReadListen.style.display = "none";
        } else {
            trueReadListen.style.display = "none";
            falseReadListen.style.display = "flex";
        }
        isCheckedExamReadListen = true;
    }

    attachAnswerExamReadListen();
}

let checkReadListen = document.querySelector(".check-read-listen");
let trueReadListen = document.querySelector(".true-read-listen");
let falseReadListen = document.querySelector(".false-read-listen");
let btnContinueReadListen = document.querySelector(".btn-continue-read-listen");
let btnContinueFalseReadListen = document.querySelector(".btn-continue-false-read-listen");
let userSelectionExamReadListen = [];
let checkedStatusExamReadListen = [];
let isCheckedExamReadListen = false; 
let questionPreviousReadListen = document.querySelector(".question-previous-read-listen");


function attachAnswerExamReadListen() {
    let containerListAnswers = document.querySelectorAll(".container-list-answer");
    containerListAnswers.forEach((container) => {
        let answerLists = container.querySelectorAll(".list-answer-read-listen");
        answerLists.forEach((answerList, questionIndex) => {
            let answerItems = answerList.querySelectorAll(".answer-item-read-listen");
            answerItems.forEach((answer, answerIndex) => {
                answer.addEventListener("click", function (event) {
                    if (isCheckedExamReadListen) {
                        return;
                    }
                    answerItems.forEach((ans) => {
                        ans.style.borderColor = "";
                        ans.style.boxShadow = "";
                    });

                    event.currentTarget.style.borderColor = "#0BA5EC";
                    event.currentTarget.style.boxShadow = "0px 4px 0px 0px #0BA5EC";

                    if (!userSelectionExamReadListen[indexQuestionExamReadListen]) {
                        userSelectionExamReadListen[indexQuestionExamReadListen] = [];
                    }
                    let currentGroupSelections = userSelectionExamReadListen[indexQuestionExamReadListen];
                    currentGroupSelections[questionIndex] = answerIndex;
                });
            });
        });
    });
}

function checkAnswerExamReadListen() {
    let questionGroups = user.course[0].lessons[indexLesson].detail[6].test[1].question;
    let group = questionGroups[indexQuestionExamReadListen];

    if (!userSelectionExamReadListen[indexQuestionExamReadListen] || 
        userSelectionExamReadListen[indexQuestionExamReadListen].length !== group.list.length ||
        userSelectionExamReadListen[indexQuestionExamReadListen].some(selection => selection === undefined)) {
        Swal.fire({
            title: "Chưa chọn hết đáp án?",
            text: "Hãy chọn đáp án cho tất cả các câu hỏi trước khi kiểm tra đúng sai!",
            icon: "question"
        });
        return;
    }

    isCheckedExamReadListen = true;
    checkedStatusExamReadListen[indexQuestionExamReadListen] = true;

    let allCorrect = true; 

    group.list.forEach((question, index) => {
        let userSelectionsCurrentGroup = userSelectionExamReadListen[indexQuestionExamReadListen];
        let userSelectedAnswerIndex = userSelectionsCurrentGroup[index];
        let correctAnswerIndex = question.select.findIndex((option) => option.check === true);

        if (userSelectedAnswerIndex === correctAnswerIndex) {
            scoreExamReadListen++;
        }
         else {
            allCorrect = false;
        }

        let answerItems = document.querySelectorAll(".list-answer-read-listen")[index].querySelectorAll(".answer-item-read-listen");
        answerItems.forEach((item, index) => {
            if (index === correctAnswerIndex) {
                item.style.borderColor = "green";
                item.style.boxShadow = "0px 4px 0px 0px green";
            } else if (index === userSelectedAnswerIndex && index !== correctAnswerIndex) {
                item.style.borderColor = "red";
                item.style.boxShadow = "0px 4px 0px 0px red";
            } else {
                item.style.borderColor = "";
                item.style.boxShadow = "";
            }
        });
    });

    containerExplainReadListen.style.display = "block";
    containerButtonReadListen.style.display = "none";
    if (allCorrect) {
        trueReadListen.style.display = "flex";
        falseReadListen.style.display = "none";
    } else {
        trueReadListen.style.display = "none";
        falseReadListen.style.display = "flex";
    }

    localStorage.setItem("scoreExamReadListen", scoreExamReadListen.toString());
}

let exam = user.course[0].lessons[indexLesson].detail[6].test;

let totalQuestionReadListen = 0;
totalQuestionReadListen = exam[1].question.reduce((total, question) => {
    return total + question.list.length 
}, 0);

checkReadListen.addEventListener("click", checkAnswerExamReadListen);
btnContinueReadListen.addEventListener("click", function () {
    if (indexQuestionExamReadListen >= user.course[0].lessons[indexLesson].detail[6].test[1].question.length - 1) {
        // Hiện phần modal thông báo điểm
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        scoreExamReadListen = parseInt(localStorage.getItem("scoreExamReadListen")) || 0;
        point.innerHTML = `${scoreExamReadListen}/${totalQuestionReadListen}`;
        return;
    }
    indexQuestionExamReadListen++;
    renderExamReadListen(indexQuestionExamReadListen);
});


btnContinueFalseReadListen.addEventListener("click", function () {
    if (indexQuestionExamReadListen >= user.course[0].lessons[indexLesson].detail[6].test[1].question.length - 1) {
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        scoreExamReadListen = parseInt(localStorage.getItem("scoreExamReadListen")) || 0;
        point.innerHTML = `${scoreExamReadListen}/${totalQuestionReadListen}`;
        return;
    }
    indexQuestionExamReadListen++;
    renderExamReadListen(indexQuestionExamReadListen);
});

questionPreviousReadListen.addEventListener("click", function () {
    if (indexQuestionExamReadListen <= 0) {
        return;
    }
    indexQuestionExamReadListen--;
    renderExamReadListen(indexQuestionExamReadListen);
});

renderExamReadListen(indexQuestionExamReadListen);

// bài kiểm tra điền từ
let containerButtonFillBlank = document.querySelector(".container-button-fill-blank");
let containerExplainFillBlank = document.querySelector(".container-explain-fill-blank");
let trueFillBlank = document.querySelector(".true-fill-blank");
let falseFillBlank = document.querySelector(".false-fill-blank");
let contentExamFillBlank = document.querySelector(".content-exam-fill-blank");
let indexQuestionExamFillBlank = 0;
let btnQuestionPreviousExamFillBlank = document.querySelector(".question-previous-fill-blank");
let btnCheckFillBlank = document.querySelector(".check-fill-blank");

containerButtonFillBlank.style.display = "flex";
containerExplainFillBlank.style.display = "none";

let questionCompleteFillBlank = document.querySelector(".question-complete-fill-blank");
let questionsExamFillBlank = user.course[0].lessons[indexLesson].detail[6].test[2].question;
let userSelectionExamFillBlank = [];
let checkedStatusExamFillBlank = [];
let isCheckedFillBlank = false;
let scoreExamFillBlank = parseInt(localStorage.getItem("scoreExamFillBlank")) || 0;

function renderQuestionExamFillBlank(index) {
    let questionExamFillBlank = questionsExamFillBlank[index];
    let html = `
                <p class="question-complete-fill-blank">Câu ${index + 1}/${user.course[0].lessons[indexLesson].detail[6].test[2].question.length}</p>
                <h3 class="title-exam-fill-blank">Chọn từ vào chỗ trống</h3>
                <p class="question-exam-fill-blank"><span class="special-fill-blank">${questionExamFillBlank.special}</span> ${questionExamFillBlank.text}</p>
                <div class="list-answer-fill-blank">
                  <p class="answer-item-exam-fill-blank">${questionExamFillBlank.select[0].value}</p>
                  <p class="answer-item-exam-fill-blank">${questionExamFillBlank.select[1].value}</p>
                  <p class="answer-item-exam-fill-blank">${questionExamFillBlank.select[2].value}</p>
                  <p class="answer-item-exam-fill-blank">${questionExamFillBlank.select[3].value}</p>
                </div>
    `;
    contentExamFillBlank.innerHTML = html;

    attachAnswerEventsExamFillBlank();

    if (userSelectionExamFillBlank[index] !== undefined) {
        let selectedAnswer = contentExamFillBlank.querySelectorAll(".answer-item-exam-fill-blank")[userSelectionExamFillBlank[index]];
        if (selectedAnswer) {
            selectedAnswer.style.borderColor = "#0BA5EC";
            selectedAnswer.style.boxShadow = "0px 4px 0px 0px #0BA5EC";
        }
    }

    if (checkedStatusExamFillBlank[index] === true) {
        let userSelectedAnswerIndex = userSelectionExamFillBlank[index];
        let correctAnswerIndex = questionExamFillBlank.select.findIndex((option) => option.check === true);

        containerExplainFillBlank.style.display = "block";
        containerButtonFillBlank.style.display = "none";
        if (userSelectedAnswerIndex === correctAnswerIndex) {
            trueFillBlank.style.display = "flex";
            falseFillBlank.style.display = "none";
        } 
        else {
            trueFillBlank.style.display = "none";
            falseFillBlank.style.display = "flex";
        }
        isCheckedFillBlank = true;
    } 
    else {
        containerExplainFillBlank.style.display = "none";
        containerButtonFillBlank.style.display = "flex";
        trueFillBlank.style.display = "none";
        falseFillBlank.style.display = "none";
        isCheckedFillBlank = false;
    }
}

renderQuestionExamFillBlank(indexQuestionExamFillBlank);

let btnChangeQuestionTrueExamFillBlank = document.querySelector(".btn-continue-fill-blank");
btnChangeQuestionTrueExamFillBlank.addEventListener("click", function () {
    if (indexQuestionExamFillBlank >= questionsExamFillBlank.length - 1) {
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        scoreExamFillBlank = parseInt(localStorage.getItem("scoreExamFillBlank")) || 0;
        point.innerHTML = `${scoreExamFillBlank}/${user.course[0].lessons[indexLesson].detail[6].test[2].question.length}`;
        return;
    } 
    else {
        indexQuestionExamFillBlank++;
        renderQuestionExamFillBlank(indexQuestionExamFillBlank);
    }
});

btnQuestionPreviousExamFillBlank.addEventListener("click", function () {
    if (indexQuestionExamFillBlank <= 0) {
        return;
    } else {
        indexQuestionExamFillBlank--;
        renderQuestionExamFillBlank(indexQuestionExamFillBlank);
    }
});


let btnChangeQuestionFalseExamFillBlank = document.querySelector(".btn-continue-false-fill-blank");
btnChangeQuestionFalseExamFillBlank .addEventListener("click", function () {
    if (indexQuestionExamFillBlank >= questionsExamFillBlank.length - 1) {
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        scoreExamFillBlank = parseInt(localStorage.getItem("scoreExamFillBlank")) || 0;
        point.innerHTML = `${scoreExamFillBlank}/${user.course[0].lessons[indexLesson].detail[6].test[2].question.length}`;
        return;
    } 
    else {
        indexQuestionExamFillBlank++;
        renderQuestionExamFillBlank(indexQuestionExamFillBlank);
    }
});


function attachAnswerEventsExamFillBlank() {
    let containerListAnswerExamFillBlank = document.querySelector(".list-answer-fill-blank"); 
    let answers = containerListAnswerExamFillBlank.querySelectorAll(".answer-item-exam-fill-blank");

    answers.forEach((answer, answerIndex) => {
        answer.addEventListener("click", function (event) {
            if (isCheckedFillBlank) {
                return;
            }
            answers.forEach((ans) => {
                ans.style.borderColor = "";
                ans.style.boxShadow = "";
            });

            event.currentTarget.style.borderColor = "#0BA5EC";
            event.currentTarget.style.boxShadow = "0px 4px 0px 0px #0BA5EC";

            userSelectionExamFillBlank[indexQuestionExamFillBlank] = answerIndex;
        });
    });
}




function checkAnswerExamFillBlank() {
    if (userSelectionExamFillBlank[indexQuestionExamFillBlank] === undefined) {
        Swal.fire({
            title: "Chưa chọn đáp án?",
            text: "Hãy chọn đáp án trước khi kiểm tra đúng sai?",
            icon: "question"
          });
        return;
    }

    isCheckedFillBlank = true;
    checkedStatusExamFillBlank[indexQuestionExamFillBlank] = true;

    let question = questionsExamFillBlank[indexQuestionExamFillBlank];
    let userSelectedAnswerIndex = userSelectionExamFillBlank[indexQuestionExamFillBlank];

    let correctAnswerIndex = question.select.findIndex((option) => option.check === true);

    if (userSelectedAnswerIndex === correctAnswerIndex) {
        scoreExamFillBlank++; 
        containerExplainFillBlank.style.display = "block";
        trueFillBlank.style.display = "flex";
        falseFillBlank.style.display = "none";
        containerButtonFillBlank.style.display = "none";
    } else {
        containerExplainFillBlank.style.display = "block";
        trueFillBlank.style.display = "none";
        falseFillBlank.style.display = "flex";
        containerButtonFillBlank.style.display = "none";
    }

    localStorage.setItem("scoreExamFillBlank", scoreExamFillBlank.toString());
}

btnCheckFillBlank.addEventListener("click", checkAnswerExamFillBlank);


attachAnswerEventsExamFillBlank();  

// Bài kiểm tra ghép câu

let containerAnswers = document.querySelector(".containerAnswers");
let containerAnswerChoiced = document.querySelector(".containerAnswerChoiced");
let btnCheckMatching = document.querySelector(".check-matching");
let selectedLeft = null;
let selectedRight = null;
let matchedPairs = [];

function renderExamMatching() {
  let pairs = user.course[0].lessons[indexLesson].detail[6].test[3].question[0].pairs;

  let remainingPairs = pairs.filter((pair, index) => {
    let pairKey = `${pair.left}-${pair.right}`;
    return !matchedPairs.includes(pairKey);
  });

  // Render các cặp còn lại
  let html = remainingPairs.length > 0
    ? `
      <div class="answerLeft">
        ${remainingPairs.map(pair => `<p>${pair.left}</p>`).join("")}
      </div>
      <div class="answerRight">
        ${remainingPairs.map(pair => `<p>${pair.right}</p>`).join("")}
      </div>
    `
    : ""; 

  containerAnswers.innerHTML = html;

  attachAnswerEventsMatching();
}

function attachAnswerEventsMatching() {
  let leftAnswers = document.querySelectorAll(".answerLeft p");
  let rightAnswers = document.querySelectorAll(".answerRight p");

  leftAnswers.forEach((answer) => {
    answer.addEventListener("click", () => {
      containerAnswerChoiced.children[0].classList.remove("checkedtrue", "checkedFalse");
      containerAnswerChoiced.children[1].classList.remove("checkedtrue", "checkedFalse");

      selectedLeft = answer;
      containerAnswerChoiced.children[0].style.display = "block";
      containerAnswerChoiced.children[0].textContent = answer.textContent;
    });
  });

  rightAnswers.forEach((answer) => {
    answer.addEventListener("click", () => {
      containerAnswerChoiced.children[0].classList.remove("checkedtrue", "checkedFalse");
      containerAnswerChoiced.children[1].classList.remove("checkedtrue", "checkedFalse");

      selectedRight = answer;
      containerAnswerChoiced.children[1].style.display = "block";
      containerAnswerChoiced.children[1].textContent = answer.textContent;
    });
  });
}

function checkMatching() {
  if (!selectedLeft || !selectedRight) {
    Swal.fire({
      title: "Chưa chọn đủ đáp án?",
      text: "Hãy chọn một vế từ mỗi cột trước khi kiểm tra!",
      icon: "question"
    });
    return;
  }

  let leftText = containerAnswerChoiced.children[0].textContent;
  let rightText = containerAnswerChoiced.children[1].textContent;

  let pairs = user.course[0].lessons[indexLesson].detail[6].test[3].question[0].pairs;
  let isCorrect = false;

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i].left === leftText && pairs[i].right === rightText) {
      if (!matchedPairs.includes(`${leftText}-${rightText}`)) {
        isCorrect = true;
        break;
      }
    }
  }

  if (isCorrect) {
    containerAnswerChoiced.children[0].classList.add("checkedtrue");
    containerAnswerChoiced.children[1].classList.add("checkedtrue");

    setTimeout(() => {
      matchedPairs.push(`${leftText}-${rightText}`);
      containerAnswerChoiced.children[0].style.display = "none";
      containerAnswerChoiced.children[1].style.display = "none";
      containerAnswerChoiced.children[0].textContent = "";
      containerAnswerChoiced.children[1].textContent = "";

      selectedLeft = null;
      selectedRight = null;

      renderExamMatching();

      if (matchedPairs.length === pairs.length) {
        popUp.style.display = "block";
        popUp.style.animation = 'slideIn 0.3s ease forwards';
        updateProgressTest();
        overlay.style.display = "block";
        point.innerHTML = `10/10`;
      }
    }, 1000);
  } 
  else {
    containerAnswerChoiced.children[0].classList.add("checkedFalse");
    containerAnswerChoiced.children[1].classList.add("checkedFalse");

    setTimeout(() => {
      containerAnswerChoiced.children[0].style.display = "none";
      containerAnswerChoiced.children[1].style.display = "none";
      containerAnswerChoiced.children[0].textContent = "";
      containerAnswerChoiced.children[1].textContent = "";
      selectedLeft = null;
      selectedRight = null;
    }, 1000);
  }
}

btnCheckMatching.addEventListener("click", checkMatching);

renderExamMatching();

let btnSubmitFile = document.querySelector('.submit-file');
btnSubmitFile.addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

let btnHidden = document.querySelector('.img-footer-submit-file');
let titleFooterSubmitFile = document.querySelector('.title-footer-submit-file');
let contentFooterSubmitFile = document.querySelector('.content-footer-submit-file');

btnHidden.addEventListener("click", function(){
    btnHidden.classList.toggle("hidden-appear");
    btnHidden.classList.toggle("arrow-rotated");
    titleFooterSubmitFile.classList.toggle("hidden");
    contentFooterSubmitFile.classList.toggle("hidden");
});

