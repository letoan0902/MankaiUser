const pages = [
  {
    id: "page-change-video",
    url: "/team2-mankai-user/SessionManager/pages/vocabulary_Detail.html",
    checkRender: "video",
  },
  {
    id: "page-change-FC",
    url: "/team2-mankai-user/SessionManager/pages/flashCard.html",
    checkRender: "FC",
  },
  {
    id: "page-change-test",
    url: "/team2-mankai-user/ExamManager/pages/baikiemtra.html",
    checkRender: "test",
  },
  {
    id: "page-change-text",
    url: "/team2-mankai-user/SessionManager/pages/vocabulary_Detail.html",
    checkRender: "text",
  },
  {
    id: "page-change-slide",
    url: "/team2-mankai-user/SessionManager/pages/vocabulary_Detail.html",
    checkRender: "slide",
  },
  {
    id: "page-change-audio",
    url: "/team2-mankai-user/SessionManager/pages/audio.html",
    checkRender: "audio",
  },
];

pages.forEach((page) => {
  const element = document.getElementById(page.id);
  if (element) {
    element.addEventListener("click", () => {
      if (element.classList.contains("this-page")) return;
      localStorage.setItem('renderStatus', page.checkRender);
      window.location.href = page.url;
    });
  }
});

const btnPower = document.querySelector(".frame-btn-power");
if (btnPower) {
  btnPower.addEventListener("click", () => {
    window.location.href = "./flashCard.html";
  });
}

const btnBackMain = document.querySelector(".left-content svg");
if (btnBackMain) {
  btnBackMain.addEventListener("click", () => {
    window.location.href = "/team2-mankai-user/CourseManager/pages/lesson.html";
  });
}

const courseName = JSON.parse(localStorage.getItem("courseName"));
const selectedLessonId = JSON.parse(localStorage.getItem("selectedLessonId"));
const course = user.course.find((c) => c.name === courseName);
const lesson = course.lessons.find((l) => l.id === selectedLessonId);

const detailFC = lesson.detail.find((d) => d.name === "Flash Card");
if (detailFC) {
  updateSvg("progress-circle-fc", detailFC.progress, "#F37142");
}

