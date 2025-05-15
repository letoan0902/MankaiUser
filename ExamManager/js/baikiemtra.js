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

    if (!question) {
        console.error("Câu hỏi không tồn tại.");
        return;
    }
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
function renderExamReadListen(index){
    let questions = user.course[0].lessons[0].detail[6].test[1].question;
    let html = questions.map((group, groupIndex) => {
        let groupHtml = `
            
                  <div class="text-exam-read-listen">
                    <p class="question-complete-read-listen">Câu 1/6</p>
                    <h3 class="title-read-listen">Nội dung đề bài đọc/bài nghe</h3>
                    <p class="text-question-read-listen"><span class="special-read-listen">${group.special}</span>${group.text}</p>
                    <img src="/team2-mankai-user/assets/icons/Listening.svg" alt="">
                  </div>
                
                <div class="container-list-answer">
                    ${group.list.map((data, index) => `
                      <p class="question-read-listen">1. ${data.problem}</p>
                      <div class="list-answer-read-listen">
                        <div class="answer-item-read-listen">
                            <span>A</span>
                            <p>こんにちは</p>
                        </div>
                        <div class="answer-item-read-listen">
                            <span>B</span>
                            <p>こんにちは</p>
                        </div>
                        <div class="answer-item-read-listen">
                            <span>C</span>
                            <p>こんにちは</p>
                        </div>
                        <div class="answer-item-read-listen">
                            <span>D</span>
                            <p>こんにちは</p>
                        </div>
                    </div>
                    `).join('')}
                </div>

        `;
        return groupHtml;
    }).join('');

    containerQuestion.innerHTML = html;
}