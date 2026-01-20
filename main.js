const navClose = document.getElementById("nav-close");
const navOpen = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const downloadBtn = document.getElementById("download-btn");
const contactBtn = document.getElementById("contact-btn");

navOpen.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

navLinks.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
}));

downloadBtn.addEventListener("click", () => {
    window.open("./assets/Sameer_Resume.pdf");
});

// Scroll Animation Intersection
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2,
    }
);

document.querySelectorAll(
    ".fade-in, .slide-up, .slide-left, .slide-right, .scale-in, .stagger"
    ).forEach(el => observer.observe(el));