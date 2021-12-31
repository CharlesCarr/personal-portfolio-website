// HAMBURGER MENU

const hamburgerBtn = document.getElementById('hamburger-container');
const hiddenMenu = document.getElementById('hidden-menu');

hamburgerBtn.addEventListener('click', hamburgerFunc);

function hamburgerFunc() {
    hamburgerBtn.classList.toggle('change');
    

    if (hamburgerBtn.classList.contains('change')) {
        hiddenMenu.style.display = 'block';
    } else {
        hiddenMenu.style.display = 'none';
    }
};

// Need to write a function for when a selection is made to close the menu