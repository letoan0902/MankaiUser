const cards = document.querySelectorAll(".card-exam");
const popup = document.querySelector(".pop-up");
const btnBack = document.querySelector(".btn-pre");
const btnReplay = document.querySelector(".btn-re");
const resultTime = document.querySelector(".result-time");
const recordTime = document.querySelector(".record-time");
const numberTime = document.querySelector(".number-time");

let selectedCards = [];
let matchedPairs = 0;
let totalPairs = cards.length / 2;
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
const data = JSON.parse(localStorage.getItem("newWordsFC")) || [];
let cardData = [];

data.forEach(item => {
  cardData.push({ id: item.id, text: item.word, type: "word" });
  cardData.push({ id: item.id, text: item.meaning, type: "meaning" });
});

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

        if (matchedPairs === totalPairs) {
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
            document.body.classList.add("blur-background");
          }, 400);
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
  card.classList.remove("active");
  card.style.background = "#FAFAFA";
  card.style.color = "#3D3D3D";
  card.style.border = "1px solid #DDD";
  card.style.boxShadow = "0px 4px 0px 0px #DDD";
}

// Nút quay về
btnBack.addEventListener("click", () => {
  document.body.classList.remove("blur-background");
  window.location.href = "./flashCard.html";
});

// Nút làm lại
btnReplay.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.classList.remove("blur-background");
  matchedPairs = 0;
  selectedCards = [];
  startTimer();

  cards.forEach((card, i) => {
    card.classList.remove("matched");
    resetCardStyle(card);
    if (cardData[i]) {
      card.dataset.id = cardData[i].id;
      card.dataset.type = cardData[i].type;
      card.querySelector(".content").textContent = cardData[i].text;
    }
  });
});

// Bắt đầu game và đồng hồ
startTimer();
