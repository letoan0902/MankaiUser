let pages = [
    { id: "page-change-hiragana", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html" },
    { id: "page-change-katakana", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Katakana.html" },
    { id: "page-change-score", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Score.html" },
    { id: "page-change-test", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Test.html" }
];

pages.forEach(page => {
    let element = document.getElementById(page.id);
    if (element) {
        element.addEventListener("click", () => {
            if (element.classList.contains("but active")) return;
            window.location.href = page.url;
        });
    }
});

function updateSidebar(){
    let lesson = user.course.find(course => course.id == 12).lessons;
    let currentPage = window.location.pathname;
    
    lesson.forEach((lesson,index) => {
        let color = "#676767";
        let pageUrl = pages[index].url;
        
        if (currentPage.includes(pageUrl.split('/').pop())) {
            color = "#F37142";
        }
        
        if(lesson.status==true){
            updateSvg(`progress-circle${index}`, 100, color)
        } else {
            lesson.percent = (lesson.detail.filter(element => element.status == true).length)/lesson.detail.length;
            updateSvg(`progress-circle${index}`, lesson.percent*100, color);
        }
    })
}

updateSidebar();
