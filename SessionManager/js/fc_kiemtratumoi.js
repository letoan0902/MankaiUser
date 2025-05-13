
// Khi click vào đáp án
function highlightSelected(answer) {
  answer.style.border = "1px solid #0BA5EC";
  answer.style.background = "#F0F9FF";
  answer.style.boxShadow = "0px 4px 0px 0px #0BA5EC";
}

// Đánh dấu đúng
function markCorrect(answer) {
  answer.style.background = "#ECFDF3";
  answer.style.color = "#12B76A";
  answer.style.border = "1px solid #12B76A";
  answer.style.boxShadow = "0px 4px 0px 0px #12B76A";
}

// Đánh dấu sai
function markWrong(answer) {
  answer.style.background = "#FEF3F2";
  answer.style.color = "#F04438";
  answer.style.border = "1px solid #F04438";
  answer.style.boxShadow = "0px 4px 0px 0px #F04438";
}