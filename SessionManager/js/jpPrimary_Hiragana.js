const modal = document.getElementById("hiraganaModal");
const modalMainCharacter = document.querySelector(".modal-main-character");
const modalRomanji = document.querySelector(".modal-romanji");
const strokeImage = document.getElementById("strokeImage");
const hiraganaInfo = document.getElementById("hiragana-info");
const characterGrid = document.getElementById("character-grid");
const navButtons = document.querySelectorAll('.lesson-navigation .nav-button');

function openModal(character, romanji, strokePath) {
    if (!modalMainCharacter || !modalRomanji || !modal) {
        console.error("Không tìm thấy các phần tử modal.");
        return;
    }
    modalMainCharacter.textContent = character;
    modalRomanji.textContent = romanji;
    if (strokePath) {
        strokeImage.src = strokePath;
        strokeImage.style.display = "block";
    } else {
        strokeImage.style.display = "none";
    }
    modal.style.display = "block";
}

function closeModal() {
    if (modal) {
        modal.style.display = "none";
    }
}

// Hàm render từ vựng
function renderVocabulary(list) {
    characterGrid.innerHTML = "";
    if (!Array.isArray(list) || list.length === 0) {
        characterGrid.innerHTML = "<p>Không có dữ liệu từ vựng để hiển thị.</p>";
        return;
    }

    list.forEach(item => {
        const div = document.createElement("div");
        div.className = "character-item";
        div.innerHTML = `
            <span class="character">${item.name}</span>
            <span class="romaji">${item.text}</span>
        `;
        div.addEventListener("click", () => openModal(item.name, item.text, item.strokePath));
        characterGrid.appendChild(div);
    });
}

// Hàm render khái niệm
function renderConcept(conceptArray) {
    hiraganaInfo.innerHTML = "";
    if (!Array.isArray(conceptArray) || conceptArray.length === 0) {
        hiraganaInfo.innerHTML = "<p>Không có dữ liệu khái niệm để hiển thị.</p>";
        return;
    }

    conceptArray.forEach(concept => {
        const div = document.createElement("div");
        div.className = "concept-item";
        div.innerHTML = `<h3>${concept.name}</h3><p>${concept.text}</p>`;

        if (Array.isArray(concept.content)) {
            const ul = document.createElement("ul");
            concept.content.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.name;

                if (Array.isArray(item.detail)) {
                    const subUl = document.createElement("ul");
                    item.detail.forEach(detail => {
                        const subLi = document.createElement("li");
                        subLi.textContent = detail.name;
                        subUl.appendChild(subLi);
                    });
                    li.appendChild(subUl);
                }

                ul.appendChild(li);
            });
            div.appendChild(ul);
        }

        hiraganaInfo.appendChild(div);
    });
}

// Hàm lấy tên phần dựa trên target
function getSectionName(target) {
    const map = {
        "bang-chu-cai": "Bảng chữ cái",
        "bien-am": "Biến âm",
        "am-ghep": "Âm ghép",
        "truong-am": "Trường âm",
        "am-ngat": "Âm ngắt"
    };
    return map[target] || "";
}

// Hàm load dữ liệu
function loadData(target) {
    const usersData = localStorage.getItem('users');
    if (!usersData) {
        showMessage("Không tìm thấy dữ liệu trong localStorage.");
        return;
    }

    const users = JSON.parse(usersData);
    if (!Array.isArray(users) || users.length === 0) {
        showMessage("Dữ liệu người dùng không hợp lệ.");
        return;
    }

    const user = users[0];
    const course = user.course.find(c => c.name === "Tiếng Nhật Sơ Cấp");
    if (!course) {
        showMessage("Không tìm thấy khóa học 'Tiếng Nhật Sơ Cấp'.");
        console.error("Danh sách khóa học:", user.course);
        return;
    }

    const hiraganaLesson = course.lessons.find(l => l.name === "Hiragana");
    if (!hiraganaLesson) {
        showMessage("Không tìm thấy bài học 'Hiragana'.");
        console.error("Danh sách bài học:", course.lessons);
        return;
    }

    const sectionName = getSectionName(target);
    const section = hiraganaLesson.detail.find(d => d.name === sectionName);
    if (!section) {
        showMessage(`Không tìm thấy phần "${sectionName}".`);
        console.error("Danh sách phần:", hiraganaLesson.detail);
        return;
    }

    // Render dữ liệu
    if (section.vocabulary) {
        characterGrid.classList.remove("hidden");
        hiraganaInfo.classList.add("hidden");
        renderVocabulary(section.vocabulary);
    } else if (section.concept) {
        characterGrid.classList.add("hidden");
        hiraganaInfo.classList.remove("hidden");
        renderConcept(section.concept);
    } else {
        showMessage("Không có nội dung để hiển thị.");
    }
}

// Hàm hiển thị thông báo
function showMessage(msg) {
    characterGrid.classList.add("hidden");
    hiraganaInfo.classList.remove("hidden");
    hiraganaInfo.innerHTML = `<p>${msg}</p>`;
}

// các nút bên trái
navButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        navButtons.forEach(btn => btn.classList.remove("active-navigation"));
        this.classList.add("active-navigation");
        const target = this.getAttribute("data-target");
        loadData(target);
    });
});

window.onload = function () {
    loadData("bang-chu-cai");
};