// HAMBURGER MENU

const hamburgerBtn = document.getElementById('hamburger-container');
const hiddenMenu = document.getElementById('hidden-menu');
const topLogo = document.getElementById('logo');
const topContainer = document.getElementById('top');

hamburgerBtn.addEventListener('click', hamburgerFunc);

function hamburgerFunc() {
    hamburgerBtn.classList.toggle('change');
    

    if (hamburgerBtn.classList.contains('change')) {
        hiddenMenu.style.display = 'block';
        topLogo.style.color = 'white';
        body.style.overflowY = 'hidden';
        // top.style.position = 'fixed';
        // document.style.overflowY="hidden";
        // fullContainer.style.padding = '0';

        // window.addEventListener('click', hamburgerFunc);



    } else {
        hiddenMenu.style.display = 'none';
        topLogo.style.color = 'black';
    }
};

// Need to write a function for when a selection is made to close the menu
hiddenMenu.addEventListener('click', closeMenu);

function closeMenu() {
    hiddenMenu.style.display = 'none';
    topLogo.style.color = 'black';
    hamburgerBtn.classList.toggle('change');
};


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

// Resume Button Click

const resumeButton = document.getElementById('resume-btn');

const openResume = () => {
    window.open('./images/Charlie Carr Resume v043021 copy.pdf', '_blank');
};

resumeButton.addEventListener('click', openResume);


// GitHub Buttons for Projects

// Variables for GitHub Buttons
const parkCityGitHub = document.getElementById('code');
const rockPaperScissorsGitHub = document.getElementById('code-two');
const teslaGitHub = document.getElementById('code-three');
const parkCityDemo = document.getElementById('demo');
const rockPaperScissorsDemo = document.getElementById('demo-two');
const teslaDemo = document.getElementById('demo-three');

// Adding Event Listeners
parkCityGitHub.addEventListener('click', parkCityToGH);
rockPaperScissorsGitHub.addEventListener('click', rockPaperScissorsToGH);
teslaGitHub.addEventListener('click', teslaToGH);
parkCityDemo.addEventListener('click', parkCityToDemo);
rockPaperScissorsDemo.addEventListener('click', rockPaperScissorsToDemo);
teslaDemo.addEventListener('click', teslaToDemo);

// GitHub Functions

// Park City to GitHub Function
function parkCityToGH() {
    window.open('https://github.com/CharlesCarr/park-city-hotel', '_blank');
}
// Rock, Paper, Scissors to GitHub Function
function rockPaperScissorsToGH() {
    window.open('https://github.com/CharlesCarr/rock-paper-scissors-game', '_blank');
}
// Tesla to GitHub Function
function teslaToGH() {
    window.open('https://github.com/CharlesCarr/tesla-clone', '_blank');
}

// Demo Functions

// Park City to GitHub Function
function parkCityToDemo() {
    window.open('https://charlescarr.github.io/park-city-hotel/', '_blank');
}
// Rock, Paper, Scissors to GitHub Function
function rockPaperScissorsToDemo() {
    window.open('https://charlescarr.github.io/rock-paper-scissors-game/', '_blank');
}
// Tesla to GitHub Function
function teslaToDemo() {
    window.open('https://charlescarr.github.io/tesla-clone/', '_blank');
}