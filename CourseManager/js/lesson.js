document.addEventListener("DOMContentLoaded", function() {
    // Lấy thông tin khóa học đã chọn từ localStorage
    const courseName = JSON.parse(localStorage.getItem("courseName"));
    if (!courseName) {
        console.error("Không tìm thấy khóa học đã chọn.");
        return;
    }

    // Lấy dữ liệu người dùng từ localStorage
    let users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    } else {
        console.error("Không tìm thấy dữ liệu người dùng.");
        return;
    }

    // Tìm khóa học đã chọn trong danh sách
    const user = users.find(u => u.course?.some(c => c.name === courseName));
    if (!user) {
        console.error("Không tìm thấy người dùng với khóa học đã chọn.");
        return;
    }

    const course = user.course.find(c => c.name === courseName);
    if (!course) {
        console.error("Không tìm thấy khóa học đã chọn trong danh sách.");
        return;
    }

    // Cập nhật tên khóa học
    document.querySelectorAll(".course-name").forEach(el => el.textContent += `"${courseName}"`);

    const lessonContainer = document.querySelector(".container-content");
    lessonContainer.innerHTML = ""; // Xóa sạch nội dung cũ

    // Tạo danh sách bài học
    course.lessons.forEach((lesson, index) => {
        const lessonCard = document.createElement("div");
        lessonCard.classList.add("container-lesson");
        lessonCard.setAttribute("data-index", index); // Gán index cho từng bài học

        // Tìm số video và bài kiểm tra
        const videoDetail = lesson.detail.find(d => d.name === "Video");
        const testDetail = lesson.detail.find(d => d.name === "Bài kiểm tra");

        const videoCount = videoDetail?.videos?.length || 0;
        const testCount = testDetail?.test?.length || 0;
        const lessonTime = lesson.time || 0;

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
    document.querySelectorAll(".container-lesson").forEach((lesson) => {
        lesson.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            const selectedLesson = course.lessons[index];

            // Lấy phần Flash Card trong detail
            const flashCardDetail = selectedLesson.detail.find(detail => detail.name === "Flash Card");
            if (flashCardDetail) {
                localStorage.setItem("selectedLessonFlashCard", JSON.stringify(flashCardDetail));
                window.location.href = "/team2-mankai-user/SessionManager/pages/flashCard.html";
            } else {
                console.error("Không tìm thấy Flash Card trong bài học.");
            }
        });
    });
});
