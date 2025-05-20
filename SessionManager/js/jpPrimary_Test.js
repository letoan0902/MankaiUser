let quizContainer = document.querySelector(".quiz-container");
let listQuestion = user.course
  .find((course) => course.id == 12)
  .lessons.find((lesson) => lesson.id == 103).detail;
let currentQuestion = 0;
let score = 0;
let totalQuestions = listQuestion.length;
let selectedOption = null;
let modalFinal = document.querySelector(".pop-up");
let scoreFinal = document.querySelector(".result");
let overlay = document.querySelector(".overlay");
let isAnswerLocked = false;
let returnButton = document.querySelector(".btn-pre");
let backButton = document.querySelector(".btn-re");

function loadQuestion() {
  let question = listQuestion[currentQuestion];
  quizContainer.innerHTML = `
    <div class="quiz-header">
        <div class="quiz-title-container">
            <div class="quiz-title">Nội dung nhóm câu hỏi</div>
            <div class="quiz-subtitle">${question.name}</div>
        </div>
        <div class="quiz-progress">Câu ${
          currentQuestion + 1
        }/${totalQuestions}</div>
    </div>
    <div class="quiz-content">
        <div class="audio-section">
            <div class="audio-title">${question.name}</div>
            <div class="audio-button">
                ${
                  question.audio
                    ? `<img class="audio-icon" src="/team2-mankai-user/assets/icons/volume-exam.png" alt="Audio icon">`
                    : `<p class="text-audio">${question.text}</p>`
                }
            </div>
        </div>
        <div class="answers-container">
            ${renderOptions(question.select)}
        </div>
    </div>
    `;

  addOptionEvents();
}

function renderOptions(options) {
  const optionLabels = ["A", "B", "C", "D"];
  let optionsHTML = "";

  options.forEach((option, index) => {
    if (index < optionLabels.length) {
      optionsHTML += `
            <div class="answer-option answer-neutral" data-option-index="${index}">
                <div class="answer-badge badge-neutral">${optionLabels[index]}</div>
                <div class="answer-text-container">
                    <div class="answer-text text-neutral">${option.name}</div>
                </div>
            </div>
            `;
    }
  });

  return optionsHTML;
}

function addOptionEvents() {
  const options = document.querySelectorAll(".answer-option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      if (isAnswerLocked) return;

      options.forEach((opt) => {
        opt.className = "answer-option answer-neutral";
        opt.querySelector(".answer-badge").className =
          "answer-badge badge-neutral";
        opt.querySelector(".answer-text").className =
          "answer-text text-neutral";
      });

      option.className = "answer-option answer-choice";
      option.querySelector(".answer-badge").className =
        "answer-badge badge-choice";
      option.querySelector(".answer-text").className =
        "answer-text text-choice";

      selectedOption = option;
      enableCheckButton();
    });
  });
}

function enableCheckButton() {
  const checkButton = document.querySelector(".check");
  if (checkButton) {
    checkButton.disabled = false;
    checkButton.style.opacity = "1";
    checkButton.style.color = "#F37142";
    checkButton.style.borderColor = "#F37142";
    checkButton.style.boxShadow = "0px 2px 0px 0px #F37142";
  }
}

function checkAnswer() {
  if (!selectedOption) return;

  document.querySelector(".container-button").classList.add("hidden");

  const selectedIndex = parseInt(selectedOption.dataset.optionIndex);
  const currentQuestionData = listQuestion[currentQuestion];
  const isCorrect = currentQuestionData.select[selectedIndex].check;

  isAnswerLocked = true;

  if (isCorrect) {
    document.querySelector(".true").classList.remove("hidden");
    document.querySelector(".false").classList.add("hidden");

    selectedOption.className = "answer-option answer-correct";
    selectedOption.querySelector(".answer-badge").className =
      "answer-badge badge-correct";
    selectedOption.querySelector(".answer-text").className =
      "answer-text text-correct";

    score++;
  } else {
    document.querySelector(".true").classList.add("hidden");
    document.querySelector(".false").classList.remove("hidden");

    selectedOption.className = "answer-option answer-incorrect";
    selectedOption.querySelector(".answer-badge").className =
      "answer-badge badge-incorrect";
    selectedOption.querySelector(".answer-text").className =
      "answer-text text-incorrect";
  }
}

function nextQuestion() {
  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    selectedOption = null;
    isAnswerLocked = false;
    loadQuestion();

    const buttonContainer = document.querySelector(".container-button");
    buttonContainer.classList.remove("hidden");

    const checkButton = document.querySelector(".check");
    checkButton.disabled = true;
    checkButton.style.opacity = "0.5";
    checkButton.style.color = "#B5B5B5";
    checkButton.style.borderColor = "#B5B5B5";
    checkButton.style.boxShadow = "0px 2px 0px 0px #B5B5B5";

    document.querySelector(".true").classList.add("hidden");
    document.querySelector(".false").classList.add("hidden");
  } else {
    scoreFinal.textContent = `${score}/${totalQuestions}`;
    modalFinal.classList.add("showFlex");
    overlay.classList.add("show");
    user.course
      .find((course) => course.id == 12)
      .lessons.find((lesson) => lesson.id == 103).status = true;
    saveData();
  }
}

overlay.addEventListener("click", () => {
  modalFinal.classList.remove("showFlex");
  overlay.classList.remove("show");
});

backButton.addEventListener("click", () => {
  window.location.href =
    "/team2-mankai-user/SessionManager/pages/jpPrimary_Test.html";
});

returnButton.addEventListener("click", () => {
  window.location.href =
    "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html";
});

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    selectedOption = null;
    isAnswerLocked = false;
    loadQuestion();

    const buttonContainer = document.querySelector(".container-button");
    buttonContainer.classList.remove("hidden");

    const checkButton = document.querySelector(".check");
    checkButton.disabled = true;
    checkButton.style.opacity = "0.5";
    checkButton.style.color = "#B5B5B5";
    checkButton.style.borderColor = "#B5B5B5";
    checkButton.style.boxShadow = "0px 2px 0px 0px #B5B5B5";

    document.querySelector(".true").classList.add("hidden");
    document.querySelector(".false").classList.add("hidden");
  }
}

function setupControls() {
  const checkButton = document.querySelector(".check");
  checkButton.addEventListener("click", checkAnswer);

  const prevButton = document.querySelector(".question-previous");
  prevButton.addEventListener("click", prevQuestion);

  const continueButton = document.querySelector(".btn-continue");
  continueButton.addEventListener("click", nextQuestion);

  const continueFalseButton = document.querySelector(".btn-continue-false");
  continueFalseButton.addEventListener("click", nextQuestion);
}

loadQuestion();
setupControls();
