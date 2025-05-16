let containerExam = document.querySelector(".container-exam");
containerExam.style.display = "block";
let containerQuestion = document.querySelector(".container-question");
let indexQuestion = 0;
let questions = user.course[0].lessons[0].detail[6].test[0].question;
let scoreExam1 = parseInt(localStorage.getItem("scoreExam1")) || 0;
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

let indexExams = 0;
let popUp = document.querySelector(".pop-up");
popUp.style.display = "none";
let overlay = document.querySelector(".overlay");
overlay.style.display = "none";

// bài kiểm tra đọc/nghe
let containerExamReadListen = document.querySelector(".container-exam-read-listen");
containerExamReadListen.style.display = 'none';
let containerButtonReadListen = document.querySelector(".container-button-read-listen");
containerButtonReadListen.style.display = "flex";
let containerExplainReadListen = document.querySelector(".container-explain-read-listen");
containerExplainReadListen.style.display = "none";
let scoreExamReadListen = parseInt(localStorage.getItem("scoreExamReadListen")) || 0;

btnNextExam.addEventListener("click",function(){
    indexExams++;
    if(indexExams === 1){
        containerExam.style.display = "none";
        containerExamReadListen.style.display = "block";
    }
});

function renderQuestion(index) {
    questionComplete.innerHTML = `Câu ${index + 1}/${user.course[0].lessons[0].detail[6].test[0].question.length}`
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
        scoreExam1++; 
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

    localStorage.setItem("scoreExam1", scoreExam1.toString());
    console.log(`Điểm số hiện tại: ${scoreExam1}/${questions.length}`);
}

btnCheck.addEventListener("click", checkAnswer);

attachAnswerEvents();


let contentExamReadListen = document.querySelector(".content-exam-read-listen");
let indexQuestionExamReadListen = 0
function renderExamReadListen(index) {
    let questions = user.course[0].lessons[0].detail[6].test[1].question;
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
    const containerListAnswers = document.querySelectorAll(".container-list-answer");
    containerListAnswers.forEach((container) => {
        const answerLists = container.querySelectorAll(".list-answer-read-listen");
        answerLists.forEach((answerList, questionIndex) => {
            const answerItems = answerList.querySelectorAll(".answer-item-read-listen");
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
    let questionGroups = user.course[0].lessons[0].detail[6].test[1].question;
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
    console.log(`Điểm số hiện tại: ${scoreExamReadListen}/${questionGroups.reduce((total, group) => total + group.list.length, 0)}`);
}

checkReadListen.addEventListener("click", checkAnswerExamReadListen);
btnContinueReadListen.addEventListener("click", function () {
    if (indexQuestionExamReadListen >= user.course[0].lessons[0].detail[6].test[1].question.length - 1) {
        // Hiện phần modal thông báo điểm
        popUp.style.display = "block";
        overlay.style.display = "block";
        return;
    }
    indexQuestionExamReadListen++;
    renderExamReadListen(indexQuestionExamReadListen);
});


btnContinueFalseReadListen.addEventListener("click", function () {
    if (indexQuestionExamReadListen >= user.course[0].lessons[0].detail[6].test[1].question.length - 1) {
        popUp.style.display = "block";
        overlay.style.display = "block";
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

