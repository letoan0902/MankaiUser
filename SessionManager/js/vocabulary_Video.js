document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users[0];
    let course = user.course.find(c => c.id == 11);
    let lesson = course.lessons.find(l => l.id == 100);
    let detail = lesson.detail[0]; 
    
    const lessonInfo = document.querySelector('.lesson-description');
    const documentListSection = document.querySelector('.document-list-section');
    const commentSection = document.querySelector('.comment-section');
    const lessonNavigation = document.querySelector('.lesson-navigation');
    const navButtons = lessonNavigation.querySelectorAll('.nav-button');

    function renderMoTa() {
        lessonInfo.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'lesson-details';
        div.innerHTML = detail.describe;
        lessonInfo.appendChild(div);

        lessonInfo.style.display = 'block';
        documentListSection.style.display = 'none';
        commentSection.style.display = 'none';
    }
    
    function renderTaiLieu() {
        documentListSection.innerHTML = '';
        for (let i = 0; i < detail.document.length; i += 2) {
            const docContent = document.createElement('div');
            docContent.className = 'document-content';
            for (let j = i; j < i + 2 && j < detail.document.length; j++) {
                const doc = detail.document[j];
                const docDiv = document.createElement('div');
                docDiv.className = 'document-item';
                docDiv.innerHTML = `
                    <div class="document-info">
                    <img src="/team2-mankai-user/assets/icons/icon_23.png" alt="" />
                        <div class="file-details">
                            <h4 class="file-name">${doc.name}</h4>
                            <span class="file-size">10MB</span>
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

        documentListSection.querySelectorAll('.download-button').forEach(btn => {
            btn.addEventListener('click', function() {
                const documentItem = btn.closest('.document-item');
                if (documentItem.querySelector('.downloading-text')) return;
                const downloadStatusDiv = document.createElement('div');
                downloadStatusDiv.classList.add('download-status');
                downloadStatusDiv.innerHTML = `<span class="downloading-text">Đang tải về...</span>`;
                documentItem.querySelector('.file-details').appendChild(downloadStatusDiv);
                setTimeout(() => {
                    downloadStatusDiv.remove();
                }, 2000);
            });
        });
        
        lessonInfo.style.display = 'none';
        documentListSection.style.display = 'block';
        commentSection.style.display = 'none';
    }

    function renderThaoLuan() {
        commentSection.innerHTML = '';
        const commentInputDiv = document.createElement('div');
        commentInputDiv.className = 'new-comment';
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

        // đếm số bình luận
        const commentsTitle = document.createElement('div');
        commentsTitle.className = 'comments-title';
        commentsTitle.innerHTML = `<h3>${detail.discuss.listComment.length} bình luận</h3>`;
        commentSection.appendChild(commentsTitle);
        
        detail.discuss.listComment.forEach(cmt => {
            const cmtDiv = document.createElement('div');
            cmtDiv.className = 'comment';
            cmtDiv.innerHTML = `
            <div class="user-avatar">
            <img src="${cmt.avatar}" alt="" />
                </div>
                <div class="comment-body">
                    <div class="comment-header">
                    <div class="user-info">
                            <span class="user-name">${cmt.name}</span>
                        </div>
                    </div>
                    <p class="comment-text">${cmt.content}</p>
                    <span class="comment-date">${cmt.time}</span>
                    <button class="reply-button">Phản hồi</button>
                </div>
                `;
            commentSection.appendChild(cmtDiv);
        });

        const input = commentInputDiv.querySelector('input');
        const sendBtn = commentInputDiv.querySelector('.send-button');
        sendBtn.addEventListener('click', function () {
            const text = input.value.trim();
            if (text) {
                const newCommentDiv = document.createElement('div');
                newCommentDiv.className = 'comment';
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
                        <p class="comment-text">${text}</p>
                        <span class="comment-date">${getCurrentTime()}</span>
                        <button class="reply-button">Phản hồi</button>
                    </div>
                `;
                commentSection.insertBefore(newCommentDiv, commentsTitle.nextSibling);
                const commentsTitleH3 = commentSection.querySelector('.comments-title h3');
                const count = commentSection.querySelectorAll('.comment').length;
                commentsTitleH3.textContent = `${count} bình luận`;
                input.value = '';
            }
        });
        
        lessonInfo.style.display = 'none';
        documentListSection.style.display = 'none';
        commentSection.style.display = 'block';
    }
    
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        return `${hours}:${minutes} ${day}/${month}/${year}`;
    }

    // chuyển tab
    navButtons[0].addEventListener('click', function () {
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        renderMoTa();
    });
    navButtons[1].addEventListener('click', function () {
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        renderTaiLieu();
    });
    navButtons[2].addEventListener('click', function () {
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        renderThaoLuan();
    });
    
    renderMoTa();
});

document.addEventListener("DOMContentLoaded", function () {
    const space = document.getElementById("space");
    const hideBtn = document.querySelector(".play-icon");
    const showBtn = document.querySelector(".play-icon-01");

    if (hideBtn && space && showBtn) {
        showBtn.style.display = "none";

        hideBtn.addEventListener("click", function () {
            space.style.display = "none";
            hideBtn.style.display = "none";
            showBtn.style.display = "inline";
        });

        showBtn.addEventListener("click", function () {
            space.style.display = "flex";
            hideBtn.style.display = "inline";
            showBtn.style.display = "none";
        });
    }
});