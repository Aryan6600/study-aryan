const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');


burger.addEventListener('click', () => {
    console.log("hi");
    nav.classList.toggle('left-[-100%]');
});