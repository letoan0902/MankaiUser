let modal = document.getElementById("hiraganaModal");
let modalMainCharacter = document.querySelector(".modal-main-character");
let modalRomanji = document.querySelector(".modal-romanji");
let strokeImage = document.getElementById("strokeImage");
let hiraganaInfo = document.getElementById("hiragana-info");
let characterGrid = document.getElementById("character-grid");
let navButtons = document.querySelectorAll(".lesson-navigation .nav-button");

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

  list.forEach((item) => {
    let div = document.createElement("div");
    div.className = "character-item";
    div.innerHTML = `
            <span class="character">${item.name}</span>
            <span class="romaji">${item.text}</span>
        `;
    div.addEventListener("click", () =>
      openModal(item.name, item.text, item.strokePath)
    );
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

  conceptArray.forEach((concept) => {
    let div = document.createElement("div");
    div.className = "concept-item";
    div.innerHTML = `<h3>${concept.name}</h3><p>${concept.text}</p>`;

    if (Array.isArray(concept.content)) {
      let ul = document.createElement("ul");
      concept.content.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.name;

        if (Array.isArray(item.detail)) {
          let subUl = document.createElement("ul");
          item.detail.forEach((detail) => {
            let subLi = document.createElement("li");
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
  let map = {
    "bang-chu-cai": "Bảng chữ cái",
    "bien-am": "Biến âm",
    "am-ghep": "Âm ghép",
    "truong-am": "Trường âm",
    "am-ngat": "Âm ngắt",
  };
  return map[target] || "";
}

// Hàm load dữ liệu
function loadData(target) {
  let course = user.course.find((c) => c.name === "Tiếng Nhật Sơ Cấp");
  if (!course) {
    showMessage("Không tìm thấy khóa học 'Tiếng Nhật Sơ Cấp'.");
    console.error("Danh sách khóa học:", user.course);
    return;
  }

  let katakanaLesson = course.lessons.find((l) => l.name === "Katakana");
  if (!katakanaLesson) {
    showMessage("Không tìm thấy bài học 'Katakana'.");
    console.error("Danh sách bài học:", course.lessons);
    return;
  }

  let sectionName = getSectionName(target);
  let section = katakanaLesson.detail.find((d) => d.name === sectionName);
  if (!section) {
    showMessage(`Không tìm thấy phần "${sectionName}".`);
    console.error("Danh sách phần:", katakanaLesson.detail);
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

  section.status = true;
  saveData();
  updateSidebar();
}

// Hàm hiển thị thông báo
function showMessage(msg) {
  characterGrid.classList.add("hidden");
  hiraganaInfo.classList.remove("hidden");
  hiraganaInfo.innerHTML = `<p>${msg}</p>`;
}

// các nút bên trái
navButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    navButtons.forEach((btn) => btn.classList.remove("active-navigation"));
    this.classList.add("active-navigation");
    let target = this.getAttribute("data-target");
    loadData(target);
  });
});

window.onload = function () {
  loadData("bang-chu-cai");
};
