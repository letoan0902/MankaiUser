document.addEventListener("DOMContentLoaded", function () {
  let lessonData = JSON.parse(localStorage.getItem("selectedLessonFlashCard"));
  localStorage.setItem("progressFC3", 0);
  if (!lessonData || !lessonData.test) {
    return;
  }

  let test = lessonData.test;
  let currentQuestionIndex = 0;
  let correctCount = 0;
  let totalQuestions = test.length;

  let progressBar = document.querySelector(".loading-bar");
  let wordOnTable = document.querySelector(".word-on-table");
  let answerOptions = document.querySelectorAll(".answer");
  let explainFrame = document.querySelector(".explain-frame");
  let explainResult = document.getElementById("result");
  let explainText = document.getElementById("explain");
  let resultFrame = document.querySelector(".result-frame");
  let resultContent = document.getElementById("result-content");
  let resultComment = document.getElementById("result-comment");
  let resultImage = document.getElementById("result-img");
  let btnNext = document.querySelector(".result-btn-next");
  let frameBtn = document.querySelector(".frame-btn");
  let btnPrev = document.querySelector("#question-pre");
  let btnCheck = document.querySelector("#question-check");
  let popup = document.querySelector(".pop-up");
  let scoreResult = document.querySelector(".table-result .result");
  let btnBackMain = document.querySelector(".left-content svg");
  let btnClear = document.querySelector(".btn-clear");
  let btnBlur = document.querySelector(".btn-blur");
  let progressFC = JSON.parse(localStorage.getItem("progressFC")) || 0;

  frameBtn.style.display = "flex";

  btnBlur.addEventListener("click", ()=>{
    window.location.href = "./fc_ghepthe.html"
  });

  btnClear.addEventListener("click", ()=>{
    window.location.href = "/team2-mankai-user/ExamManager/pages/baikiemtra.html"
  });

  btnBackMain.addEventListener("click", ()=>{
      window.location.href = "./flashCard.html"
  });

  let selectedAnswer = null;

  // Khởi tạo câu hỏi đầu tiên
  renderQuestion(currentQuestionIndex);

  function renderQuestion(index) {
    let question = test[index];
    if (!question) return;

    // Cập nhật thanh tiến trình
    progressBar.style.width = `${((index) / totalQuestions) * 100}%`;

    // Hiển thị câu hỏi và đáp án
    wordOnTable.textContent = question.questions;
    answerOptions.forEach((option, i) => {
      option.querySelector(".answer-content").textContent = question.answer[i];
      option.classList.remove("selected");
      option.style.border = "1px solid var(--Gray-100, #DDD)";
      option.style.background = "var(--Gray-25, #FAFAFA)";
      option.style.boxShadow = "0px 4px 0px 0px #DDD";
    });

    // Đặt lại các trạng thái
    explainFrame.style.display = "none";
    resultFrame.style.display = "none";
    btnCheck.style = "";
    selectedAnswer = null;
  }

  // Chọn câu trả lời
  answerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Đặt lại CSS mặc định cho tất cả các đáp án
    answerOptions.forEach((opt) => {
      opt.classList.remove("selected");
      opt.style.border = "1px solid var(--Gray-100, #DDD)";
      opt.style.background = "var(--Gray-25, #FAFAFA)";
      opt.style.boxShadow = "0px 4px 0px 0px #DDD";
    });

    // Đánh dấu đáp án được chọn và áp dụng CSS mới
    this.classList.add("selected");
    selectedAnswer = this.querySelector(".answer-content").textContent;
    this.style.border = "1px solid #0BA5EC";
    this.style.background = "#F0F9FF";
    this.style.boxShadow = "0px 4px 0px 0px #0BA5EC";

    // Đổi CSS của nút kiểm tra
    btnCheck.style.boxShadow = "0px 2px 0px 0px #039855";
    btnCheck.style.border = "1px solid var(--Success-600, #039855)";
    btnCheck.style.background = "var(--Success-400, #32D583)";
    btnCheck.style.color = "var(--White, #FFF)";
  });
});

  // Xử lý khi nhấn nút kiểm tra
