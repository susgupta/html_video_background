const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

//add listener
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});