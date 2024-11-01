// Smooth Scroll to Sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect on Scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Add Animations to Project Cards and Skills
const animatedElements = document.querySelectorAll('.project-card, .skill-category, .contact-info, .resume-content');
const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

animatedElements.forEach(element => {
    animationObserver.observe(element);
});

// Add a bounce effect on the "Download Resume" button
const resumeButton = document.querySelector('.resume-download-btn');
if (resumeButton) {
    resumeButton.addEventListener('mouseover', () => {
        resumeButton.classList.add('bounce');
    });

    resumeButton.addEventListener('animationend', () => {
        resumeButton.classList.remove('bounce');
    });
}
