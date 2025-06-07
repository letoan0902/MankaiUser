document.addEventListener("DOMContentLoaded", function () {
  let courseName = JSON.parse(localStorage.getItem("courseName"));
  if (!courseName) {
    console.error("Không tìm thấy khóa học đã chọn.");
    return;
  }

  let course = user.course.find((c) => c.name === courseName);
  if (!course) {
    console.error("Không tìm thấy khóa học đã chọn trong danh sách.");
    return;
  }

  document
    .querySelectorAll(".course-name")
    .forEach((el) => (el.textContent += `"${courseName}"`));

  let lessonContainer = document.querySelector(".container-content");
  lessonContainer.innerHTML = "";

  course.lessons.forEach((lesson, index) => {
    let lessonCard = document.createElement("div");
    lessonCard.classList.add("container-lesson");
    lessonCard.setAttribute("data-index", index);

    let videoDetail = lesson.detail.find((d) => d.name === "Video");
    let testDetail = lesson.detail.find((d) => d.name === "Bài kiểm tra");

    let videoCount = videoDetail?.videos?.length || 0;
    let testCount = testDetail?.test?.length || 0;
    let lessonTime = lesson.time || 0;

    lessonCard.innerHTML = `
            <p class="course-name">${course.name}</p>
            <h2>${lesson.name}</h2>
            <div class="task">
                <span>${videoCount} videos</span>
                <svg width="4" height="4"><circle cx="2" cy="2" r="2" fill="#F37142" /></svg>
                <span>${lessonTime} phút</span>
                <svg width="4" height="4"><circle cx="2" cy="2" r="2" fill="#F37142" /></svg>
                <span>${testCount} bài Test</span>
            </div>
            <div class="progress-bar">
                <div class="completion-rate" style="width: ${lesson.progress}%"></div>
            </div>
            <span class="progress">${lesson.progress}% Hoàn thành</span>
        `;

    lessonContainer.appendChild(lessonCard);
  });

  // Gán sự kiện cho các bài học sau khi tạo
  document.querySelectorAll(".container-lesson").forEach((lesson, idx) => {
    lesson.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      let selectedLesson = course.lessons[index];
      localStorage.setItem(
        "selectedLessonId",
        JSON.stringify(selectedLesson.id)
      );
      localStorage.setItem("indexLesson", JSON.stringify(idx));
      localStorage.setItem("lessonId", JSON.stringify(selectedLesson.id));
      localStorage.setItem(
        "progressFC",
        JSON.stringify(selectedLesson.progress)
      );

      let flashCardDetail = selectedLesson.detail.find(
        (detail) => detail.name === "Flash Card"
      );
      if (flashCardDetail) {
        localStorage.setItem(
          "selectedLessonFlashCard",
          JSON.stringify(flashCardDetail)
        );
        window.location.href =
          "../../SessionManager/pages/vocabulary_Detail.html";
        localStorage.setItem("renderStatus", "video");
      } else {
        console.error("Không tìm thấy Flash Card trong bài học.");
      }
    });
  });
});
