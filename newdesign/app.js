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



// SMOOTH SCROLL JS

function smoothScroll(target, duration) {
// const smoothScroll = (target, duration) => {
    let targetTarget = document.querySelector(target);
    // How far from top of the screen
    let targetPosition = targetTarget.getBoundingClientRect().top;
    // Relative to the window not the actual element
    let startPosition = window.pageYOffset;
    // Distance between the two points
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
    // const animation = (currentTime) => {
        if (startTime === null ) startTime = currentTime;
        let timeElapsed = currentTime - startTime;

        let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
        
    }

    function ease (t, b, c, d) {
    // const ease = (t, b, c, d) => {
        t /= d/2;
	    if (t < 1) return c/2*t*t*t + b;
	    t -= 2;
	    return c/2*(t*t*t + 2) + b;
    }



    requestAnimationFrame(animation);

}

const navAbout = document.getElementById('about-nav');
const navProjects = document.getElementById('projects-nav');
const navContact = document.getElementById('contact-nav');


navAbout.addEventListener('click', function() {
    console.log('working');
    smoothScroll('#about-section', 2000);
});

navProjects.addEventListener('click', function() {
    console.log('working');
    smoothScroll('#projects-container', 2000);
});


navContact.addEventListener('click', function() {
    console.log('working');
    smoothScroll('#contact-section', 2000);
});