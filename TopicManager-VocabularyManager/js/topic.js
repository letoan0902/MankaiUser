
let topicRow = document.querySelector(".topic-row");
let listTopics = user.studyMankai[1].detail;
listTopics.forEach(topic => {
    let topicCard = document.createElement("article");
    topicCard.className = "topic-card";
    topicCard.innerHTML = `<div class="topic-content">
                        <figure class="topic-icon">
                            <img src="${topic.image}" alt="" />
                        </figure>
                        <header class="topic-header">
                            <h2 class="topic-label">Chủ đề</h2>
                            <h3 class="topic-title">${topic.name}</h3>
                        </header>
                        <p class="vocabulary-count">${topic.vocabulary.length} từ vựng</p>
                    </div>
    `;
    topicCard.addEventListener("click",function(){
        topicId = topic.id;
        saveData();
        location.href = "./vocabulary.html";
    });
    topicRow.appendChild(topicCard);
});