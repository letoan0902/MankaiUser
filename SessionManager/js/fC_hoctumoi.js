const wordList = JSON.parse(localStorage.getItem("newWordsFC")) || [];

// DOM elements
const textDisplay = document.querySelector(".table-display .text");
const currentPage = document.querySelector(".current-page");
const btnRemember = document.querySelectorAll(".frame-btn")[1]; // "Đã thuộc"
const btnNotRemember = document.querySelectorAll(".frame-btn")[0]; // "Chưa thuộc"
const popup = document.querySelector(".pop-up");
const popupCorrect = popup.querySelector(".frame-result .pop-up-correct");
const popupWrong = popup.querySelector(".frame-result .pop-up-wrong");
const btnBack = document.querySelector(".btn-pre");
const btnReplay = document.querySelector(".btn-re");
const iconPower = document.querySelector(".icon-power");

let index = 0;

// Hiển thị thẻ
function renderCard() {
    if (!wordList[index]) return;
    textDisplay.textContent = wordList[index].word;
    currentPage.textContent = `${index + 1}/${wordList.length}`;
}

// Hiện popup và làm mờ nền
function showResultPopup() {
    const known = wordList.filter(w => w.status === true).length;
    const unknown = wordList.filter(w => w.status === false).length;

    popupCorrect.textContent = known;
    popupWrong.textContent = unknown;
    popup.style.display = "flex";
    document.body.classList.add("blur-background");

    // localStorage.removeItem("newWordsFC"); // clear nếu cần
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
    nextCard();
});

btnNotRemember.addEventListener("click", () => {
    wordList[index].status = false;
    nextCard();
});

// Nút quay về
btnBack.addEventListener("click", () => {
    window.location.href = "./flashCard.html";
});

iconPower.addEventListener("click", () => {
    window.location.href = "./flashCard.html";
});

// Nút học lại
btnReplay.addEventListener("click", () => {
    index = 0;
    wordList.forEach(w => w.status = null);
    popup.style.display = "none";
    document.body.classList.remove("blur-background");
    renderCard();
});

renderCard();