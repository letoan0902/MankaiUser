let containerList = document.querySelector(".container-list");

function renderExam() {
  console.log(user.studyMankai[2].detail);
  let html = user.studyMankai[2].detail.map((data, index) => {
    return `
                <div class="exam">
                    <div class="content-exam">
                        <p>Bài thi</p>
                        <h2>${data.name}</h2>
                        <div class="task">
                            <span>${data.exams.length} đề thi</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#F37142"/>
                            </svg>
                            <span>${data.people} người tham gia</span>
                        </div>
                        <img class="btn-join" src="../../assets/image/Button.png" alt="">
                    </div>
                    <div class="img">
                        <img src="../../assets/image/background-thi.thu.png" alt="">
                    </div>
                </div>
        `;
  });
  console.log(html);

  let convert = html.join("");
  containerList.innerHTML = convert;

  let joinButtons = document.querySelectorAll(".btn-join");
  joinButtons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      localStorage.removeItem("indexExamN");
      localStorage.setItem("indexExamN", JSON.stringify(index));
      document.location.href = "./list-exam.html";
    });
  });
}

renderExam();
saveData();
