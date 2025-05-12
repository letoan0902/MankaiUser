document.addEventListener("DOMContentLoaded", function() {
    // Lấy dữ liệu từ validation.js
    let users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    } else {
        console.error("Không tìm thấy dữ liệu users trong validation.js");
        return;
    }

    const courseList = document.querySelector(".course-list");
    courseList.innerHTML = ""; // Xóa nội dung cũ

    // Tạo dòng chứa khóa học
    const courseRow = document.createElement("div");
    courseRow.classList.add("course-row");

    // Duyệt qua users và render khóa học
    users.forEach(category => {
        if (category.course) {
            category.course.forEach(course => {
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
                            </button>
                        </div>
                    </div>
                `;

                courseRow.appendChild(courseCard);
            });
        }
    });

    // Đưa dòng khóa học vào danh sách khóa học
    courseList.appendChild(courseRow);
});

// Hàm bắt đầu khóa học, lưu vào localStorage và chuyển trang
function startCourse(courseName) {
    localStorage.setItem("courseName", JSON.stringify(courseName));
    window.location.href = "lesson.html";
}
