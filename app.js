const btnHamburger = document.querySelector('.hamburger-menu');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
const frameImage = document.querySelector('#frame');
const images = [
    'images/1.jpg',
    'images/2.webp',
    'images/3.webp',
    'images/4.webp',
    'images/5.webp',
    'images/6.jpeg'];

let currentImageIndex = 0;
// Set the initial image

frameImage.addEventListener('click', () => {
    //const randomIndex = Math.floor(Math.random() * images.length);
    //frameImage.src = images[randomIndex];

    currentImageIndex++;  // +1 loop

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Reset to the first image
    }
        
    frameImage.src = images[currentImageIndex]; // Set the new image
}
);

btnHamburger.addEventListener('click', (event) => {
    
    menuPanel.classList.toggle('active');
    
 }
);
document.addEventListener('click', (event) => {
    if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove('active');
    }
}
);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuPanel.classList.remove('active');
    });
}
);