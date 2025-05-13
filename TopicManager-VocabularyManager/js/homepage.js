let userCard = document.querySelector(".user-card");
let featureCards = document.querySelector(".feature-cards");
let studyMankai = user.studyMankai;
studyMankai.forEach((element) => {
  let mankaiCard = document.createElement("div");
  mankaiCard.className = "feature-card";
  mankaiCard.innerHTML = `<div class="feature-details">
                    <div class="feature-title-container">
                        <div class="feature-title">${element.name}</div>
                        ${
                          element.nameImg
                            ? `<img src="${element.nameImg}" alt=""/>`
                            : ""
                        }
                    </div>
                    <div class="feature-description">
                      ${element.text}
                    </div>
                  </div>
                  <div class="explore-button-container" data-property-1="Hover">
                    <div class="explore-button">
                      <div
                        class="explore-button-content"
                        data-icon="Trailing"
                        data-size="xl"
                      >
                        <div class="explore-button-text">Khám phá ngay</div>
                        <img
                          class="explore-button-icon"
                          src="/team2-mankai-user/assets/icons/button-tieptuc.svg"
                          alt=""
                        />
                      </div>
                      <div class="explore-button-decor">
                        <div class="explore-decor-line-1"></div>
                        <div class="explore-decor-line-2"></div>
                        <div class="explore-decor-line-3"></div>
                      </div>
                    </div>
                  </div>
                  <div class="feature-decor-circle-large"></div>
                  <div class="feature-decor-circle-xlarge"></div>
                  <img
                    class="feature-image"
                    src=${element.image}
                  />
                <div 
                  class="feature-decor-dot-large" 
                  style="left: ${Math.floor(Math.random() * (710 - 690 + 1)) + 690}px; bottom: ${Math.floor(Math.random() * (35 - 5 + 1)) + 5}px;"
                ></div>
                <div 
                  class="feature-decor-dot-small" 
                  style="left: ${Math.floor(Math.random() * (550 - 490 + 1)) + 490}px; top: ${Math.floor(Math.random() * (60 - 10 + 1)) + 10}px;"
                ></div>
                <img 
                class="feature-decor-star-top" 
                src="/team2-mankai-user/assets/icons/sao-mankai2.svg" 
                alt="" 
                style="left: ${Math.floor(Math.random() * (710 - 680 + 1)) + 680}px; top: ${
                  Math.floor(Math.random() * (60 - 10 + 1)) + 10
                }px;">
                <img 
                  class="feature-decor-star-bottom" 
                  src="/team2-mankai-user/assets/icons/sao-mankai.svg" 
                  alt="" 
                  style="left: ${
                    Math.floor(Math.random() * (550 - 490 + 1)) + 490
                  }px; bottom: ${Math.floor(Math.random() * (30 - 5 + 1)) + 5}px;">
    `;

    let button = mankaiCard.querySelector(".explore-button-container");
    button.addEventListener("click",function(){
        if(element.id==11){
            location.href="./topic.html";
        } else if(element.id==13){
            location.href = "./dictionary.html";
        } else if(element.id==12){
          location.href="/team2-mankai-user/ExamManager/pages/practice-test.html";
        }
    })
  featureCards.appendChild(mankaiCard);
});

let viewAllCourse = document.querySelector(".view-all-link");
viewAllCourse.addEventListener("click",function(){
  location.href="/team2-mankai-user/CourseManager/pages/viewAllCourses.html";
})


let userRanking = users.map(user => ({
  id: user.id,
  name: user.name,
  avatar: user.avatar,
  exp: user.exp
}));

userRanking = JSON.parse(JSON.stringify(userRanking));
userRanking.sort((a, b) => b.exp - a.exp);

let currentUserId = user.id;
let emptyUser = {
  id: null,
  name: "Trống",
  avatar: "/team2-mankai-user/assets/icons/logo-vietnam-header.png",
  exp: 0
};

while (userRanking.length < 10) {
  userRanking.push({ ...emptyUser, id: `default-${userRanking.length + 1}` });
}

let rankingSection = document.querySelector(".ranking-section");


function formatName(fullName) {
  let names = fullName.split(' ');
  if (names.length <= 2) return fullName;
  return `${names[0]} ${names[names.length - 1]}`;
}

