const modal = document.getElementById("hiraganaModal");
const modalMainCharacter = document.querySelector(".modal-main-character");
const modalRomanji = document.querySelector(".modal-romanji");
const strokeImage = document.getElementById("strokeImage");
const hiraganaInfo = document.getElementById("hiragana-info");
const characterGrid = document.getElementById("character-grid");
const navButtons = document.querySelectorAll('.lesson-navigation .nav-button');

function openModal(character, romanji, strokePath) {
    modalMainCharacter.textContent = character;
    modalRomanji.textContent = romanji;
    strokeImage.src = strokePath;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        navButtons.forEach(btn => {
            btn.classList.remove('active-navigation');
        });
        this.classList.add('active-navigation');

        const target = this.getAttribute('data-target');
        if (target === 'truong-am' || target == 'am-ngat') {
            hiraganaInfo.classList.remove('hidden');
            characterGrid.classList.add('hidden');
        } else {
            hiraganaInfo.classList.add('hidden');
            characterGrid.classList.remove('hidden');
        }
    });
});

hiraganaInfo.classList.add('hidden');
characterGrid.classList.remove('hidden');


