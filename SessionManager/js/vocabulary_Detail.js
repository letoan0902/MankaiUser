let listDetail = lesson.detail;
let mainContent = document.querySelector(".main-content-01");
let indexVideo = 0;
let btnNextVideo = document.querySelector(".button-next-video");
let btnPrevVideo = document.querySelector(".button-prev-video");
let iconFrameWord = document.querySelector(".icon-frame-word");
let renderStatus = localStorage.getItem("renderStatus");
let video = listDetail.find((d) => d.id == 1001);
let videos = video.videos;
let pageChangeVideo = document.getElementById("page-change-video");
let pageChangeSlide = document.getElementById("page-change-slide");
let pageChangeText = document.getElementById("page-change-text");
const btnClear = document.querySelector(".btn-clear");
const btnBlur = document.querySelector(".btn-blur");
const detail = lesson.detail.find((d) => d.name === "Video");
detail.status = true;
saveData();
updateSvg("progress-circle-video", 100, "#F37142");

for (let i = 0; i < 6; i++) {
  updateSvgSidebar(`svg-sidebar${i + 1}`, "#292D32");
}

checkRender(renderStatus);
function checkRender(check) {
  if (check == "text") {
    renderText();
    pageChangeText.classList.add("this-page");
    pageChangeVideo.classList.remove("this-page");
    pageChangeSlide.classList.remove("this-page");
    updateSvgSidebar(`svg-sidebar5`, "#F37142");
    renderProcess();
    btnClear.addEventListener("click", () => {
      localStorage.setItem("renderStatus", `audio`);
      window.location.href = "../pages/audio.html";
    });
    btnBlur.addEventListener("click", () => {
      localStorage.setItem("renderStatus", `slide`);
      checkRender(`slide`);
    });
  } else if (check == "slide") {
    renderSlide();
    pageChangeSlide.classList.add("this-page");
    pageChangeText.classList.remove("this-page");
    pageChangeVideo.classList.remove("this-page");
    updateSvgSidebar(`svg-sidebar4`, "#F37142");
    renderProcess();
    btnClear.addEventListener("click", () => {
      localStorage.setItem("renderStatus", `text`);
      checkRender(`text`);
    });
    btnBlur.addEventListener("click", () => {
      localStorage.setItem("renderStatus", `test`);
      window.location.href = "../../ExamManager/pages/baikiemtra.html";
    });
  } else if (check == "video") {
     btnClear.addEventListener("click", () => {
      localStorage.setItem("renderStatus", `FC`);
      window.location.href ="./flashCard.html";
    });
    renderVideo(indexVideo);
    pageChangeVideo.classList.add("this-page");
    pageChangeText.classList.remove("this-page");
    pageChangeSlide.classList.remove("this-page");
    updateSvgSidebar(`svg-sidebar1`, "#F37142");
    renderProcess();
  }
}

function renderText() {
  let text = listDetail.find((d) => d.id == 1004);
  mainContent.innerHTML = text.content;
  iconFrameWord.src = "../../assets/icons/icon_31.png";
  text.status = true;
  saveData();
  renderProcess();
  btnNextVideo.classList.add("hidden");
  btnPrevVideo.classList.add("hidden");
}

function renderVideo(indexVideo) {
  mainContent.innerHTML = videos[indexVideo].link;
  videos[indexVideo].status = true;
  video.progress =
    (videos.filter((element) => element.status == true).length /
      videos.length) *
    100;
  mainContent.style.width = "100%";
  iconFrameWord.src = "../../assets/icons/icon_05.png";
  saveData();
  renderProcess();
  btnNextVideo.classList.remove("hidden");
  btnPrevVideo.classList.remove("hidden");
}

btnNextVideo.addEventListener("click", () => {
  indexVideo++;
  if (indexVideo >= videos.length) {
    indexVideo = videos.length - 1;
  } else {
    renderVideo(indexVideo);
  }
});

btnPrevVideo.addEventListener("click", () => {
  indexVideo--;
  if (indexVideo < 0) {
    indexVideo = 0;
  } else {
    renderVideo(indexVideo);
  }
});

function renderSlide() {
  let slide = listDetail.find((d) => d.id == 1003);
  mainContent.innerHTML = `
                <embed
                    class="slide-main"
                    src="${slide.slides}"
                    type=""
                  />`;
  iconFrameWord.src = "../../assets/icons/icon_32.png";
  slide.status = true;
  saveData();
  renderProcess();
  btnNextVideo.classList.add("hidden");
  btnPrevVideo.classList.add("hidden");
}
