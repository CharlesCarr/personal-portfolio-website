// PROJECTS DISPLAY
/* Attempted to build a carousel with arrows but got a bit stuck
so deciding to use same type of carousel with just buttons for each
section rather than arrows to simplify and be able to complete other tasks.
Will come back to this after finished with other tasks.
*/

// Different Projects
const projectsList = document.getElementById('content-carousel').getElementsByClassName('project');
console.log(projectsList);

const projectOne = document.getElementById('project-one');
const projectTwo = document.getElementById('project-two');
const projectThree = document.getElementById('project-three');
// Different Buttons
const btnOne = document.getElementById('btn-project-one');
const btnTwo = document.getElementById('btn-project-two');
const btnThree = document.getElementById('btn-project-three');
// Event Listeners
btnOne.addEventListener('click', displayProjectOne);
btnTwo.addEventListener('click', displayProjectTwo);
btnThree.addEventListener('click', displayProjectThree);
// Functions for Event Listeners
function displayProjectOne() {
    for (let i=0; i<projectsList.length; i++) {
        if (projectsList[i].classList.contains('active')) {
            projectsList[i].classList.remove('active');
            projectsList[i].classList.add('hide');
        }
    }
    projectOne.classList.add('active');
    projectOne.classList.remove('hide');
    btnOne.style.backgroundColor = 'var(--primary-text-color)';
    btnTwo.style.backgroundColor = 'var(--background-color)';
    btnThree.style.backgroundColor = 'var(--background-color)';
}

function displayProjectTwo() {
    for (let i=0; i<projectsList.length; i++) {
        if (projectsList[i].classList.contains('active')) {
            projectsList[i].classList.remove('active');
            projectsList[i].classList.add('hide');
        }
    }
    projectTwo.classList.add('active');
    projectTwo.classList.remove('hide');
    btnTwo.style.backgroundColor = 'var(--primary-text-color)';
    btnOne.style.backgroundColor = 'var(--background-color)';
    btnThree.style.backgroundColor = 'var(--background-color)';
}

function displayProjectThree() {
    for (let i=0; i<projectsList.length; i++) {
        if (projectsList[i].classList.contains('active')) {
            projectsList[i].classList.remove('active');
            projectsList[i].classList.add('hide');
        }
    }
    projectThree.classList.add('active');
    projectThree.classList.remove('hide');
    btnThree.style.backgroundColor = 'var(--primary-text-color)';
    btnTwo.style.backgroundColor = 'var(--background-color)';
    btnOne.style.backgroundColor = 'var(--background-color)';
}


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
