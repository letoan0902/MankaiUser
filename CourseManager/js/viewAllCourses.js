const elementaryJPBtn = document.getElementById("elementary-JP-btn");
const japaneseN1Btn = document.getElementById("japanese-N1-btn");
const japaneseN2Btn = document.getElementById("japanese-N2-btn");
const japaneseN3Btn = document.getElementById("japanese-N3-btn");
const japaneseN4Btn = document.getElementById("japanese-N4-btn");
const japaneseN5Btn = document.getElementById("japanese-N5-btn");

const courseNameLocal = JSON.parse(localStorage.getItem("courseName") || "[]");

elementaryJPBtn.addEventListener("click", function () {
  window.location.href = "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html";
});
japaneseN1Btn.addEventListener("click", function () {
  const courseName = "Tiếng Nhật N1";
  localStorage.setItem("courseName", JSON.stringify(courseName));
  window.location.href = "lesson.html";
});
japaneseN2Btn.addEventListener("click", function () {
  const courseName = "Tiếng Nhật N2";
  localStorage.setItem("courseName", JSON.stringify(courseName));
  window.location.href = "lesson.html";
});
japaneseN3Btn.addEventListener("click", function () {
  const courseName = "Tiếng Nhật N3";
  localStorage.setItem("courseName", JSON.stringify(courseName));
  window.location.href = "lesson.html";
});
japaneseN4Btn.addEventListener("click", function () {
  const courseName = "Tiếng Nhật N4";
  localStorage.setItem("courseName", JSON.stringify(courseName));
  window.location.href = "lesson.html";
});
japaneseN5Btn.addEventListener("click", function () {
  const courseName = "Tiếng Nhật N5";
  localStorage.setItem("courseName", JSON.stringify(courseName));
  window.location.href = "lesson.html";
});

const logoContainer = document.querySelector(".logo-container");
logoContainer.addEventListener("click", function () {
  window.location.href = "/team2-mankai-user/TopicManager-VocabularyManager/pages/homePage.html";
});