const generalOptions = {};

const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('faded');
            generalObserver.unobserve(entry.target);
        }
    });
}, generalOptions);

// observe all required elements at once
document.querySelectorAll('.fade-up').forEach(element => {
    generalObserver.observe(element);
});