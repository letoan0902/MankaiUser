
// const courseNameElements = document.querySelectorAll(".course-name");
// const courseName = JSON.parse(localStorage.getItem("courseName"));

// courseNameElements.forEach(element => {
//     element.innerHTML += `"${courseName}"`;
// });

// const containerLesson = document.querySelector(".container-lesson");
// containerLesson.addEventListener("click", function () {
//     window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html";
// });
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tên khóa học từ localStorage
    let courseName = localStorage.getItem("courseName");
    if (!courseName) {
        console.error("No course name found in localStorage");
        displayError("Không tìm thấy khóa học. Vui lòng quay lại trang khóa học.");
        return;
    }

    // Chuẩn hóa tên khóa học (loại bỏ khoảng trắng thừa, chuyển về dạng chuẩn)
    courseName = courseName.trim();

    // Lấy dữ liệu users từ localStorage
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    if (!usersData.length) {
        console.error("No users data found in localStorage");
        displayError("Không tìm thấy dữ liệu người dùng. Vui lòng đăng nhập lại.");
        return;
    }

    // Giả sử người dùng đầu tiên trong usersData là người dùng hiện tại
    const user = usersData[0];
    const courses = user.courses || [];

    // Tìm khóa học tương ứng với courseName
    const selectedCourse = courses.find(course => course.name.trim() === courseName);
    if (!selectedCourse) {
        console.error(`Course "${courseName}" not found`);
        displayError(`Không tìm thấy khóa học "${courseName}". Vui lòng chọn lại khóa học.`);
        return;
    }

    // Cập nhật tên khóa học trên giao diện
    const courseNameElements = document.querySelectorAll(".course-name");
    courseNameElements.forEach(element => {
        element.textContent = courseName;
    });

    // Lấy danh sách bài học
    const lessons = selectedCourse.lessons || [];
    if (!lessons.length) {
        console.error(`No lessons found for course "${courseName}"`);
        displayError(`Khóa học "${courseName}" chưa có bài học.`);
        return;
    }

    // Lấy container chứa danh sách bài học
    const containerContent = document.querySelector(".container-content");
    containerContent.innerHTML = ""; // Xóa nội dung tĩnh hiện tại

    // Tạo các hàng (row) để hiển thị bài học, mỗi hàng chứa tối đa 4 bài học
    let currentRow = document.createElement("div");
    currentRow.className = "row";

    lessons.forEach((lesson, index) => {
        // Tạo container cho bài học
        const lessonContainer = document.createElement("div");
        lessonContainer.className = "container-lesson";
        lessonContainer.innerHTML = `
            <p class="course-name">${courseName}</p>
            <h2>Bài ${index + 1}</h2>
            <div class="task">
                <span>${lesson.videoCount || 4} videos</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F37142" />
                </svg>
                <span>${lesson.duration || 50} phút</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F37142" />
                </svg>
                <span>${lesson.testCount || 1} bài Test</span>
            </div>
            <div class="progress-bar">
                <div class="completion-rate" style="width: ${lesson.progress || 40}%"></div>
            </div>
            <span class="progress">${lesson.progress || 40}% Hoàn thành</span>
        `;

        // Thêm sự kiện click để chuyển hướng đến trang học
        lessonContainer.addEventListener("click", function () {
            localStorage.setItem("selectedLesson", JSON.stringify(lesson));
            window.location.href = "/team2-mankai-user/SessionManager/pages/vocabulary_Video.html";
        });

        // Thêm bài học vào hàng hiện tại
        currentRow.appendChild(lessonContainer);

        // Nếu đã đủ 4 bài học hoặc là bài học cuối cùng, thêm hàng vào container và tạo hàng mới
        if ((index + 1) % 4 === 0 || index === lessons.length - 1) {
            containerContent.appendChild(currentRow);
            currentRow = document.createElement("div");
            currentRow.className = "row";
        }
    });

    // Hàm hiển thị thông báo lỗi trên giao diện
    function displayError(message) {
        const errorDiv = document.createElement("div");
        errorDiv.style.color = "red";
        errorDiv.style.textAlign = "center";
        errorDiv.style.margin = "20px";
        errorDiv.textContent = message;
        containerContent.appendChild(errorDiv);
    }
});