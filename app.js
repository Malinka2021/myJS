const btnHamburger = document.querySelector('.hamburger-menu');
const menuPanel = document.querySelector('.menu-panel');

btnHamburger.addEventListener('click', (event) => {
    console.log(menuPanel.classList);
    menuPanel.classList.toggle('active');
    console.log(menuPanel.classList);
 }
);