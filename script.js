// Get or set theme from localStorage
function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    updateThemeButton(theme);
}

function updateThemeButton(theme) {
    const themeBtns = document.querySelectorAll('.theme-toggle');
    themeBtns.forEach(btn => {
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getTheme();
    setTheme(savedTheme);
});

// Theme Toggle for index page
const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// Animated Title
const titles = [
    'I am problem solver',
    'I am creative thinker',
    'I am code enthusiast',
    'I am design lover'
];

let currentIndex = 0;
const titleElement = document.getElementById('animatedTitle');

if (titleElement) {
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
}

// Click anywhere to go to portfolio (only on index page)
const card = document.querySelector('.profile-card');
if (card) {
    document.body.addEventListener('click', (e) => {
        const themeBtn = document.getElementById('themeBtn');
        
        if (!card.contains(e.target) && !themeBtn.contains(e.target)) {
            window.location.href = 'portfolio.html';
        }
    });
}

// Portfolio Page Scripts
const isPortfolioPage = document.querySelector('.navbar');

if (isPortfolioPage) {
    document.body.classList.add('portfolio-page');
    
    // Theme Toggle untuk Navbar
    const navThemeBtn = document.getElementById('navThemeBtn');
    if (navThemeBtn) {
        navThemeBtn.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
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