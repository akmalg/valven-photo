// Animasi sederhana saat scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Berikan efek pada setiap item galeri
document.querySelectorAll('.grid-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.6s ease-out";
    observer.observe(item);
});

// Navbar change background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = "15px 8%";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.padding = "30px 8%";
        nav.style.boxShadow = "none";
    }
});