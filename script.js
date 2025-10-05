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

/* ===================================
   TAMBAHKAN KE SCRIPT.JS YANG UDAH ADA
   Copy paste di bawah code script.js existing
   =================================== */

// Portfolio Page Scripts
// Cek apakah ini portfolio page
const isPortfolioPage = document.querySelector('.navbar');

if (isPortfolioPage) {
    // Add portfolio-page class to body
    document.body.classList.add('portfolio-page');
    
    // Theme Toggle untuk Navbar
    const navThemeBtn = document.getElementById('navThemeBtn');
    if (navThemeBtn) {
        navThemeBtn.addEventListener('click', () => {
            if (body.classList.contains('light')) {
                body.classList.remove('light');
                body.classList.add('dark');
                navThemeBtn.textContent = '☀️';
            } else {
                body.classList.remove('dark');
                body.classList.add('light');
                navThemeBtn.textContent = '🌙';
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.glass-card').forEach(card => {
        observer.observe(card);
    });

    // Active Nav Link on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section, .hero-section');
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect untuk hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 700);
        }
    });
}