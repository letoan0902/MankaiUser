let modalExam = document.querySelector(".modal-exam");
modalExam.style.display = "none";
let overlay = document.querySelector(".overlay");
overlay.style.display = "none";
let indexExamN = parseInt(localStorage.getItem("indexExamN")) || 0;
let indexExamS = 0;

let containerExam = document.querySelector(".container-content");
let title = document.querySelector(".title");
title.innerHTML = `Tiếng Nhật N${indexExamN + 1}`;
let course = document.querySelector(".course");
course.innerHTML = `Tiếng Nhật ${indexExamN + 1}`;

let jpLevel = document.querySelector(".jpLevel");
jpLevel.innerHTML = `Tiếng Nhật N${indexExamN + 1}`;
let examJPLevel = document.querySelector(".examJPLevel");

let totalTimeExam = document.querySelector(".total-time-exam");
totalTimeExam.innerHTML = `${user.studyMankai[2].detail[indexExamN].exams[indexExamS].time} phút`;
let timeExamVocab = document.querySelector(".time-exam-vocab");
timeExamVocab.innerHTML = `Thời gian: ${user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[0].time} phút`;
let timeExamGrammar = document.querySelector(".time-exam-grammar");
timeExamGrammar.innerHTML = `Thời gian: ${user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[1].time} phút`;
let timeExamListen = document.querySelector(".time-exam-listen");
timeExamListen.innerHTML = `Thời gian: ${user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[2].time} phút`;

let totalQuestionVocab = document.querySelector(".total-question-vocab");
let totalQuestionGrammar = document.querySelector(".total-question-grammar");
let totalQuestionListen = document.querySelector(".total-question-listen");

function calculateTotalQuestions(indexExamN, indexExamS) {
  let exam = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure;

  let totalVocabQuestions = 0;
  let totalGrammarQuestions = 0;
  let totalListeningQuestions = 0;

  totalVocabQuestions = exam[0].questions.reduce((total, question) => {
    return total + question.list.length;
  }, 0);

  totalGrammarQuestions = exam[1].questions.reduce((total, question) => {
    return total + question.list.length;
  }, 0);

  totalListeningQuestions = exam[2].questions.reduce((total, question) => {
    return total + question.list.length;
  }, 0);

  return {
    totalVocabQuestions,
    totalGrammarQuestions,
    totalListeningQuestions,
  };
}

function renderListExam(index) {
  let html = user.studyMankai[2].detail[indexExamN].exams.map((data) => {
    return `
        <div class="container-exam">
                    <p>Tiếng nhật N${indexExamN + 1}</p>
                    <h2>${data.name}</h2>
                    <div class="people-join">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6.10671 7.24658C6.04004 7.23992 5.96004 7.23992 5.88671 7.24658C4.30004 7.19325 3.04004 5.89325 3.04004 4.29325C3.04004 2.65992 4.36004 1.33325 6.00004 1.33325C7.63337 1.33325 8.96004 2.65992 8.96004 4.29325C8.95337 5.89325 7.69337 7.19325 6.10671 7.24658Z" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.9402 2.66675C12.2335 2.66675 13.2735 3.71341 13.2735 5.00008C13.2735 6.26008 12.2735 7.28675 11.0268 7.33341C10.9735 7.32675 10.9135 7.32675 10.8535 7.33341" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.77348 9.70675C1.16014 10.7867 1.16014 12.5467 2.77348 13.6201C4.60681 14.8467 7.61348 14.8467 9.44681 13.6201C11.0601 12.5401 11.0601 10.7801 9.44681 9.70675C7.62014 8.48675 4.61348 8.48675 2.77348 9.70675Z" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.2266 13.3333C12.7066 13.2333 13.1599 13.0399 13.5332 12.7533C14.5732 11.9733 14.5732 10.6866 13.5332 9.90659C13.1666 9.62659 12.7199 9.43992 12.2466 9.33325" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span>9626 người tham gia</span>
                    </div>
                    <div class="time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_5145_3083)">
                              <path d="M8.00016 3.99992V7.99992L10.6668 9.33325M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z" stroke="#676767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_5145_3083">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          <span>${data.time} phút</span>
                    </div>
                    <div class="btn-exam">
                        <img class="join-item-exam" src="/team2-mankai-user/assets/image/Button vào thi.png" alt="">
                    </div>
                </div>
      `;
  });

  let convert = html.join("");
  containerExam.innerHTML = convert;

  let btnJoinItemExam = document.querySelectorAll(".join-item-exam");
  btnJoinItemExam.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      indexExamS = index;
      examJPLevel.innerHTML = `Đề Thi JLPT N${indexExamN + 1} Số ${
        indexExamS + 1
      }`;
      modalExam.style.display = "flex";
      modalExam.style.animation = "slideIn 0.3s ease forwards";
      overlay.style.display = "block";
      localStorage.removeItem("indexExamS");
      localStorage.setItem("indexExamS", JSON.stringify(index));

      let result = calculateTotalQuestions(indexExamN, indexExamS);

      let totalVocabQuestions = result.totalVocabQuestions;
      let totalGrammarQuestions = result.totalGrammarQuestions;
      let totalListeningQuestions = result.totalListeningQuestions;

      totalQuestionVocab.innerHTML = `Số câu hỏi: ${totalVocabQuestions} câu`;
      totalQuestionGrammar.innerHTML = `Số câu hỏi: ${totalGrammarQuestions} câu`;
      totalQuestionListen.innerHTML = `Số câu hỏi: ${totalListeningQuestions} câu`;
    });
  });

  let joinExam = document.querySelector("#btn-join-exam");
  joinExam.addEventListener("click", function () {
    document.location.href = "./exam-vocab.html";
  });

  let btnReturn = document.querySelector("#btn-return");
  btnReturn.addEventListener("click", function () {
    modalExam.style.display = "none";
    overlay.style.display = "none";
  });
}

renderListExam();
saveData();