btnCheck.addEventListener("click", function () {
  if (selectedAnswer === null) {
    return;
  }

  frameBtn.style.display = "none";

  let question = test[currentQuestionIndex];
  explainFrame.style.display = "block";
  explainResult.textContent = question.result;
  explainText.textContent = question.explain;

  // Đặt lại CSS mặc định cho tất cả các đáp án
  answerOptions.forEach((option) => {
    option.style.border = "1px solid var(--Gray-100, #DDD)";
    option.style.background = "var(--Gray-25, #FAFAFA)";
    option.style.color = "var(--Gray-800, #3D3D3D)";
    option.style.boxShadow = "0px 4px 0px 0px #DDD";
  });

  // Xác định đáp án đúng và đáp án đã chọn
  answerOptions.forEach((option) => {
    let answerText = option.querySelector(".answer-content").textContent;
    if (answerText === question.correctAnswer) {
      // Đáp án đúng
      option.style.background = "#ECFDF3";
      option.style.color = "#12B76A";
      option.style.border = "1px solid #12B76A";
      option.style.boxShadow = "0px 4px 0px 0px #12B76A";
    }

    if (answerText === selectedAnswer) {
      if (selectedAnswer === question.correctAnswer) {
        correctCount++;
        resultContent.textContent = "Chính xác! Làm tốt lắm";
        resultContent.style.color = "#12B76A";
        resultComment.textContent = "Hãy tiếp tục phát huy";
        resultImage.src = "/team2-mankai-user/assets/image/fc-kiemtra-DauTich.png";
        resultFrame.style.background = "var(--Success-100, #D1FADF)";
        resultFrame.style.borderTop = "1px solid var(--Success-400, #32D583)";
        btnNext.style.boxShadow = "0px 2px 0px 0px #12B76A";
        btnNext.style.border = "1px solid var(--Success-600, #039855)";
        btnNext.style.background = "var(--Success-400, #32D583)";
      } else {
        // Đáp án sai
        option.style.background = "#FEF3F2";
        option.style.color = "#F04438";
        option.style.border = "1px solid #F04438";
        option.style.boxShadow = "0px 4px 0px 0px #F04438";

        resultContent.textContent = "Chưa chính xác";
        resultContent.style.color = "#F04438";
        resultComment.textContent = "Hãy xem lời giải để hiểu bài nhé";
        resultImage.src = "/team2-mankai-user/assets/image/fc-kiemtra-DauX.png";
        resultFrame.style.background = "var(--Error-50, #FEF3F2)";
        resultFrame.style.borderTop = "1px solid var(--Error-500, #F04438)";
        btnNext.style.boxShadow = "0px 2px 0px 0px #D92D20";
        btnNext.style.border = "1px solid var(--Error-600, #D92D20)";
        btnNext.style.background = "var(--Error-400, #F97066)";
      }
    }
  });

  resultFrame.style.display = "flex";
});

  // Xử lý nhấn nút câu trước
  btnPrev.addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
      let question = test[currentQuestionIndex];
      explainFrame.style.display = "block";
      explainResult.textContent = question.result;
      explainText.textContent = question.explain;
    }
  });

  // Xử lý khi nhấn nút tiếp tục
  btnNext.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      frameBtn.style.display = "flex";
      renderQuestion(currentQuestionIndex);
    } else {
      progressBar.style.width = `100%`;
      showResultPopup();
    }
  });

  // Hiển thị kết quả cuối cùng
  function showResultPopup() {
    let courseName = JSON.parse(localStorage.getItem("courseName"));
    let selectedLessonId = JSON.parse(localStorage.getItem("selectedLessonId"));

        let course = user.course.find(c => c.name === courseName); 
        let lesson = course.lessons.find(l => l.id === selectedLessonId);
        let detail = lesson.detail.find(d => d.name === "Flash Card");

        if (detail) {            
            detail.progress3 = 33
        }

        saveData();
        // Lưu vào validation.js
        localStorage.setItem("selectedLessonFlashCard", JSON.stringify(lessonData));
    popup.style.display = "flex";
    popup.style.animation = 'slideIn 0.3s ease forwards'
    document.body.classList.add("blur-background");
    document.querySelector("#point").textContent = `${correctCount}/${totalQuestions}`;
    document.querySelector("#exp").textContent = correctCount === totalQuestions ? 1 : 0;
  }

  // Nút quay về
  document.querySelector(".btn-pre").addEventListener("click", function () {
    window.location.href = "./flashCard.html";
  });

  // Nút làm lại
  document.querySelector(".btn-re").addEventListener("click", function () {
    frameBtn.style.display = "flex";
    popup.style.display = "none";
    currentQuestionIndex = 0;
    correctCount = 0;
    renderQuestion(currentQuestionIndex);
  });
  updateSvg("progress-circle-fc",progressFC , "#F37142");
});
