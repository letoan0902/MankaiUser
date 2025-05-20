let pages = [
  {
    id: "page-change-hiragana",
    url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html",
  },
  {
    id: "page-change-katakana",
    url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Katakana.html",
  },
  {
    id: "page-change-score",
    url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Score.html",
  },
  {
    id: "page-change-test",
    url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Test.html",
  },
];

pages.forEach((page) => {
  let element = document.getElementById(page.id);
  if (element) {
    element.addEventListener("click", () => {
      if (element.classList.contains("but active")) return;
      window.location.href = page.url;
    });
  }
});

function updateSidebar() {
  let lesson = user.course.find((course) => course.id == 12).lessons;
  let currentPage = window.location.pathname;
  let lessonComplete = 0;
  lesson.forEach((lesson, index) => {
    let color = "#676767";
    let pageUrl = pages[index].url;

    if (currentPage.includes(pageUrl.split("/").pop())) {
      color = "#F37142";
    }

    if (lesson.status == true) {
      updateSvg(`progress-circle${index}`, 100, color);
      lessonComplete++;
    } else {
      lesson.progress =
        (lesson.detail.filter((element) => element.status == true).length /
          lesson.detail.length) *
        100;
      if (lesson.progress > 99) {
        lesson.progress = 100;
      }
      if (lesson.progress == 100) {
        lessonComplete++;
      }
      updateSvg(`progress-circle${index}`, lesson.progress, color);
    }
  });
  let coursePercent = (lessonComplete / lesson.length) * 100;
  if (coursePercent > 99) {
    coursePercent = 100;
  }
  user.course.find((course) => course.id == 12).progress = coursePercent;
  saveData();
}

updateSidebar();