let desk = document.getElementById("desk");
if (desk) {
  desk.style.fontFamily = "FS Pro Display, sans-serif";
  let detail = lesson.detail[0];
  let listComment = detail.discuss.listComment;

  let lessonInfo = document.querySelector(".lesson-description");
  let documentListSection = document.querySelector(".document-list-section");
  let commentSection = document.querySelector(".comment-section");
  let lessonNavigation = document.querySelector(".lesson-navigation");
  let navButtons = lessonNavigation.querySelectorAll(".nav-button");

  let quantityDocument = detail.document.length;
  let numberOfDocuments = document.querySelector(".number-of-documents");
  numberOfDocuments.textContent = quantityDocument;
  function renderMoTa() {
    lessonInfo.innerHTML = "";
    let div = document.createElement("div");
    div.className = "lesson-details";
    div.innerHTML = detail.describe;
    lessonInfo.appendChild(div);

    lessonInfo.style.display = "block";
    documentListSection.style.display = "none";
    commentSection.style.display = "none";
  }

  function renderTaiLieu() {
    documentListSection.innerHTML = "";

    for (let i = 0; i < detail.document.length; i += 2) {
      let docContent = document.createElement("div");
      docContent.className = "document-content";
      for (let j = i; j < i + 2 && j < detail.document.length; j++) {
        let doc = detail.document[j];
        let docDiv = document.createElement("div");
        docDiv.className = "document-item";
        docDiv.innerHTML = `
                    <div class="document-info">
                    <img src="/team2-mankai-user/assets/icons/icon_23.png" alt="" />
                    <div class="file-details">
                            <h4 class="file-name">${doc.name}</h4>
                            <span class="file-size">${doc.capacity}</span>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="download-button">
                        <img src="/team2-mankai-user/assets/icons/icon_24.png" alt="Tải về" />
                        </button>
                    </div>
                    `;
        docContent.appendChild(docDiv);
      }
      documentListSection.appendChild(docContent);
    }

    documentListSection.querySelectorAll(".download-button").forEach((btn) => {
      btn.addEventListener("click", function () {
        let documentItem = btn.closest(".document-item");

        const existingStatus = documentItem.querySelector(".download-status");
        if (existingStatus) {
          existingStatus.remove();
        }

        if (documentItem.querySelector(".downloading-text")) return;

        let downloadStatusDiv = document.createElement("div");
        downloadStatusDiv.classList.add("download-status");
        downloadStatusDiv.innerHTML = `<span class="downloading-text">Đang tải về...</span>`;
        documentItem
          .querySelector(".file-details")
          .appendChild(downloadStatusDiv);
        setTimeout(() => {
          downloadStatusDiv.textContent = "Đã tải xuống";
        }, 2000);
      });
    });

    lessonInfo.style.display = "none";
    documentListSection.style.display = "block";
    commentSection.style.display = "none";
  }

  function renderThaoLuan() {
    commentSection.innerHTML = "";
    let commentInputDiv = document.createElement("div");
    commentInputDiv.className = "new-comment";
    commentInputDiv.innerHTML = `
        <div class="input-with-icon">
        <div class="icon-placeholder">
        <img src="/team2-mankai-user/assets/icons/icon_20.png" alt=""/>
        </div>
        <div class="comment-input">
        <input type="text" placeholder="Bạn muốn thảo luận vấn đề gì?" />
                    <button class="send-button">
                    <img src="/team2-mankai-user/assets/icons/icon_21.png" alt=""/>
                    </button>
                    </div>
                    </div>
        `;
    commentSection.appendChild(commentInputDiv);

    let commentsTitle = document.createElement("div");
    commentsTitle.className = "comments-title";
    commentsTitle.innerHTML = `<h3>${listComment.length} bình luận</h3>`;
    commentSection.appendChild(commentsTitle);

    [...listComment].reverse().forEach((cmt) => {
      let cmtDiv = document.createElement("div");
      cmtDiv.className = "comment";
      cmtDiv.innerHTML = `
            <div class="user-avatar">
            <img src="${cmt.avatar}" alt="" />
            </div>
            <div class="comment-body">
            <div class="comment-header">
            <div class="user-info">
                            <span class="user-name">${
                              cmt.idUser == user.id ? "Bạn" : cmt.name
                            }</span>
                            </div>
                    </div>
                    <p class="comment-text">${cmt.content}</p>
                    <span class="comment-date">${cmt.time}</span>
                    <button class="reply-button">Phản hồi</button>
                </div>
            `;
      commentSection.appendChild(cmtDiv);
    });

    let input = commentInputDiv.querySelector("input");
    let sendBtn = commentInputDiv.querySelector(".send-button");
    sendBtn.addEventListener("click", function () {
      let text = input.value.trim();
      if (text) {
        let newComment = {
          id:
            listComment.length > 0
              ? listComment[listComment.length - 1].id + 1
              : 3000,
          idUser: user.id,
          name: user.name,
          avatar: user.avatar,
          content: text,
          time: getCurrentTime(),
        };

        listComment.push(newComment);
        saveData();

        let newCommentDiv = document.createElement("div");
        newCommentDiv.className = "comment";
        newCommentDiv.innerHTML = `
                <div class="user-avatar">
                        <img src="${user.avatar}" alt="" />
                        </div>
                    <div class="comment-body">
                        <div class="comment-header">
                        <div class="user-info">
                                <span class="user-name">Bạn</span>
                                </div>
                        </div>
                        <p class="comment-text">${text}</p>
                        <span class="comment-date">${getCurrentTime()}</span>
                        <button class="reply-button">Phản hồi</button>
                        </div>
                `;

        let firstComment = commentSection.querySelector(".comment");
        if (firstComment) {
          commentSection.insertBefore(newCommentDiv, firstComment);
        } else {
          commentSection.appendChild(newCommentDiv);
        }

        let commentsTitleH3 =
          commentSection.querySelector(".comments-title h3");
        let count = commentSection.querySelectorAll(".comment").length;
        commentsTitleH3.textContent = `${count} bình luận`;

        input.value = "";
      }
    });

    lessonInfo.style.display = "none";
    documentListSection.style.display = "none";
    commentSection.style.display = "block";
  }

  function getCurrentTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }

  // chuyển tab
  navButtons[0].addEventListener("click", function () {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    renderMoTa();
  });
  navButtons[1].addEventListener("click", function () {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    renderTaiLieu();
  });
  navButtons[2].addEventListener("click", function () {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    renderThaoLuan();
  });

  renderMoTa();

  document.addEventListener("DOMContentLoaded", function () {
    let desk = document.getElementById("desk");
    let hideBtn = document.querySelector(".play-icon");
    let showBtn = document.querySelector(".play-icon-01");

    if (hideBtn && desk && showBtn) {
      hideBtn.addEventListener("click", function () {
        desk.style.display = "none";
        showBtn.style.display = "inline";
      });

      showBtn.addEventListener("click", function () {
        desk.style.display = "flex";
        showBtn.style.display = "none";
      });
    }
  });
}
