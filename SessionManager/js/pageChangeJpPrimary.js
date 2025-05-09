const pages = [
    { id: "page-change-hiragana", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Hiragana.html" },
    { id: "page-change-katakana", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Katakana.html" },
    { id: "page-change-score", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Score.html" },
    { id: "page-change-test", url: "/team2-mankai-user/SessionManager/pages/jpPrimary_Test.html" }
];

pages.forEach(page => {
    const element = document.getElementById(page.id);
    if (element) {
        element.addEventListener("click", () => {
            if (element.classList.contains("but active")) return;
            window.location.href = page.url;
        });
    }
});