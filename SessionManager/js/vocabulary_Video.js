document.addEventListener("DOMContentLoaded", function () {
    const documentListSection = document.querySelector(".document-list-section");
    const commentSection = document.querySelector(".comment-section");
    const lessonDetailsSections = document.querySelectorAll(".lesson-details");
    const lessonNavigation = document.querySelector(".lesson-navigation");
    const taiLieuButton = Array.from(lessonNavigation.querySelectorAll(".nav-button")).find((button) => button.textContent.trim() === "Tài liệu 3");
    const moTaButton = Array.from(lessonNavigation.querySelectorAll(".nav-button")).find((button) => button.textContent.trim() === "Mô tả");
    const thaoLuanButton = Array.from(lessonNavigation.querySelectorAll(".nav-button")).find((button) => button.textContent.trim() === "Thảo luận");

    if (documentListSection) {
        documentListSection.style.display = "none";
    }
    if (commentSection) {
        commentSection.style.display = "none";
    }

    if (taiLieuButton) {
        taiLieuButton.addEventListener("click", function (event) {
            event.preventDefault();
            
            lessonDetailsSections.forEach((section) => {
                section.style.display = "none";
            });
            
            if (documentListSection) {
                documentListSection.style.display = "block";
            }
            
            if (commentSection) {
                commentSection.style.display = "none";
            }
            
            lessonNavigation.querySelectorAll(".nav-button").forEach((btn) => btn.classList.remove("active"));
            taiLieuButton.classList.add("active");
        });
    }

    if (moTaButton) {
        moTaButton.addEventListener("click", function (event) {
            event.preventDefault();
            lessonDetailsSections.forEach((section) => {
                section.style.display = "block";
            });
            
            if (documentListSection) {
                documentListSection.style.display = "none";
            }
            if (commentSection) {
                commentSection.style.display = "none";
            }
            
            lessonNavigation.querySelectorAll(".nav-button").forEach((btn) => btn.classList.remove("active"));
            moTaButton.classList.add("active");
        });
    }

    if (thaoLuanButton) {
        thaoLuanButton.addEventListener("click", function (event) {
            event.preventDefault();
            
            lessonDetailsSections.forEach((section) => {
                section.style.display = "none";
            });
            
            if (documentListSection) {
                documentListSection.style.display = "none";
            }
            
            if (commentSection) {
                commentSection.style.display = "block";
            }
            
            lessonNavigation.querySelectorAll(".nav-button").forEach((btn) => btn.classList.remove("active"));
            thaoLuanButton.classList.add("active");
        });
    }
});

const downloadButtons = document.querySelectorAll('.document-item:not(.downloading) .download-button');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const documentItem = button.closest('.document-item');
        const fileName = documentItem.querySelector('.file-name').textContent;

        documentItem.classList.add('downloading');

        const downloadStatusDiv = document.createElement('div');
        downloadStatusDiv.classList.add('download-status');
        downloadStatusDiv.innerHTML = `
            <span class="file-size">${documentItem.querySelector('.file-size').textContent}</span>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <span class="downloading-text">Đang tải về... 0%</span>
        `;

        documentItem.querySelector('.file-details').appendChild(downloadStatusDiv);

        const progressBar = documentItem.querySelector('.progress');
        const progressText = documentItem.querySelector('.downloading-text');

        let progress = 0;
        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                progressText.textContent = 'Đã tải xong';
            } else {
                progress += 5;
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `Đang tải về... ${progress}%`;
            }
        }, 200);
    });
});

const commentInput = document.querySelector('.comment-input input');
const sendButton = document.querySelector('.send-button');
const commentsContainer = document.querySelector('.comment-section');
const commentsTitle = document.querySelector('.comments-title h3');

sendButton.addEventListener('click', () => {
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const newCommentDiv = document.createElement('div');
        newCommentDiv.classList.add('comment');

        newCommentDiv.innerHTML = `
            <div class="user-avatar">
                <img src="/team2-mankai-user/assets/icons/icon_20.png" alt="" />
            </div>
            <div class="comment-body">
                <div class="comment-header">
                    <div class="user-info">
                        <span class="user-name">Bạn</span>
                    </div>
                </div>
                <p class="comment-text">${commentText}</p>
                <span class="comment-date">${getCurrentTime()}</span>
                <button class="reply-button">Phản hồi</button>
            </div>
        `;

        commentsContainer.appendChild(newCommentDiv);

        const currentCommentCount = commentsContainer.querySelectorAll('.comment').length;
        commentsTitle.textContent = `${currentCommentCount} bình luận`;

        commentInput.value = '';
    }
});

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
}


