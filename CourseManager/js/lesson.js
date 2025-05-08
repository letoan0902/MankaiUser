
const courseNameElements = document.querySelectorAll(".course-name");
const courseName = JSON.parse(localStorage.getItem("courseName"));

courseNameElements.forEach(element => {
    element.innerHTML += `"${courseName}"`;
});

const containerLesson = document.querySelector(".container-lesson");
containerLesson.addEventListener("click", function () {
    window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html";
});