
// Thay đổi từ dòng đầu tiên
let selectedLesson = JSON.parse(localStorage.getItem("selectedLessonFlashCard")) || {};
let wordList = selectedLesson.vocabulary ? [...selectedLesson.vocabulary] : [];
let unlearnedWords = JSON.parse(localStorage.getItem("unlearnedWords")) || [];
let progressFC = JSON.parse(localStorage.getItem("progressFC")) || 0;

// Nếu có từ chưa thuộc đã lưu, chỉ học lại những từ đó
if (unlearnedWords.length > 0) {
  wordList = unlearnedWords;
}

// DOM elements
let textDisplay = document.querySelector(".table-display .text");
let currentPage = document.querySelector(".current-page");
let btnRemember = document.querySelectorAll(".frame-btn")[1];
let btnNotRemember = document.querySelectorAll(".frame-btn")[0];
let popup = document.querySelector(".pop-up");
let popupCorrect = popup.querySelector(".frame-result .pop-up-correct");
let popupWrong = popup.querySelector(".frame-result .pop-up-wrong");
let btnBack = document.querySelector(".btn-pre");
let btnReplay = document.querySelector(".btn-re");
let btnBackMain = document.querySelector(".left-content svg");
let btnClear = document.querySelector(".btn-clear");

btnClear.addEventListener("click", () => {
    window.location.href = "./fc_ghepthe.html";
});

btnBackMain.addEventListener("click", () => {
    window.location.href = "./flashCard.html";
});

let index = 0;

// Hiển thị thẻ
function renderCard() {
    if (!wordList[index]) return;
    textDisplay.textContent = wordList[index].word;
    currentPage.textContent = `${index + 1}/${wordList.length}`;
}

// Hiện popup và làm mờ nền
function showResultPopup() {
    let known = wordList.filter(w => w.status === true).length;
    let unknown = wordList.filter(w => w.status === false).length;

    popupCorrect.textContent = known;
    popupWrong.textContent = unknown;

    // Lưu lại những từ chưa thuộc vào localStorage
    unlearnedWords = wordList.filter(w => w.status === false);
    localStorage.setItem("unlearnedWords", JSON.stringify(unlearnedWords));

    popup.style.display = "flex";
    document.body.classList.add("blur-background");
}

// Chuyển sang thẻ tiếp
function nextCard() {
    index++;
    if (index < wordList.length) {
        renderCard();
    } else {
        showResultPopup();
    }
}

// Sự kiện
btnRemember.addEventListener("click", () => {
    wordList[index].status = true;
    
    // Tìm từ gốc trong selectedLesson.vocabulary và cập nhật
    let originalWord = selectedLesson.vocabulary.find(word => word.id === wordList[index].id);
    if (originalWord) {
        originalWord.status = true;
    }

    localStorage.setItem("selectedLessonFlashCard", JSON.stringify(selectedLesson));
    updateProgress();
    nextCard();
});

btnNotRemember.addEventListener("click", () => {
    wordList[index].status = false;

    // Cập nhật vào từ gốc trong selectedLesson.vocabulary
    let originalWord = selectedLesson.vocabulary.find(word => word.id === wordList[index].id);
    if (originalWord) {
        originalWord.status = false;
    }

    localStorage.setItem("selectedLessonFlashCard", JSON.stringify(selectedLesson));
    updateProgress();
    nextCard();
});

// Nút quay về
btnBack.addEventListener("click", () => {
    window.location.href = "./flashCard.html";
});

// Nút học lại
btnReplay.addEventListener("click", () => {
    index = 0;
    popup.style.display = "none";
    document.body.classList.remove("blur-background");

    // Nếu có từ chưa thuộc đã lưu, chỉ học lại những từ đó
    if (unlearnedWords.length > 0) {
        wordList = unlearnedWords;
    } else {
        wordList = [...selectedLesson.vocabulary];
    }

    renderCard();
});

// Hàm cập nhật tiến trình
function updateProgress() {
    let total = selectedLesson.vocabulary.length;
    
    
    let learned = selectedLesson.vocabulary.filter(word => word.status === true).length;
    let progress = Math.floor((learned / total) * 100);
    localStorage.setItem("progressFC1", progress * 33 / 100);

    // Cập nhật vào dữ liệu người dùng (validation.js)
    let courseName = JSON.parse(localStorage.getItem("courseName"));
    let selectedLessonId = JSON.parse(localStorage.getItem("selectedLessonId"));

        let course = user.course.find(c => c.name === courseName); 
        let lesson = course.lessons.find(l => l.id === selectedLessonId);
        let detail = lesson.detail.find(d => d.name === "Flash Card");

        if (detail) {            
            // Cập nhật trạng thái các từ vựng trong dữ liệu gốc
            detail.vocabulary = selectedLesson.vocabulary;
            detail.progress1 = progress * 33 / 100;
        }

        saveData();
        // Lưu vào validation.js
        localStorage.setItem("selectedLessonFlashCard", JSON.stringify(selectedLesson));
}

// Bắt đầu hiển thị thẻ
updateProgress();
updateSvg("progress-circle-fc",progressFC , "#F37142");
renderCard();
