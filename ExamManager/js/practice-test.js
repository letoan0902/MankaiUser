let joinButtons = document.querySelectorAll(".btn-join");
joinButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.location.href = "./list-exam.html";
    });
});