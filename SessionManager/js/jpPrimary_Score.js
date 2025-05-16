// const modal = document.getElementById("hiraganaModal");
// const modalMainCharacter = document.querySelector(".modal-main-character");
// const modalRomanji = document.querySelector(".modal-romanji");
// const strokeImage = document.getElementById("strokeImage");
// const characterGrid = document.getElementById("character-grid");

// function openModal(character, romanji, strokePath) {
//     if (!modalMainCharacter || !modalRomanji || !modal) {
//         console.error("Không tìm thấy các phần tử modal.");
//         return;
//     }
//     modalMainCharacter.textContent = character;
//     modalRomanji.textContent = romanji;
//     if (strokePath) {
//         strokeImage.src = strokePath;
//         strokeImage.style.display = "block";
//     } else {
//         strokeImage.style.display = "none";
//     }
//     modal.style.display = "block";
// }

// function closeModal() {
//     if (modal) {
//         modal.style.display = "none";
//     }
// }

// // Hàm render số đếm
// function renderNumbers() {
//     if (!characterGrid) {
//         console.error("Không tìm thấy phần tử 'character-grid'.");
//         return;
//     }

//     const usersData = localStorage.getItem("users");
//     if (!usersData) {
//         characterGrid.innerHTML = "<p>Không tìm thấy dữ liệu số đếm.</p>";
//         return;
//     }

//     const users = JSON.parse(usersData);
//     if (!Array.isArray(users) || users.length === 0) {
//         characterGrid.innerHTML = "<p>Dữ liệu người dùng không hợp lệ.</p>";
//         return;
//     }

//     const user = users[0];
//     const course = user.course.find(c => c.name === "Tiếng Nhật Sơ Cấp");
//     if (!course) {
//         characterGrid.innerHTML = "<p>Không tìm thấy khóa học 'Tiếng Nhật Sơ Cấp'.</p>";
//         return;
//     }

//     const lesson = course.lessons.find(l => l.name === "Số đếm");
//     if (!lesson) {
//         characterGrid.innerHTML = "<p>Không tìm thấy bài học 'Số đếm'.</p>";
//         return;
//     }

//     // Lấy danh sách số đếm
//     const numbers = lesson.detail;
//     if (!Array.isArray(numbers) || numbers.length === 0) {
//         characterGrid.innerHTML = "<p>Không có dữ liệu số đếm để hiển thị.</p>";
//         return;
//     }

//     // Xóa nội dung cũ và render danh sách số đếm theo thứ tự
//     characterGrid.innerHTML = "";
//     numbers.forEach(number => {
//         const div = document.createElement("div");
//         div.className = "character-item";
//         div.innerHTML = `
//             <span class="character">${number.name}</span>
//             <span class="romanji">${number.text}</span>
//         `;
//         div.addEventListener("click", function () {
//             openModal(number.name, number.text, null);
//         });
//         characterGrid.appendChild(div);
//     });
// }

// // Gắn sự kiện cho nút render số đếm
// const renderButton = document.querySelector(".lesson-navigation .nav-button");
// if (renderButton) {
//     renderButton.addEventListener("click", function () {
//         renderNumbers();
//     });
// } else {
//     console.error("Không tìm thấy nút render 'Số đếm'.");
// }

// window.onload = function () {
//     renderNumbers();
// };

// Lấy các phần tử DOM
const modal = document.getElementById("hiraganaModal");
const modalMainCharacter = document.querySelector(".modal-main-character");
const modalRomanji = document.querySelector(".modal-romanji");
const strokeImage = document.getElementById("strokeImage");
const characterGrid = document.getElementById("character-grid");

// Hàm mở modal
function openModal(character, romanji, strokePath) {
    if (!modalMainCharacter || !modalRomanji || !modal) {
        console.error("Không tìm thấy các phần tử modal.");
        return;
    }
    modalMainCharacter.textContent = character || "Không có dữ liệu";
    modalRomanji.textContent = romanji || "Không có dữ liệu";
    if (strokePath) {
        strokeImage.src = strokePath;
        strokeImage.style.display = "block";
    } else {
        strokeImage.style.display = "none";
    }
    modal.style.display = "flex"; // Hiển thị modal
}

// Hàm đóng modal
function closeModal() {
    if (modal) {
        modal.style.display = "none"; // Ẩn modal
    }
}

// Hàm render số đếm
function renderNumbers() {
    if (!characterGrid) {
        console.error("Không tìm thấy phần tử 'character-grid'.");
        return;
    }

    const usersData = localStorage.getItem("users");
    if (!usersData) {
        characterGrid.innerHTML = "<p>Không tìm thấy dữ liệu số đếm.</p>";
        return;
    }

    const users = JSON.parse(usersData);
    if (!Array.isArray(users) || users.length === 0) {
        characterGrid.innerHTML = "<p>Dữ liệu người dùng không hợp lệ.</p>";
        return;
    }

    const user = users[0];
    const course = user.course.find(c => c.name === "Tiếng Nhật Sơ Cấp");
    if (!course) {
        characterGrid.innerHTML = "<p>Không tìm thấy khóa học 'Tiếng Nhật Sơ Cấp'.</p>";
        return;
    }

    const lesson = course.lessons.find(l => l.name === "Số đếm");
    if (!lesson) {
        characterGrid.innerHTML = "<p>Không tìm thấy bài học 'Số đếm'.</p>";
        return;
    }

    // Lấy danh sách số đếm
    const numbers = lesson.detail;
    if (!Array.isArray(numbers) || numbers.length === 0) {
        characterGrid.innerHTML = "<p>Không có dữ liệu số đếm để hiển thị.</p>";
        return;
    }

    // Xóa nội dung cũ và render danh sách số đếm theo thứ tự
    characterGrid.innerHTML = "";
    numbers.forEach(number => {
        const div = document.createElement("div");
        div.className = "character-item";
        div.innerHTML = `
            <span class="character">${number.name}</span>
            <span class="romanji">${number.text}</span>
        `;
        div.addEventListener("click", function () {
            openModal(number.name, number.text, null); // Chỉ mở modal khi nhấn vào ký tự
        });
        characterGrid.appendChild(div);
    });
}

// Gắn sự kiện cho nút render số đếm
const renderButton = document.querySelector(".lesson-navigation .nav-button");
if (renderButton) {
    renderButton.addEventListener("click", function () {
        renderNumbers();
    });
} else {
    console.error("Không tìm thấy nút render 'Số đếm'.");
}

// Đảm bảo modal không tự động hiển thị khi tải trang
window.onload = function () {
    renderNumbers(); // Chỉ render dữ liệu, không mở modal
};