
document.addEventListener("DOMContentLoaded", function () {
  // Lấy dữ liệu câu hỏi từ localStorage
  let courseName = JSON.parse(localStorage.getItem("courseName"));
  let selectedLessonId = JSON.parse(localStorage.getItem("selectedLessonId"));
  let users = JSON.parse(localStorage.getItem("users"));
  let user = users.find(u => u.id === JSON.parse(localStorage.getItem("user")).id);
  let course = user.course.find(c => c.name === courseName);
  let lesson = course.lessons.find(l => l.id === selectedLessonId);
  const detail = lesson.detail.find(d => d.name === "Audio / Script");
  const questions = detail.questions;
  let currentQuestionIndex = 0;
  let correctCount = 0;

  // DOM elements
  const sentence1 = document.getElementById("sentence-1");
  const sentence2 = document.getElementById("sentence-2");
  const inputAnswer = document.querySelector(".input-answer-audio");
  const btnCheck = document.getElementById("question-check");
  const btnPrev = document.getElementById("question-pre");
  const btnNext = document.querySelector(".result-btn-next");
  const currentQuestionText = document.querySelector(".current-question");
  let frameBtn = document.querySelector(".frame-btn");
  const resultFrame = document.querySelector(".result-frame");
  const resultContent = document.getElementById("result-content");
  const resultComment = document.getElementById("result-comment");
  const resultImage = document.getElementById("result-img");
  const popup = document.querySelector(".pop-up");
  const resultScore = document.querySelector("#point");
  const exp = document.querySelector("#exp");
    frameBtn.style.display = "flex";
  // Khởi tạo câu hỏi đầu tiên
  renderQuestion(currentQuestionIndex);

  function renderQuestion(index) {
    const question = questions[index];
    sentence1.innerHTML = question.sentence1;
    sentence2.innerHTML = question.sentence2;
    inputAnswer.value = "";
    currentQuestionText.textContent = `Câu ${index + 1}/${questions.length}`;
    resultFrame.style.display = "none";
    inputAnswer.style.border = "1px solid var(--Gray-100, #DDD)";
    btnCheck.style.background = "var(--White, #FFF)";
    btnCheck.style.color = "var(--Gray-300, #B5B5B5)";
  }

  // Xử lý khi nhập vào input
  inputAnswer.addEventListener("input", function () {
    if (inputAnswer.value.trim()) {
      btnCheck.style.background = "var(--Success-400, #32D583)";
      btnCheck.style.color = "var(--White, #FFF)";
    } else {
      btnCheck.style.background = "var(--White, #FFF)";
      btnCheck.style.color = "var(--Gray-300, #B5B5B5)";
    }
  });

  // Xử lý khi nhấn nút kiểm tra
  btnCheck.addEventListener("click", function () {
    const question = questions[currentQuestionIndex];
    const userAnswer = inputAnswer.value.trim();
    
    if (!userAnswer) return;

    if (userAnswer === question.answer) {
      correctCount++;
        frameBtn.style.display = "none";
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
        frameBtn.style.display = "none";
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

    resultFrame.style.display = "flex";
  });

  // Xử lý nút Câu trước
  btnPrev.addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
    }
  });

  // Xử lý nút Tiếp tục
  btnNext.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      renderQuestion(currentQuestionIndex);
      frameBtn.style.display = "flex";
    } else {
      showPopup();
      detail.progress = 100;
      localStorage.setItem("progressAudio", JSON.stringify(detail.progress));
      localStorage.setItem("user", JSON.stringify(user));
      updateSvg("progress-circle-audio", detail.progress, "#F37142");
    }
  });

  // Hiển thị popup kết quả cuối cùng
  function showPopup() {
    popup.style.display = "flex";
    popup.style.animation = 'slideIn 0.3s ease forwards'
    resultScore.textContent = `${correctCount}/${questions.length}`;
    exp.textContent = correctCount === questions.length ? 1 : 0
    document.body.classList.add("blur-background");
  }

  // Nút quay về từ popup
  document.querySelector(".btn-pre").addEventListener("click", () => {
    popup.style.display = "none";
    document.body.classList.remove("blur-background");
  });

  // Nút làm lại từ popup
  document.querySelector(".btn-re").addEventListener("click", () => {
    popup.style.display = "none";
    document.body.classList.remove("blur-background");
    frameBtn.style.display = "flex";
    correctCount = 0;
    currentQuestionIndex = 0;
    renderQuestion(currentQuestionIndex);
  });
});
