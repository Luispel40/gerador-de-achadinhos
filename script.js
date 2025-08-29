const form = document.querySelector('form');
const name = document.querySelector('#name');
const butonName = document.querySelector('#buton-name');
const link = document.querySelector('#link');
const color = document.querySelector('#color');

color.addEventListener('input', () => {
    const span = document.querySelector('span'); 
    span.style.backgroundColor = color.value;
    span.textContent = color.value;
});