document.addEventListener("DOMContentLoaded", function () {
    let course = user.course.find(c => c.id == courseId);
    let lesson = course.lessons.find(l => l.id == lessonId);
    let detail = lesson.detail[0];
    let listDetail = lesson.detail;
    
    let lessonInfo = document.querySelector('.lesson-description');
    let documentListSection = document.querySelector('.document-list-section');
    let commentSection = document.querySelector('.comment-section');
    let lessonNavigation = document.querySelector('.lesson-navigation');
    let navButtons = lessonNavigation.querySelectorAll('.nav-button');
    let mainContent = document.querySelector('.main-content-01');


    function renderMoTa() {
        lessonInfo.innerHTML = '';
        let div = document.createElement('div');
        div.className = 'lesson-details';
        div.innerHTML = detail.describe;
        lessonInfo.appendChild(div);
        
        lessonInfo.style.display = 'block';
        documentListSection.style.display = 'none';
        commentSection.style.display = 'none';
    }
    
    function renderTaiLieu() {
        documentListSection.innerHTML = '';
        // h
        for (let i = 0; i < detail.document.length; i += 2) {
            let docContent = document.createElement('div');
            docContent.className = 'document-content';
            for (let j = i; j < i + 2 && j < detail.document.length; j++) {
                let doc = detail.document[j];
                let docDiv = document.createElement('div');
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
                let documentItem = btn.closest('.document-item');
                if (documentItem.querySelector('.downloading-text')) return;
                let downloadStatusDiv = document.createElement('div');
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
        let commentInputDiv = document.createElement('div');
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

        let commentsTitle = document.createElement('div');
        commentsTitle.className = 'comments-title';
        commentsTitle.innerHTML = `<h3>${detail.discuss.listComment.length} bình luận</h3>`;
        commentSection.appendChild(commentsTitle);
        
        detail.discuss.listComment.forEach(cmt => {
            let cmtDiv = document.createElement('div');
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

        let input = commentInputDiv.querySelector('input');
        let sendBtn = commentInputDiv.querySelector('.send-button');
        sendBtn.addEventListener('click', function () {
            let text = input.value.trim();
            if (text) {
                let newCommentDiv = document.createElement('div');
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
                // cập nhật số lượng bình luận
                let commentsTitleH3 = commentSection.querySelector('.comments-title h3');
                let count = commentSection.querySelectorAll('.comment').length;
                commentsTitleH3.textContent = `${count} bình luận`;
                input.value = '';
            }
        });

        lessonInfo.style.display = 'none';
        documentListSection.style.display = 'none';
        commentSection.style.display = 'block';
    }

    function getCurrentTime() {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let day = String(now.getDate()).padStart(2, '0');
        let month = String(now.getMonth() + 1).padStart(2, '0');
        let year = now.getFullYear();
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

    function renderText() {
        let text = listDetail.find(d => d.id == 1004);
        mainContent.innerHTML = text.content;
    }

    renderText();

});

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

updateSvgCourse("svg1", 0);