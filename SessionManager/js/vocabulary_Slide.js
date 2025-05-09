document.addEventListener("DOMContentLoaded", function () {
    const documentListSection = document.querySelector(".document-list-section");
    const commentSection = document.querySelector(".comment-section");
    const lessonDetails = document.querySelectorAll(".lesson-details");
    const navButtons = document.querySelectorAll(".lesson-navigation .nav-button");

    function showSection(section) {
        lessonDetails.forEach((detail) => (detail.style.display = "none"));
        documentListSection.style.display = "none";
        commentSection.style.display = "none";
        
        if (section === "moTa") {
            lessonDetails.forEach((detail) => (detail.style.display = "block"));
        } else if (section === "taiLieu") {
            documentListSection.style.display = "block";
        } else if (section === "thaoLuan") {
            commentSection.style.display = "block";
        }
    }

    navButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            navButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            
            const buttonText = button.textContent.trim();
            if (buttonText === "Mô tả") {
                showSection("moTa");
            } else if (buttonText === "Tài liệu 3") {
                showSection("taiLieu");
            } else if (buttonText === "Thảo luận") {
                showSection("thaoLuan");
            }
        });
    });
    
    showSection("moTa");
});


const slide = document.querySelector('.slide');
const percentageSpan = document.querySelector('.percentage');
const zoomInButton = document.querySelector('.slide-input button:last-of-type'); 
const zoomOutButton = document.querySelector('.slide-input button:first-of-type'); 

let currentPercentage = 100;
const scaleStep = 10; 
const minPercentage = 50;
const maxPercentage = 200;

function updateSlideScale() {
    slide.style.transform = `scale(${currentPercentage / 100})`;
    percentageSpan.textContent = `${currentPercentage}%`;
}

zoomInButton.addEventListener('click', () => {
    if (currentPercentage < maxPercentage) {
        currentPercentage += scaleStep;
        updateSlideScale();
    }
});

zoomOutButton.addEventListener('click', () => {
    if (currentPercentage > minPercentage) {
        currentPercentage -= scaleStep;
        updateSlideScale();
    }
});

updateSlideScale();



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
            <div class="comment-body">
                <div class="comment-header">
                    <div class="user-info">
                        <img src="/team2-mankai-user/assets/icons/icon_20.png" alt="" />
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