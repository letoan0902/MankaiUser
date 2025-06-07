

let topic = user.studyMankai[1].detail.find(topic => topic.id == topicId);
let course = document.querySelector(".course");
let title = document.querySelector(".title");
course.textContent = `Chủ đề ${topic.name}`;
title.textContent = `Chủ đề ${topic.name}`;
let textCurent = null;

let modalMic = document.querySelector(".modal-mic-card");
let overlay = document.querySelector(".overlay");

let vocabularyGrid = document.querySelector(".vocabulary-grid");
let listVocabulary = topic.vocabulary;

listVocabulary.forEach(vocabulary => {
    let vocabularyCard = document.createElement("section");
    vocabularyCard.className="vocabulary-card";
    vocabularyCard.innerHTML = `
    <div class="card-content">
        <div class="card-main">
            <header class="card-header">
                <p class="vocabulary-label">Từ vựng:</p>
                <div class="action-buttons">
                    <button class="mic-button">
                        <img class="microphone-icon" src="../../assets/icons/microphone-2.svg" alt="Microphone">
                    </button>
                    <button class="volume-button">
                        <img class="volume-icon" src="../../assets/icons/volume-high.svg" alt="Volume">
                    </button>
                </div>
            </header>
            <h2 class="japanese-word">${vocabulary.name}</h2>
        </div>
        <div class="translations">
            <p class="romanized-text">${vocabulary.romanized}</p>
            <p class="vietnamese-text">${vocabulary.vietsub}</p>
        </div>
    </div>
    `;

    let mic = vocabularyCard.querySelector(".mic-button");
    mic.addEventListener("click",function(){
        modalMic.classList.add("display");
        overlay.classList.add("show");
        textCurent=vocabulary.name;
        console.log(textCurent);
        
        renderModalMic(vocabulary);
    });

    vocabularyGrid.appendChild(vocabularyCard);

});

overlay.addEventListener("click",function(){
    modalMic.classList.remove("display");
    overlay.classList.remove("show");
})


let listeningStatus = document.querySelector(".listening-status");
let voiceResult = document.querySelector(".voice-result-container");
let errorMic = document.querySelector(".error-mic");
let successMic = document.querySelector(".success-mic");
let volumeModal = document.querySelector(".volume-modal");
let tryVoice = document.querySelector(".try-voice");

let microphoneButton = document.querySelector(".microphone-button");
let imgMicrophone = microphoneButton.querySelector(".img-microphone");
let voiceText = document.querySelector(".voice-result-text");
let listStar = document.querySelectorAll(".star-icon");
let ratingText = document.querySelector(".rating-text");
let flagRating = 0;

function renderModalMic(vocabulary){
    voiceResult.classList.add("hidden");
    listeningStatus.classList.remove("hidden");
    successMic.classList.remove("hidden");
    imgMicrophone.src = "../../assets/icons/microphone-3.svg";
    errorMic.classList.add("hidden");
    flagRating=0;
}

volumeModal.addEventListener("click",function(){
    successMic.classList.add("hidden");
    errorMic.classList.remove("hidden");
});

tryVoice.addEventListener("click",function(){
    successMic.classList.remove("hidden");
    errorMic.classList.add("hidden");
});

microphoneButton.addEventListener("click",function(){
    flagRating++;
    if(flagRating==1){
        imgMicrophone.src = "../../assets/icons/microphone-1.svg";
        voiceResult.classList.remove("hidden");
        listeningStatus.classList.add("hidden");
        voiceText.textContent=textCurent;
        let starRandom = Math.floor(Math.random() * 6);

        if(starRandom==0){
            ratingText.textContent="Rất tệ";
        } else if(starRandom==1){
            ratingText.textContent="Kém";
        } else if(starRandom==2){
            ratingText.textContent="Trung bình";
        } else if(starRandom==3){
            ratingText.textContent="Tốt";
        } else if(starRandom==4){
            ratingText.textContent="Tuyệt vời";
        } else if(starRandom==5){
            ratingText.textContent="Hoàn hảo";
        }
        listStar.forEach(star => star.classList.remove("active"));
        for (let i = 0; i < starRandom; i++) {
         listStar[i].classList.add("active");
        }
    }
});
