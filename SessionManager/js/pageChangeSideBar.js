const pages = [
    { id: "page-change-video", url: "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html" },
    { id: "page-change-FC", url: "/team2-mankai-user/SessionManager/pages/flashCard.html" },
    { id: "page-change-test", url: "/team2-mankai-user/ExamManager/pages/baikiemtra.html" },
    { id: "page-change-text", url: "/team2-mankai-user/SessionManager/pages/vocabulary_Text.html" },
    { id: "page-change-slide", url: "/team2-mankai-user/SessionManager/pages/vocabulary_Slide.html" },
    { id: "page-change-audio", url: "/team2-mankai-user/SessionManager/pages/audio.html" }
];

pages.forEach(page => {
    const element = document.getElementById(page.id);
    if (element) {
        element.addEventListener("click", () => {
            if (element.classList.contains("this-page")) return;
            window.location.href = page.url;
        });
    }
});

const btnPower = document.querySelector(".frame-btn-power");
btnPower.addEventListener("click", () => {
    window.location.href = "./flashCard.html";
});