rankingSection.innerHTML = `
  <div class="ranking-content">
    <div class="ranking-header">
      <div class="ranking-title">Bảng xếp hạng</div>
    </div>
    <div class="top-rankers">
      <div class="ranker" data-property-1="Default">
        <div class="ranker-details">
          <div class="ranker-avatar-container">
            <img class="ranker-avatar" src="${userRanking[1].avatar}" />
            <div class="rank-badge">
              <div class="rank-number">2</div>
            </div>
          </div>
          <img class="crown-icon" src="/team2-mankai-user/assets/icons/vuong-mien.svg" />
          <div class="ranker-info">
            <div class="ranker-name">${formatName(userRanking[1].name)}</div>
            <div class="ranker-score">
              <div class="score-container">
                <img class="score-icon" src="/team2-mankai-user/assets/icons/sao-xephang.svg" />
                <div class="score-value">${userRanking[1].exp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-ranker" data-property-1="Variant2">
        <div class="top-ranker-container">
          <img class="top-ranker-avatar" src="${userRanking[0].avatar}" />
          <div class="rank-badge">
            <div class="rank-number">1</div>
          </div>
          <img class="top-crown-icon" src="/team2-mankai-user/assets/icons/vuong-mien.svg" />
        </div>
        <div class="ranker-info">
          <div class="ranker-name">${formatName(userRanking[0].name)}</div>
          <div class="ranker-score">
            <div class="score-container">
              <img class="score-icon" src="/team2-mankai-user/assets/icons/sao-xephang.svg" />
              <div class="score-value">${userRanking[0].exp}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ranker" data-property-1="Default">
        <div class="ranker-details">
          <div class="ranker-avatar-container">
            <img class="ranker-avatar" src="${userRanking[2].avatar}" />
            <div class="rank-badge">
              <div class="rank-number">3</div>
            </div>
          </div>
          <img class="crown-icon" src="/team2-mankai-user/assets/icons/vuong-mien.svg" />
          <div class="ranker-info">
            <div class="ranker-name">${formatName(userRanking[2].name)}</div>
            <div class="ranker-score">
              <div class="score-container">
                <img class="score-icon" src="/team2-mankai-user/assets/icons/sao-xephang.svg" />
                <div class="score-value">${userRanking[2].exp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ranking-list">
    ${userRanking.slice(3, 10).map((user, index) => {
      let position = index + 4;
      let isCurrentUser = user.id === currentUserId;
      let itemClass = isCurrentUser ? "ranking-item-highlight" : "ranking-item";
      let positionClass = isCurrentUser ? "highlight-position-text" : "position-text";
      let nameClass = isCurrentUser ? "highlight-name" : "ranking-name";
      let avatarClass = isCurrentUser ? "highlight-avatar" : "ranking-avatar";
      let scoreClass = isCurrentUser ? "highlight-score-value" : "score-value";

      return `
        <div class="${itemClass}">
          <div class="ranking-item-details">
            <div class="ranking-position">
              <div class="${positionClass}">${position}</div>
            </div>
            <img class="${avatarClass}" src="${user.avatar}" />
            <div class="${nameClass}">${formatName(user.name)}</div>
          </div>
          ${isCurrentUser ? `
            <div class="highlight-decor">
              <div class="decor-line-1"></div>
              <div class="decor-line-2"></div>
              <div class="decor-line-3"></div>
            </div>
          ` : ""}
          <div class="ranker-score">
            <div class="score-container">
              <img class="score-icon" src="/team2-mankai-user/assets/icons/sao-xephang.svg" />
              <div class="${scoreClass}">${user.exp}</div>
            </div>
          </div>
        </div>
      `;
    }).join("")}
  </div>
`;

let streakSection = document.querySelector(".streaks-section");

// Hàm định dạng ngày thành "YYYY-MM-DD"
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

// Hàm lấy số tuần trong tháng
function getWeeksInMonth(year, month) {
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);
  let daysInMonth = lastDay.getDate();
  let firstWeekDay = (firstDay.getDay() + 6) % 7; // Chuyển sang tuần bắt đầu từ T2 (0 = T2, 6 = CN)
  return Math.ceil((daysInMonth + firstWeekDay) / 7);
}

// Hàm lấy các ngày trong tuần
function getDaysInWeek(year, month, weekIndex) {
  let firstDayOfMonth = new Date(year, month, 1);
  let firstWeekDay = (firstDayOfMonth.getDay() + 6) % 7; // T2 = 0
  let startDay = weekIndex * 7 - firstWeekDay + 1;
  let days = [];
  for (let i = 0; i < 7; i++) {
    let day = new Date(year, month, startDay + i);
    if (day.getMonth() !== month) {
      days.push(null); // Ngày ngoài tháng
    } else {
      days.push(day);
    }
  }
  return days;
}


function formatDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}


function getWeeksInMonth(year, month) {
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);
  let daysInMonth = lastDay.getDate();
  let firstWeekDay = (firstDay.getDay() + 6) % 7; 
  return Math.ceil((daysInMonth + firstWeekDay) / 7);
}


function getDaysInWeek(year, month, weekIndex) {
  let firstDayOfMonth = new Date(year, month, 1);
  let firstWeekDay = (firstDayOfMonth.getDay() + 6) % 7;
  let startDay = weekIndex * 7 - firstWeekDay + 1;
  let days = [];
  for (let i = 0; i < 7; i++) {
    let day = new Date(year, month, startDay + i);
    if (day.getMonth() !== month) {
      days.push(null);
    } else {
      days.push(day);
    }
  }
  return days;
}

// Hàm kiểm tra và thêm ngày hiện tại vào streaks
function updateStreaks(user) {
  let today = formatDate(new Date());
  let hasToday = user.streaks.some(streak => streak.date === today);
  if (!hasToday) {
    let lastId = user.streaks.length > 0 ? Math.max(...user.streaks.map(s => s.id)) : 0;
    user.streaks.push({
      id: lastId + 1,
      date: today
    });
  }
}

// Hàm render streakSection
function renderStreakSection(user, year, month, weekIndex) {
  updateStreaks(user);

  let weeksInMonth = getWeeksInMonth(year, month);
  weekIndex = Math.max(0, Math.min(weekIndex, weeksInMonth - 1));
  let days = getDaysInWeek(year, month, weekIndex);

  let monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
  let displayMonth = monthNames[month];

  streakSection.innerHTML = `
    <div class="streaks-header">
      <div class="streaks-title-container">
        <img src="/team2-mankai-user/assets/icons/anhlua-xephang.svg" alt="" />
        <div class="streaks-title">Streaks</div>
      </div>
      <div class="streaks-date">${displayMonth}, ${year}</div>
    </div>
    <div class="streaks-week">
      <div class="week-text">Tuần ${weekIndex + 1}/${weeksInMonth}</div>
      <div class="week-navigation">
        <img class="nav-arrow prev-week" src="/team2-mankai-user/assets/icons/mui-ten-phai.svg" />
        <img class="nav-arrow next-week" src="/team2-mankai-user/assets/icons/mui-ten-trai.svg" />
      </div>
    </div>
    <div class="streaks-days">
      ${days.map((day, i) => {
        if (!day) {
          return `
            <div class="day-inactive">
              <div class="day-text-inactive"></div>
              <div class="day-number-inactive"></div>
            </div>
          `;
        }
        let dateStr = formatDate(day);
        let isActive = user.streaks.some(streak => streak.date === dateStr);
        let dayClass = isActive ? "day-active" : "day-inactive";
        let textClass = isActive ? "day-text" : "day-text-inactive";
        let numberClass = isActive ? "day-number" : "day-number-inactive";
        let dayNames = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
        return `
          <div class="${dayClass}">
            <div class="${textClass}">${dayNames[i]}</div>
            <div class="${numberClass}">${day.getDate()}</div>
            ${isActive ? `
              <div class="day-decor">
                <div class="day-decor-line-1"></div>
                <div class="day-decor-line-2"></div>
                <div class="day-decor-line-3"></div>
              </div>
            ` : ""}
          </div>
        `;
      }).join("")}
    </div>
  `;
  document.querySelector(".prev-week").addEventListener("click", () => {
    let newWeekIndex = weekIndex - 1;
    let newMonth = month;
    let newYear = year;
    if (newWeekIndex < 0) {
      newMonth--;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      newWeekIndex = getWeeksInMonth(newYear, newMonth) - 1;
    }
    renderStreakSection(user, newYear, newMonth, newWeekIndex);
  });

  document.querySelector(".next-week").addEventListener("click", () => {
    let newWeekIndex = weekIndex + 1;
    let newMonth = month;
    let newYear = year;
    if (newWeekIndex >= weeksInMonth) {
      newMonth++;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      newWeekIndex = 0;
    }
    renderStreakSection(user, newYear, newMonth, newWeekIndex);
  });
}

