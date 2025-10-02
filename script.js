// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeBtn.textContent = '🌙';
    }
});

// Animated Title
const titles = [
    'I am problem solver',
    'I am creative thinker',
    'I am code enthusiast',
    'I am design lover'
];

let currentIndex = 0;
const titleElement = document.getElementById('animatedTitle');

function changeTitle() {
    titleElement.style.opacity = '0';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        titleElement.textContent = titles[currentIndex];
        titleElement.style.opacity = '1';
    }, 500);
}

titleElement.style.transition = 'opacity 0.5s ease';
setInterval(changeTitle, 3000);