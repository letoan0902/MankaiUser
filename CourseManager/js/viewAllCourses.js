document.addEventListener("DOMContentLoaded", function () {
  const courseList = document.querySelector(".course-list");
  courseList.innerHTML = "";

  const courseRow = document.createElement("div");
  courseRow.classList.add("course-row");

  if (user.course) {
    user.course.forEach((course) => {
      // Tạo course-card
      const courseCard = document.createElement("div");
      courseCard.classList.add("course-card");

      courseCard.innerHTML = `
                    <div class="frame-top">
                        <img src="${course.image}" alt="${course.name}" class="course-image">
                        <div class="content-img">
                          <p class="course-title">Khóa học</p>
                          <p class="course-name">${course.name}</p>
                        </div>
                    </div>
                    <div class="frame-bottom">
                        <div class="card-content">
                            <div class="content1">
                                <div class="text-content">Khóa học</div>
                                <div class="course-name">${course.name}</div>
                            </div>
                            <div class="content2">${course.lessons.length} bài học</div>
                        </div>
                        <div class="btn">
                            <button class="btn-play" onclick="startCourse('${course.name}')">
                                <img src="/team2-mankai-user/assets/icons/play.png" alt="" />
                                <svg
                    class="in-btn"
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="44"
                    viewBox="0 0 53 44"
                    fill="none"
                  >
                    <g opacity="0.5">
                      <g style="mix-blend-mode: soft-light">
                        <rect
                          x="9.9873"
                          y="-20.0674"
                          width="10.8577"
                          height="109.684"
                          transform="rotate(-27.1119 9.9873 -20.0674)"
                          fill="#FBD3C4"
                        />
                      </g>
                      <g style="mix-blend-mode: soft-light">
                        <rect
                          x="24.7432"
                          y="-20.0674"
                          width="1.9657"
                          height="109.684"
                          transform="rotate(-27.1119 24.7432 -20.0674)"
                          fill="#FBD3C4"
                        />
                      </g>
                      <g style="mix-blend-mode: soft-light">
                        <rect
                          x="0.624023"
                          y="-20.0674"
                          width="5.16073"
                          height="109.684"
                          transform="rotate(-27.1119 0.624023 -20.0674)"
                          fill="#FBD3C4"
                        />
                      </g>
                    </g>
                  </svg>
                            </button>
                        </div>
                    </div>
                `;

      courseRow.appendChild(courseCard);
    });
  }

  // Đưa dòng khóa học vào danh sách khóa học
  courseList.appendChild(courseRow);
});

// Hàm bắt đầu khóa học, lưu vào localStorage và chuyển trang
function startCourse(courseName) {
  localStorage.setItem("courseName", JSON.stringify(courseName));
  if (courseName == "Tiếng Nhật Sơ Cấp") {
    window.location.href =
      "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html";
  } else {
    window.location.href = "lesson.html";
  }
}
