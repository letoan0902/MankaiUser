const cards = document.querySelectorAll(".card-exam");
const popup = document.querySelector(".pop-up");
const btnBack = document.querySelector(".btn-pre");
const btnReplay = document.querySelector(".btn-re");
const resultTime = document.querySelector(".result-time");
const recordTime = document.querySelector(".record-time");
const numberTime = document.querySelector(".number-time");
const btnClose = document.querySelector(".frame-btn-power");
const btnBackMain = document.querySelector(".left-content svg");
const btnBlur = document.querySelector(".btn-blur");
const btnClear = document.querySelector(".btn-clear");
let progressFC = JSON.parse(localStorage.getItem("progressFC")) || 0;

btnBlur.addEventListener("click", ()=>{
  window.location.href = "./fc_hoctumoi.html"
});

btnClear.addEventListener("click", ()=>{
  window.location.href = "./fc_kiemtratumoi.html"
});

btnBackMain.addEventListener("click", ()=>{
    window.location.href = "./flashCard.html"
});
let selectedCards = [];
let matchedPairs = 0;
let startTime = Date.now();
let timerInterval;

// Hàm định dạng thời gian mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Bắt đầu đồng hồ
function startTimer() {
  startTime = Date.now();
  numberTime.textContent = "00:00";
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    numberTime.textContent = formatTime(elapsed);
  }, 1000);
}

// Dừng đồng hồ
function stopTimer() {
  clearInterval(timerInterval);
}

// Lấy dữ liệu từ localStorage
const data = JSON.parse(localStorage.getItem("selectedLessonFlashCard")) || { vocabulary: [] };
let cardData = [];

// Đảm bảo có dữ liệu từ vựng và tạo cặp từ - nghĩa
if (data.vocabulary.length > 0) {
  const randomPairs = getRandomPairs(data.vocabulary, cards.length / 2);
  randomPairs.forEach(item => {
    cardData.push({ id: item.id, text: item.word, type: "word" });
    cardData.push({ id: item.id, text: item.meaning, type: "meaning" });
  });

  // Xáo trộn các thẻ sau khi tạo cặp từ - nghĩa
  cardData = shuffleArray(cardData);
} else {
  console.error("Không tìm thấy dữ liệu từ vựng trong selectedLessonFlashCard.");
  alert("Không có dữ liệu từ vựng để ghép thẻ.");
}

// Hàm lấy ngẫu nhiên các cặp từ-nghĩa
function getRandomPairs(array, pairCount) {
  const shuffled = shuffleArray([...array]);
  return shuffled.slice(0, pairCount);
}

// Xáo trộn mảng sử dụng thuật toán Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Gán dữ liệu vào thẻ theo thứ tự
cards.forEach((card, i) => {
  if (!cardData[i]) return;
  card.dataset.id = cardData[i].id;
  card.dataset.type = cardData[i].type;
  card.querySelector(".content").textContent = cardData[i].text;

  card.addEventListener("click", () => {
    if (card.classList.contains("matched") || selectedCards.includes(card)) return;

    highlightSelected(card);
    selectedCards.push(card);

    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;

      if (first.dataset.id === second.dataset.id && first.dataset.type !== second.dataset.type) {
        markCorrect(first);
        markCorrect(second);
        matchedPairs++;

        if (matchedPairs === cardData.length / 2) {
          endGame();
        }
      } else {
        markWrong(first);
        markWrong(second);
        setTimeout(() => {
          resetCardStyle(first);
          resetCardStyle(second);
        }, 800);
      }

      selectedCards = [];
    }
  });
});

// Kết thúc trò chơi
function endGame() {
  stopTimer();
  setTimeout(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    resultTime.textContent = formatTime(elapsed);

    const best = localStorage.getItem("matchBestTime");
    if (!best || elapsed < parseInt(best)) {
      localStorage.setItem("matchBestTime", elapsed);
      recordTime.textContent = formatTime(elapsed);
    } else {
      recordTime.textContent = formatTime(parseInt(best));
    }

    popup.style.display = "flex";
    popup.style.animation = 'slideIn 0.3s ease forwards'
    document.body.classList.add("blur-background");
    
    let courseName = JSON.parse(localStorage.getItem("courseName"));
    let selectedLessonId = JSON.parse(localStorage.getItem("selectedLessonId"));

        let course = user.course.find(c => c.name === courseName); 
        let lesson = course.lessons.find(l => l.id === selectedLessonId);
        let detail = lesson.detail.find(d => d.name === "Flash Card");

        if (detail) {            
            detail.progress2 = 34
        }

        saveData();
        // Lưu vào validation.js
        localStorage.setItem("selectedLessonFlashCard", JSON.stringify(selectedLesson));
  }, 400);
}

// Thẻ được chọn đầu tiên
function highlightSelected(card) {
  card.style.border = "1px solid #0BA5EC";
  card.style.background = "#F0F9FF";
  card.style.boxShadow = "0px 4px 0px 0px #0BA5EC";
}

// Đánh dấu đúng
function markCorrect(card) {
  card.classList.add("matched");
  card.style.background = "#ECFDF3";
  card.style.color = "#12B76A";
  card.style.border = "1px solid #12B76A";
  card.style.boxShadow = "0px 4px 0px 0px #12B76A";
}

// Đánh dấu sai
function markWrong(card) {
  card.style.background = "#FEF3F2";
  card.style.color = "#F04438";
  card.style.border = "1px solid #F04438";
  card.style.boxShadow = "0px 4px 0px 0px #F04438";
}

// Reset thẻ
function resetCardStyle(card) {
  card.classList.remove("matched");
  card.style.background = "#FAFAFA";
  card.style.color = "#3D3D3D";
  card.style.border = "1px solid #DDD";
  card.style.boxShadow = "0px 4px 0px 0px #DDD";
}

// Nút quay về
btnBack.addEventListener("click", () => {
  window.location.href = "./flashCard.html";
});

btnClose.addEventListener("click", () => {
  window.location.href = "./flashCard.html";
});

// Nút làm lại
btnReplay.addEventListener("click", () => {
  window.location.reload();
});

// Bắt đầu game và đồng hồ
startTimer();
updateSvg("progress-circle-fc",progressFC , "#F37142");