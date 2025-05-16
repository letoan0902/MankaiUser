
document.addEventListener("DOMContentLoaded", function() {
    const flashCardDetail = JSON.parse(localStorage.getItem("selectedLessonFlashCard"));

    // Tìm kiếm và gán dữ liệu cho progress trong validation
    const userLocal = JSON.parse(localStorage.getItem("user"));
    const courseName = JSON.parse(localStorage.getItem("courseName"));
    const selectedLessonId = JSON.parse(localStorage.getItem("selectedLessonId"));
    let progressUpdateSvg = 0;

    const user = users.find(u => u.id === userLocal.id);
    const course = user?.course.find(c => c.name === courseName);
    const lesson = course?.lessons.find(l => l.id === selectedLessonId);
    const detail = lesson?.detail.find(d => d.name === "Flash Card");

    if (detail) {
        detail.progress = flashCardDetail.progress;
        progressUpdateSvg = detail.progress;
    }

    // Cập nhật lại localStorage
    localStorage.setItem("selectedLessonFlashCard", JSON.stringify(flashCardDetail));
    localStorage.setItem("users", JSON.stringify(users));

    // Đảm bảo updateSvg được gọi sau khi cập nhật dữ liệu
    updateSvg("progress-circle-fc", progressUpdateSvg, "#F37142");

    if (!flashCardDetail) {
        return;
    }

    const newWordsFC = flashCardDetail.vocabulary;
    if (!newWordsFC || newWordsFC.length === 0) {
        return;
    }

    const wordDisplay = document.querySelector(".flip-card-front");
    const meaningDisplay = document.querySelector(".flip-card-back");
    const currentPage = document.querySelector(".current-page");
    const loadingBar = document.querySelector(".loading-bar");
    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-pre");
    const btnClear = document.querySelector(".btn-clear");
    const btnBlur = document.querySelector(".btn-blur");
    const btnBackMain = document.querySelector(".left-content svg");

    btnBackMain.addEventListener("click", ()=>{
        window.location.href = "/team2-mankai-user/CourseManager/pages/lesson.html"
    });

    btnBlur.addEventListener("click", ()=>{
        window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html"
    });

    btnClear.addEventListener("click", ()=>{
        window.location.href = "/team2-mankai-user/ExamManager/pages/baikiemtra.html"
    });
    
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

    let currentIndex = 0;
    const totalWords = newWordsFC.length;

    function renderCard(index) {
        const word = newWordsFC[index];
        wordDisplay.textContent = word.word;
        meaningDisplay.textContent = word.meaning;
        currentPage.textContent = `${index + 1}/${totalWords}`;
        loadingBar.style.width = `${((index + 1) / totalWords) * 100}%`;
    }

    btnNext.addEventListener("click", () => {
        if (currentIndex < totalWords - 1) {
            currentIndex++;
            renderCard(currentIndex);
        }
    });

    btnPrev.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderCard(currentIndex);
        }
    });

    renderCard(currentIndex);
});

let pageChangeTest = document.querySelector("#page-change-test");
pageChangeTest.addEventListener("click", function () {
    location.href = "/team2-mankai-user/ExamManager/pages/baikiemtra.html";
});
