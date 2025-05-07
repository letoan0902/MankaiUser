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

const pageChangeVideo = document.getElementById("page-change-video");
pageChangeVideo.addEventListener("click", function () {
    window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html";
});

const pageChangeText = document.getElementById("page-change-text");
pageChangeText.addEventListener("click", function () {
    window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Text.html";
});

const pageChangeSlide = document.getElementById("page-change-slide");
pageChangeSlide.addEventListener("click", function () {
    window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Slide.html";
});
