let btnJoinItemExam = document.querySelectorAll(".join-item-exam");
let modalExam = document.querySelector(".modal-exam");
let btnReturn = document.querySelector("#btn-return");
modalExam.style.display = "none";
let overlay = document.querySelector(".overlay");
overlay.style.display = "none";
btnJoinItemExam.forEach(function(btn) {
      btn.addEventListener("click", function() {
          modalExam.style.display = "flex";
          overlay.style.display = "block";

      });
  });

let joinExam = document.querySelector("#btn-join-exam");
joinExam.addEventListener("click", function(){
  document.location.href = "./exam-grammar.html";
});

btnReturn.addEventListener("click", function(){
  modalExam.style.display = "none";
  overlay.style.display = "none";
});