let targetDate = new Date();
let currentYear = targetDate.getFullYear();
let currentMonth = targetDate.getMonth();
let currentDay = targetDate.getDate();
let firstDayOfMonth = new Date(currentYear, currentMonth, 1);
let firstWeekDay = (firstDayOfMonth.getDay() + 6) % 7;
let currentWeekIndex = Math.floor((currentDay + firstWeekDay - 1) / 7);

renderStreakSection(user, currentYear, currentMonth, currentWeekIndex);










function renderUserCard(user){
  let currentStreaks = calculateStreaks(user.streaks);
  
  userCard.innerHTML= `<div class="user-info">
              <img
                src="${user.avatar}"
                class="user-avatar"
                alt="User avatar"
              />
              <div class="user-details">
                <div class="user-header">
                  <h2 class="user-name">${user.name}</h2>
                  <div class="user-badge">${user.level}</div>
                </div>
                <div class="contact-info">
                  <span class="user-email">${user.gmail}</span>
                  <span class="contact-separator">|</span>
                  <span class="user-location">${user.address}</span>
                </div>
              </div>
            </div>
            <div class="user-stats">
              <div class="stat-item">
                <div class="stat-value-container">
                  <img
                    src="/team2-mankai-user/assets/icons/anhlua-xephang.svg"
                    class="stat-icon"
                    alt="Streaks icon"
                  />
                  <span class="stat-value">${currentStreaks}</span>
                </div>
                <span class="stat-label">Streaks</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-value-container">
                  <img
                    src="/team2-mankai-user/assets/icons/cup1-xephang.png"
                    class="stat-icon ranking-icon"
                    alt="Ranking icon"
                  />
                  <span class="stat-value">${userRanking.findIndex(userranking => userranking.id === user.id) + 1}</span>
                </div>
                <span class="stat-label">Bảng xếp hạng</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-value-container">
                  <img
                    src="/team2-mankai-user/assets/icons/sao-xephang.svg"
                    class="stat-icon experience-icon"
                    alt="Experience icon"
                  />
                  <span class="stat-value">${user.exp}</span>
                </div>
                <span class="stat-label">Điểm kinh nghiệm</span>
              </div>
            </div>
`;
}

renderUserCard(user);


function calculateStreaks(streaks) {
  if (!streaks || streaks.length === 0) return 0;
  
  let count = 1;
  let currentDate = new Date(streaks[streaks.length - 1].date);
  
  for (let i = streaks.length - 2; i >= 0; i--) {
    let prevDate = new Date(streaks[i].date);
    let diffTime = Math.abs(currentDate - prevDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      count++;
      currentDate = prevDate;
    } else {
      break;
    }
  }
  
  return count;
}



let courseItemsRow = document.querySelector(".course-items-row");
let listCourse = user.course;
let courseCountText = document.querySelector(".course-count-text");
courseCountText.textContent = listCourse.length;
listCourse = listCourse.slice(0, 6);
listCourse.forEach(course => {
  let courseItem = document.createElement("div");
  courseItem.className = "course-item";
  courseItem.innerHTML = `
    <div class="course-item-image-container">
      <img class="course-item-image" src="/team2-mankai-user/assets/image/khoa-hoc.png" />
      <div class="course-item-overlay">
        <div class="course-item-label">Khóa học</div>
        <div class="course-item-title">${course.name}</div>
      </div>
    </div>
    <div class="course-item-content">
      <div class="course-item-details">
        <div class="course-item-info">
          <div class="course-label">Khóa học</div>
          <div class="course-title">${course.name}</div>
        </div>
        <div class="course-item-lessons">
          <div class="lessons-count">${course.lessons.length} bài học</div>
        </div>
      </div>
      <div class="course-item-button-container" data-property-1="Hover">
        <div class="course-item-button">
          <div class="course-item-button-content" data-icon="Trailing" data-size="xl">
            <img class="explore-button-icon" src="/team2-mankai-user/assets/icons/button-tieptuc.svg" alt="" />
          </div>
          <div class="course-item-button-decor">
            <div class="explore-decor-line-1"></div>
            <div class="explore-decor-line-2"></div>
            <div class="explore-decor-line-3"></div>
          </div>
        </div>
      </div>
    </div>
  `
  let button = courseItem.querySelector(".course-item-button");
  button.addEventListener("click",function(){
    courseId = course.id;
    saveData();
    if(courseId == 12){
      location.href = "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html";
    } else {
      localStorage.setItem("courseName", JSON.stringify(course.name));
      location.href = "/team2-mankai-user/CourseManager/pages/lesson.html";
    }
  })
  courseItemsRow.appendChild(courseItem);
})
