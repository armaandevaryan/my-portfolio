// Or, for the icon switch:
const toggleSwitch = document.getElementById('darkModeSwitch');

toggleSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // If using icons, you'd also toggle a class on the switch element
  // toggleSwitch.classList.toggle('dark-mode');
});

const homeNav = document.querySelector('.nav-item1');
homeNav.addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({'behavior':'smooth'});
});

const aboutNav = document.querySelector('.nav-item2');
aboutNav.addEventListener('click',() => {
    document.getElementById('about').scrollIntoView({'behavior':'smooth'});
});

const skillNav = document.querySelector('.nav-item3');
skillNav.addEventListener('click',() => {
    document.getElementById('skills').scrollIntoView({'behavior':'smooth'});
});


const portfolioNav  = document.querySelector('.nav-item4');
portfolioNav.addEventListener('click',() => {
    document.getElementById('Portfolio').scrollIntoView({'behavior':'smooth'});
});

const ContactNav  = document.querySelector('.nav-item5');
ContactNav.addEventListener('click',() => {
    document.getElementById('Contact').scrollIntoView({'behavior':'smooth'});
});

var tl = gsap.timeline();

tl.from(".nav-links div", {
    opacity: 0,
    duration: 1,
    y: 30,
    stagger: 0.2,
    ease: "power2.out"
});

tl.from(".hero-image", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

tl.from(".hero-text", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});
tl.from(".gawar", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});
tl.from("#skills", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});
tl.from("#Portfolio", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});
tl.from("#Contact", {
    duration: 1.2,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll-btn');

    scrollBtn.addEventListener('click', () => {
        console.log("Button clicked!"); // test
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});
