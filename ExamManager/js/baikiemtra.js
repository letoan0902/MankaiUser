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
let trueAnswer = document.querySelector(".true");
let falseAnswer = document.querySelector(".false");


function renderQuestion(index) {
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

    containerExplain.style.display = "none";
    containerButton.style.display = "flex";
    trueAnswer.style.display = "none";
    falseAnswer.style.display = "none";
    isChecked = false; 
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


let btnChangeQuestionPrevious = document.querySelector(".btn-previous");
btnChangeQuestionPrevious.addEventListener("click", function () {
    if (indexQuestion <= 0) {
        return;
    } 
    else {
        indexQuestion--;
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
        alert("Vui lòng chọn một đáp án trước khi kiểm tra!");
        return;
    }

    isChecked = true;

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