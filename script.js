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

// Click anywhere to go to portfolio
document.body.addEventListener('click', (e) => {
    // Cek kalau yang diklik BUKAN card atau tombol theme
    const card = document.querySelector('.profile-card');
    const themeBtn = document.getElementById('themeBtn');
    
    if (!card.contains(e.target) && !themeBtn.contains(e.target)) {
        // Redirect ke halaman portfolio
        window.location.href = 'portfolio.html'; // Ganti dengan link halaman portfolio kamu
    }
});