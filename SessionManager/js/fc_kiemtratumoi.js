document.addEventListener("DOMContentLoaded", function () {
  const lessonData = JSON.parse(localStorage.getItem("selectedLessonFlashCard"));
  if (!lessonData || !lessonData.test) {
    console.error("Không tìm thấy dữ liệu bài kiểm tra.");
    return;
  }

  const test = lessonData.test;
  let currentQuestionIndex = 0;
  let correctCount = 0;
  const totalQuestions = test.length;

  const progressBar = document.querySelector(".progress-bar .completed");
  const wordOnTable = document.querySelector(".word-on-table");
  const answerOptions = document.querySelectorAll(".answer");
  const explainFrame = document.querySelector(".explain-frame");
  const explainResult = document.getElementById("result");
  const explainText = document.getElementById("explain");
  const resultFrame = document.querySelector(".result-frame");
  const resultContent = document.getElementById("result-content");
  const resultComment = document.getElementById("result-comment");
  const resultImage = document.getElementById("result-img");
  const btnNext = document.querySelector(".result-btn-next");
  const btnCheck = document.querySelector("#question-check");
  const popup = document.querySelector(".pop-up");
  const scoreResult = document.querySelector(".table-result .result");
  const btnBackMain = document.querySelector(".left-content svg");

    btnBackMain.addEventListener("click", ()=>{
        window.location.href = "./flashCard.html"
    });

  let selectedAnswer = null;

  // Khởi tạo câu hỏi đầu tiên
  renderQuestion(currentQuestionIndex);

  function renderQuestion(index) {
    const question = test[index];
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

  const question = test[currentQuestionIndex];
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
    const answerText = option.querySelector(".answer-content").textContent;
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


  // Xử lý khi nhấn nút tiếp tục
  btnNext.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      renderQuestion(currentQuestionIndex);
    } else {
      showResultPopup();
    }
  });

  // Hiển thị kết quả cuối cùng
  function showResultPopup() {
    popup.style.display = "flex";
    document.querySelector(".table-result .result").textContent = `${correctCount}/${totalQuestions}`;
    document.querySelector(".frame-result .result").textContent = correctCount === totalQuestions ? 1 : 0;
  }

  // Nút quay về
  document.querySelector(".btn-pre").addEventListener("click", function () {
    window.location.href = "./flashCard.html";
  });

  // Nút làm lại
  document.querySelector(".btn-re").addEventListener("click", function () {
    popup.style.display = "none";
    currentQuestionIndex = 0;
    correctCount = 0;
    renderQuestion(currentQuestionIndex);
  });
});
