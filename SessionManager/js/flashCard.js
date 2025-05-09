let learnNewWords = document.querySelector(".learn-new-words");
learnNewWords.addEventListener("click", function () {
    window.location.href = "./fC_hoctumoi.html";
});

let cardMerge = document.querySelector(".card-merge");
cardMerge.addEventListener("click", function () {
    window.location.href = "./fC_ghepthe.html";
});

let testNewWords = document.querySelector(".test-new-words");
testNewWords.addEventListener("click", function () {
    window.location.href = "./fC_kiemtratumoi.html";
});

const newWorldFC = [
    {id: 1, word: "私は", meaning: "Tôi", status: false},
    {id: 2, word: "あなた", meaning: "Bạn", status: false},
    {id: 3, word: "彼", meaning: "Anh ấy", status: false},
    {id: 4, word: "彼女", meaning: "Cô ấy", status: false},
    {id: 5, word: "私たち", meaning: "Chúng tôi", status: false},
    {id: 6, word: "家族", meaning: "Gia đình", status: false},
    {id: 7, word: "友達", meaning: "Bạn bè", status: false},
    {id: 8, word: "学校", meaning: "Trường học", status: false},
    {id: 9, word: "仕事", meaning: "Công việc", status: false},
    {id: 10, word: "趣味", meaning: "Sở thích", status: false},
];
localStorage.setItem("newWordsFC", JSON.stringify(newWorldFC));

// Lấy các phần tử cần thiết từ HTML
const wordDisplay = document.querySelector(".display .text");
const currentPage = document.querySelector(".current-page");
const loadingBar = document.querySelector(".loading-bar");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-pre");

// Khởi tạo biến để theo dõi chỉ số từ hiện tại
let currentIndex = 0;
const totalWords = newWorldFC.length;

// Hàm hiển thị từ hiện tại
function renderCard(index) {
    const word = newWorldFC[index];
    wordDisplay.textContent = word.word;
    currentPage.textContent = `${index + 1}/${totalWords}`;
    loadingBar.style.width = `${((index + 1) / totalWords) * 100}%`;
}

// Nút tiếp theo
btnNext.addEventListener("click", () => {
    if (currentIndex < totalWords - 1) {
        currentIndex++;
        renderCard(currentIndex);
    }
});

// Nút trước đó
btnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderCard(currentIndex);
    }
});

// Gọi lần đầu
renderCard(currentIndex);
