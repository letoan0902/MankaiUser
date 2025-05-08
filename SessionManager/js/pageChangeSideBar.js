// const pageChangeVideo = document.getElementById("page-change-video");
// pageChangeVideo.addEventListener("click", function () {
//     window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html";
// });

// const pageChangeFC = document.getElementById("page-change-FC");
// pageChangeFC.addEventListener("click", function () {
//     if(pageChangeFC.classList.contains("this-page")) {
//         return;
//     }
//     window.location.href = "/team2-mankai-user/SessionManager/pages/flashCard.html";
// });

// const pageChangeTest = document.getElementById("page-change-test");
// pageChangeTest.addEventListener("click", function () {
//     window.location.href = "/team2-mankai-user/SessionManager/pages/test.html";
// });

// const pageChangeText = document.getElementById("page-change-text");
// pageChangeText.addEventListener("click", function () {
//     window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Text.html";
// });

// const pageChangeSlide = document.getElementById("page-change-slide");
// pageChangeSlide.addEventListener("click", function () {
//     window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Slide.html";
// });

// const pageChangeAudio = document.getElementById("page-change-audio");
// pageChangeAudio.addEventListener("click", function () {
//     window.location.href = "/team2-mankai-user/SessionManager/pages/audio.html";
// });
const pages = [
    { id: "page-change-video", url: "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html" },
    { id: "page-change-FC", url: "/team2-mankai-user/SessionManager/pages/flashCard.html" },
    { id: "page-change-test", url: "/team2-mankai-user/SessionManager/pages/test.html" },
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